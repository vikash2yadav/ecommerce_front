import React from 'react';
import { useTable } from 'react-table';
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import SearchC from '../SearchC';

const Table = ({ columns, data, fetchDataApi, defaultFilter, setDefaultFilter }) => {

    const handleSearchChange = async (columnId, value) => {
        let newFilters = [...defaultFilter.filters];
        const existingFilterIndex = newFilters.findIndex(filter => filter.id === columnId);
        
        if (existingFilterIndex >= 0) {
            if (value) {
                newFilters[existingFilterIndex].value = value;
            } else {
                // Remove filter if value is empty
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
            <table {...getTableProps()} className="w-full text-center border border-2 text-sm  rtl:text-right">
                <thead className="text-sm uppercase bg-gray-400 text-white">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (

                                column?.isColumn && (
                                    <th className="px-6 py-3" {...column.getHeaderProps()}>
                                        <div className='flex justify-evenly items-center text-sm'>
                                            {column.render('Header')}
                                            {
                                                column?.isShort && (
                                                    <span className='flex'>
                                                        <FaLongArrowAltUp className='hover:text-gray-500 hover:cursor-pointer ' onClick={'handleShortUp'}/>
                                                        <FaLongArrowAltDown className='hover:text-gray-500 hover:cursor-pointer ' />
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </th>
                                )

                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {/* <tr> */}
                    {headerGroups.map(headerGroup => (
                        <>
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (

                                column?.isColumn && (
                                    <th className="py-3 px-6" {...column.getHeaderProps()}>
                                        {column?.isSearch && (
                                          <div className='flex justify-center items-center'>
                                              <SearchC
                                                sx={{ width: "120px" }}
                                                className="text-xs"
                                                onChange={(event, value) => handleSearchChange(column?.access, event.target.value)}
                                                placeholder={column?.Header} />
                                          </div>
                                        )}
                                    </th>

                                )

                            ))}
                        </tr>
                        </>
                    ))}

                    {/* {props?.tableHeaderArray?.map((thField, index) => (
                                <td
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                    key={index}
                                >
                                    {thField?.filterInput === "input" &&
                                        thField?.columnShow &&
                                        thField?.filter && (
                                            <>
                                                <span className="flex items-center border-b-2 focus:border-b-2">
                                                    <SearchIcon className="text-[gray] mr-1" />
                                                    <TextField
                                                        className="w-full h-[32px]"
                                                        sx={{ borderBottom: 'none !important' }}
                                                        onChange={(e) => setDefaultFilterValue(e.target.value, thField?.accessor, index)}
                                                        variant="standard"
                                                        placeholder={thField?.header}
                                                        value={filterValue[filterValue.findIndex(item => item.id === thField?.accessor)]?.value || ''}
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <CloseIcon
                                                                        variant="outlined"
                                                                        sx={{ cursor: 'pointer', display: `${showCrossIcon.includes(index) ? 'block' : 'none'}` }}
                                                                        onClick={() => {
                                                                            const filteredValue = filterValue.filter(item => item.id !== thField?.accessor);
                                                                            setFilterValue(filteredValue);

                                                                            const updatedShowCrossIcon = showCrossIcon.filter(item => item !== index);
                                                                            setShowCrossIcon(updatedShowCrossIcon);
                                                                        }}
                                                                    />
                                                                </InputAdornment>
                                                            ),
                                                            disableUnderline: true,
                                                        }}
                                                    />
                                                </span>
                                            </>
                                        )}

                                    {thField?.filterInput === "select" &&
                                        thField?.columnShow &&
                                        thField?.filter && (
                                            <span className="flex items-center border-b-2 focus:border-b-2">
                                                <Select
                                                    sx={{
                                                        width: '100%',
                                                        border: 'none',
                                                        fontSize: '16px',
                                                        textTransform: 'capitalize'
                                                    }}
                                                    value={filterValue[filterValue.findIndex(item => item.id === thField?.accessor)]?.value || ''}
                                                    variant="standard"
                                                    onChange={(e) => setDefaultFilterValue(e.target.value.toString(), thField?.accessor, index)}
                                                    displayEmpty
                                                    disableUnderline
                                                >
                                                    {thField?.selectValue.map((opt, i) => (
                                                        <MenuItem value={opt.value}> {opt.text} </MenuItem>
                                                    ))}
                                                </Select>
                                            </span>
                                        )}
                                </td>
                            ))}
                            <td colSpan={2} className={"border border-solid border-l-0 border-r-0"}> </td>
                        </tr> */}
                        
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
