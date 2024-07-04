import React, { useContext, useEffect } from 'react'
import VendorSidebar from '../../../../components/VendorSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductsContext } from '../../../../context/ProductContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const VendorProducts = () => {
    const { vendorProducts } = useContext(ProductsContext);

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
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Category id',
            accessor: 'category_id',
        },
        {
            Header: 'Total items',
            accessor: 'total_items',
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
            <VendorSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="Your Products" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={vendorProducts} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default VendorProducts