import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { CategoryContext } from '../../../../context/CategoryContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const Categories = () => {
    const { categories } = useContext(CategoryContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Slug',
            accessor: 'slug',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Created by',
            accessor: 'created_by',
        },
        {
            Header: 'Updated by',
            accessor: 'updated_by',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'action',
            component: (
                <>

                </>
            )
        },
    ];

    return (
        <>
            <AdminSidebar />

            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Categories" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={categories} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default Categories