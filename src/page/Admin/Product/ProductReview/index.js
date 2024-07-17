import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductReviewsContext } from '../../../../context/ProductReviewContext'
import { CommonsContext } from '../../../../context/CommonContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Form from './Form'
import { getProductReviewById, deleteProductReviewApi, productReviewStatusChangeApi } from '../../../../apis/product_review';
import ButtonC from '../../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";
import { CustomersContext } from '../../../../context/CustomerContext';
import { ProductsContext } from '../../../../context/ProductContext';
import { ProductVariantsContext } from '../../../../context/ProductVariantContext';
import ReactStars from 'react-stars';
import { getProductVariantListById } from '../../../../apis/product_variant';

const ProductReview = () => {
    const { formIsOpen, formIsEdit, setFormIsOpen, setFormIsEdit, handleDelete } = useContext(CommonsContext);
    const { variantListByProduct, setVariantListByProduct } = useContext(ProductVariantsContext);
    const { productReviews,editData, setEditData, getAllProductReviews, defaultFilter, totalProductReviews, setDefaultFilter } = useContext(ProductReviewsContext);
    const { getAllCustomers } = useContext(CustomersContext);
    const { getAllProducts } = useContext(ProductsContext);

     
    
    const handleEdit = async (id) => {
        let data = await getProductReviewById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        await getProductVariantListById(2);
        setVariantListByProduct(data?.data?.data?.rows);
        setFormIsEdit(true);
        setFormIsOpen(false);
        getAllCustomers();
        getAllProducts();
    }

    const handleDeleteProductReview = async (id) => {
        return await deleteProductReviewApi(id);
    }

    const handleStatusChange = async (body) => {
        await productReviewStatusChangeApi(body);
        getAllProductReviews(defaultFilter);
    }

    const columns = [
        {
            Header: 'Customer',
            access: 'user.full_name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.user?.full_name ? row?.original?.user?.full_name : '-'
                )
            }
        },
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
            Header: 'Product variant',
            access: 'product_variant.name',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <>
                        <p> <span className='mx-1 border py-0.5 px-1 bg-gray-400 text-white rounded-lg border-1'>{row?.original?.product_variant?.attribute?.name ? row?.original?.product_variant?.attribute?.name : '-'}</span>:
                            <span className='mx-1'>{row?.original?.product_variant?.attribute_value ? row?.original?.product_variant?.attribute_value : '-'}</span></p>
                    </>
                )
            }
        },
        {
            Header: 'Rating',
            access: 'rating',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <div className='flex justify-center'>
                        <ReactStars value={row?.original?.rating ? row?.original?.rating : '-'} />
                    </div>
                )
            }
        },
        {
            Header: 'Comment',
            access: 'comment',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.comment ? row?.original?.comment : '-'
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
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteProductReview, getAllProductReviews, defaultFilter)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                    />
                </div>
            )
        },
    ];

    const handleOpen = () => {
        setFormIsOpen(true);
        setFormIsEdit(false);
        getAllCustomers();
        getAllProducts();
    }

    useEffect(() => {
        getAllProductReviews(defaultFilter);
    }, [defaultFilter, setDefaultFilter]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Product Reviews" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={() => getAllProductReviews(setDefaultFilter({
                            currentPage: 1, itemsPerPage: 5, filters: [], sortBy: []
                        }))} /></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table
                            columns={columns}
                            data={productReviews}
                            fetchDataApi={getAllProductReviews}
                            defaultFilter={defaultFilter}
                            setDefaultFilter={setDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={defaultFilter}
                        setDefaultFilter={setDefaultFilter}
                        fetchDataApi={getAllProductReviews}
                        totalItems={totalProductReviews}
                    />
                </div>
            </div>

            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default ProductReview