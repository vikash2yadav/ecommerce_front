import React from 'react'
import { useTable } from 'react-table'

const Table = ({ columns, data }) => {
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
            <table {...getTableProps()} class="w-full text-sm text-left rtl:text-right ">
                <thead class="text-xs  uppercase bg-gray-400 text-white">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className="px-6 py-3" {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    { rows && rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} class="bg-white border-b dark:border-gray-700">
                                {row.cells.map(cell => {
                                    return <td class="px-6 py-6 font-medium whitespace-nowrap" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table