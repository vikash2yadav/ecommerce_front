import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC'
import { ProductFaqsContext } from '../../../../context/ProductFaqContext';
import { CommonsContext } from '../../../../context/CommonContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Form from './Form'

const Categories = () => {
    const { faqs, setFaqs, getAllFaqs } = useContext(ProductFaqsContext);
    const { formIsOpen, setFormIsOpen } = useContext(CommonsContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Product',
            accessor: 'product_id',
        },
        {
            Header: 'Product Variant',
            accessor: 'product_variant_id',
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
            Cell: ({ row }) => (
                <div className='flex justify-center items-center'>
                    <FiEdit
                        // onClick={() => handleEdit(row)}
                        className="text-blue-600 text-xl hover:text-blue-900"
                    />
                    <MdDeleteOutline
                        // onClick={() => handleDelete(row)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2"
                    />
                </div>
            )

        },
    ];

    const handleOpen = () => {
        setFormIsOpen(true);
    }

    useEffect(()=>{
        getAllFaqs();
    }, [setFaqs]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Faqs" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onChange={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={faqs} />
                    </div>

                    <PaginationC />

                </div>
            </div>
            <Form setFormIsOpen={setFormIsOpen} formIsOpen={formIsOpen} />
        </>
    )
}

export default Categories