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
import { getProductFaqById, deleteProductFaqApi, productFaqStatusChangeApi } from '../../../../apis/faq';
import Form from './Form'
import ButtonC from '../../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";
import { ProductsContext } from '../../../../context/ProductContext';

const Faq = () => {
    const { faqs, getAllFaqs, defaultFilter,setDefaultFilter,setEditData, totalfaqs } = useContext(ProductFaqsContext);
    const { formIsOpen,formIsEdit, setFormIsOpen, handleDelete, setFormIsEdit } = useContext(CommonsContext);
    const {getAllProducts} = useContext(ProductsContext)

    const handleEdit = async (id) => {
        let data = await getProductFaqById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
    }

    const handleDeleteProductFaq = async (id) => {
        return await deleteProductFaqApi(id);
    }

    const handleStatusChange = async (body) => {
        let data = await productFaqStatusChangeApi(body);
        if(data?.status === 200){
            getAllFaqs(defaultFilter);
        }
    }

    const columns = [
        {
            Header: 'Product',
            access: 'product.name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.product?.name ? row?.original?.product?.name : '-'
                )
            }
        },
        {
            Header: 'Question',
            access: 'question',
            isSearch: true,
            isShort: true,
            isColumn: true ,
            Cell: ({ row }) => {
                return (
                    row?.original?.question ? row?.original?.question : '-'
                )
            }
        },
        {
            Header: 'Answer',
            access: 'answer',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.answer ? row?.original?.answer : '-'
                )
            }
        },
        {
            Header: 'Created by',
            access: 'productFaqCreatedBy.full_name',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.productFaqCreatedBy?.full_name ? row?.original?.productFaqCreatedBy?.full_name : '-'
                )
            }
        },
        {
            Header: 'Updated by',
            access: 'productFaqUpdatedBy.full_name',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.productFaqUpdatedBy?.full_name ? row?.original?.productFaqUpdatedBy?.full_name : '-'
                )
            }
        },
        {
            Header: 'Status',
            access: 'status',
            isStatus: true,
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <ButtonC
                        onClick={() => handleStatusChange({ id: row?.original?.id, status: !(row?.original?.status) })}
                        style={{ width: "90px" }}
                        label={row?.original?.status === 1 ? 'Active' : 'InActive'}
                        variant='contained'
                        color={row?.original?.status === 1 ? 'success' : 'error'} />
                )
            }
        },
        {
            Header: 'Action',
            access: 'action',
            isShort: false,
            isColumn: true,
            Cell: ({ row }) => (
                <div className='flex justify-evenly items-center'>
                    <FiEdit
                        onClick={() => handleEdit(row?.original?.id)}
                        className="text-blue-600 text-xl hover:text-blue-900 hover:cursor-pointer"
                    />
                    <MdDeleteOutline
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteProductFaq, getAllFaqs, defaultFilter)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                    />
                </div>
            )
        },
    ];

  const handleOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
        getAllProducts()
    }

    useEffect(()=>{
        getAllFaqs(defaultFilter);
    }, [defaultFilter, setDefaultFilter]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="Product Faqs" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={()=>getAllFaqs(setDefaultFilter({
                            currentPage: 1,itemsPerPage: 5,filters: [],sortBy: []
                        }))}/></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table 
                        columns={columns} 
                        data={faqs} 
                        fetchDataApi={getAllFaqs} 
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllFaqs}
                        totalItems={totalfaqs}
                    />
                   
                </div>
            </div>
            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Faq