import React, { useContext } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC'
import { ProductFaqsContext } from '../../../../context/ProductFaqContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const Categories = () => {
    const { faqs } = useContext(ProductFaqsContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Product id',
            accessor: 'product_id',
        },
        {
            Header: 'Question',
            accessor: 'question',
        },
        {
            Header: 'Answer',
            accessor: 'answer',
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

                <UperTitleBox title="All Faqs" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={faqs} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default Categories