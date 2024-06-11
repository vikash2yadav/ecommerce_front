import React, { useMemo } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Table from '../../components/Table'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const DashboardOrders = () => {
    const columns = [
        {
            Header: 'ID',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'First Name',
            accessor: 'firstName',
        },
        {
            Header: 'Last Name',
            accessor: 'lastName',
        },
        {
            Header: 'Age',
            accessor: 'age',
        },
        {
            Header: 'Country',
            accessor: 'country',
        },
        {
            Header: 'Action',
            accessor: 'action',
            component: (
                <>
                <CiEdit/>
                <MdDelete/>
                </>
            )
        },
    ];

    const data = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 28,
            country: 'USA',
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            age: 34,
            country: 'Canada',
        },
        {
            id: 3,
            firstName: 'Alice',
            lastName: 'Johnson',
            age: 23,
            country: 'UK',
        },
        {
            id: 4,
            firstName: 'Chris',
            lastName: 'Lee',
            age: 45,
            country: 'Australia',
        },
        {
            id: 5,
            firstName: 'Michael',
            lastName: 'Brown',
            age: 32,
            country: 'New Zealand',
        },
    ];


    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">
                <div className="p-4 border-2  border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <h1 className='text-3xl mb-6'>All Orders</h1>
                    </div>
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </>
    )
}

export default DashboardOrders