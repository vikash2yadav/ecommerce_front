import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import SearchC from '../SearchC';
import SelectC from '../SelectC';

const Table = ({ columns, data, fetchDataApi, defaultFilter, setDefaultFilter }) => {

    const handleSearchChange = async (columnId, value) => {

        let newFilters = [...defaultFilter.filters];
        const existingFilterIndex = newFilters.findIndex(filter => filter.id === columnId);

        if (existingFilterIndex >= 0) {
            if (value) {
                newFilters[existingFilterIndex].value = value;
            } else {
                newFilters.splice(existingFilterIndex, 1);
            }
        } else if (value) {
            newFilters.push({ id: columnId, value });
        }

        setDefaultFilter(prev => ({
            ...prev,
            filters: newFilters
        }));

        await fetchDataApi({ ...defaultFilter, filters: newFilters });
    };

    const handleShort = async (columnId, direction) => {
        const newSortBy = defaultFilter.sortBy.map(sort =>
            sort.id === columnId ? { ...sort, desc: direction } : sort
        );

        if (!newSortBy.find(sort => sort.id === columnId)) {
            newSortBy.push({ id: columnId, desc: direction });
        }

        setDefaultFilter(prev => ({
            ...prev,
            sortBy: newSortBy
        }));

        await fetchDataApi({ ...defaultFilter, sortBy: newSortBy });
    };

    const statusOptions = [
        { name: "All", id: '2' },
        { name: "Active", id: '1' },
        { name: "Not Active", id: '0' },
    ]

    const handleStatusChange = async (columnId, value) => {
        await handleSearchChange(columnId, value);
    }

    const handleOrderStatusChange = async (columnId, value) => {
        await handleSearchChange(columnId, value);
    }

    const orderStatusOptions = [
        { name: "All", id: '' },
        { name: "Pending", id: '0' },
        { name: "Shipped", id: '1' },
        { name: "Delivered", id: '2' },
        { name: "Cancelled", id: '3' },
    ]

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <>
            <table {...getTableProps()} className="w-full text-center border border-2 text-sm rtl:text-right">
                <thead className="text-sm uppercase bg-gray-400 text-white">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                column?.isColumn && (
                                    <th className="px-6 py-3" {...column.getHeaderProps()}>
                                        <div className='flex justify-evenly items-center text-sm'>
                                            {column.render('Header')}
                                            {column?.isShort && (
                                                <div className='flex justify-between'>
                                                    {/* <FaLongArrowAltUp className='hover:text-gray-500 hover:cursor-pointer' onClick={() => handleShort(column?.access, false)} />
                                                    <FaLongArrowAltDown className='hover:text-gray-500 hover:cursor-pointer' onClick={() => handleShort(column?.access, true)} /> */}
                                                </div>
                                            )}
                                        </div>
                                    </th>
                                )
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {headerGroups.map(headerGroup => (
                        <>
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    column?.isColumn && (
                                        <th className="py-3 px-6" {...column.getHeaderProps()}>
                                            {column?.isSearch && (
                                                <div className='flex justify-center bg-gray-100 items-center'>
                                                    <SearchC
                                                        sx={{ width: "120px" }}
                                                        className="text-xs"
                                                        onChange={(event) => handleSearchChange(column?.access, event.target.value)}
                                                        placeholder={column?.Header} />
                                                </div>
                                            )}

                                            {(column?.isStatus) && (
                                                <div className='flex w-full justify-center items-center'>
                                                    <SelectC
                                                        options={statusOptions}
                                                        showSearch={false}
                                                        className="text-xs w-28"
                                                        onChange={(id) => handleStatusChange(column?.access, id)}
                                                        placeholder={column?.Header} />
                                                </div>
                                            )}

                                            {(column?.isOrderStatus) && (
                                                <div className='flex w-full justify-center items-center'>
                                                    <SelectC
                                                        options={orderStatusOptions}
                                                        showSearch={false}
                                                        className="text-xs w-28"
                                                        onChange={(id) => handleOrderStatusChange(column?.access, id)}
                                                        placeholder={column?.Header} />
                                                </div>
                                            )}

                                        </th>
                                    )
                                ))}
                            </tr>
                        </>
                    ))}
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="bg-white border-b dark:border-gray-700">
                                {row.cells.map(cell => (
                                    cell?.column?.isColumn && (
                                        <td className="px-4 py-6 font-medium" {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
