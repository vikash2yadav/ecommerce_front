import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import Table from '../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../components/PaginationC';
import { ProductsContext } from '../../../context/ProductContext'
import { CommonsContext } from '../../../context/CommonContext'
import { CategoryContext } from "../../../context/CategoryContext"
import UperTitleBox from '../../../components/Admin/UperTitleBox';
import Form from './Form'
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { PartnersContext } from '../../../context/PartnerContext';
import { getProductById, deleteProductApi, productStatusChangeApi } from '../../../apis/product';
import ButtonC from '../../../components/ButtonC';
import { GrPowerReset } from "react-icons/gr";
import { TbInfoTriangleFilled } from "react-icons/tb";

const Products = () => {
    const { getAllCategories } = useContext(CategoryContext);
    const { getAllVendors } = useContext(PartnersContext);
    const { products,totalProducts, getAllProducts, setEditData, productsDefaultFilter, setProductsDefaultFilter } = useContext(ProductsContext);
    const { formIsOpen,setFormIsEdit,formIsEdit, setFormIsOpen, handleDelete } = useContext(CommonsContext);

    const handleEdit = async (id) => {
        let data = await getProductById(id);
        if (data?.status === 200) {
            setEditData(data?.data?.data);
        }
        setFormIsEdit(true);
        setFormIsOpen(false);
        getAllCategories();
        getAllVendors();
    }

    const handleDeleteProduct = async (id) => {
        return await deleteProductApi(id);
    }

    const handleStatusChange = async (body) => {
        await productStatusChangeApi(body);
        getAllProducts(productsDefaultFilter);
    }

    const columns = [
        {
            Header: 'Vendor',
            access: 'partner_id',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.partner?.full_name ? row?.original?.partner?.full_name : '-'
                )
            }
        },
        {
            Header: 'Name',
            access: 'name',
            isSearch: true,
            isShort: true,
            isColumn: true ,
            Cell: ({ row }) => {
                return (
                    row?.original?.name ? row?.original?.name : '-'
                )
            }
        },
        {
            Header: 'Slug',
            access: 'slug',
            isSearch: true,
            isShort: true,
            isColumn: true ,
            Cell: ({ row }) => {
                return (
                    row?.original?.slug ? row?.original?.slug : '-'
                )
            }
        },
        {
            Header: 'Title',
            access: 'title',
            isSearch: true,
            isShort: true,
            isColumn: true ,
            Cell: ({ row }) => {
                return (
                    row?.original?.title ? row?.original?.title : '-'
                )
            }
        },
        {
            Header: 'Description',
            access: 'description',
            isSearch: true,
            isShort: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.description ? row?.original?.description : '-'
                )
            }
        },
        {
            Header: 'Category',
            access: 'category_id',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.category?.name ? row?.original?.category?.name : '-'
                )
            }
        },
        {
            Header: 'Variants',
            access: 'variants',
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    <div className='flex justify-center items-center'>
                        <span className='text-3xl hover:cursor-pointer text-gray-400'><TbInfoTriangleFilled/></span>
                    </div>
                )
            }
        },
        {
            Header: 'Last updated by',
            access: 'last_updated_by',
            isSearch: true,
            isColumn: true,
            Cell: ({ row }) => {
                return (
                    row?.original?.admin?.full_name ? row?.original?.admin?.full_name : '-'
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
                        onClick={() => handleDelete(row?.original?.id, undefined, handleDeleteProduct, getAllProducts, productsDefaultFilter)}
                        className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                    />
                </div>
            )
        },
    ];

    const handleOpen = () => {
        setFormIsOpen(true);
        getAllCategories();
        getAllVendors();
    }

    useEffect(() => {
        getAllProducts(productsDefaultFilter);
    }, [productsDefaultFilter, setProductsDefaultFilter]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="Products" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                <div className='flex justify-end items-center mb-2'>
                        <div className='text-xl mx-3 hover:cursor-pointer hover:text-gray-500' title='reset filters'><GrPowerReset onClick={()=>getAllProducts(setProductsDefaultFilter({
                            currentPage: 1,itemsPerPage: 5,filters: [],sortBy: []
                        }))}/></div>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table 
                        columns={columns} 
                        data={products} 
                        fetchDataApi={getAllProducts} 
                        defaultFilter={productsDefaultFilter}
                        setDefaultFilter={setProductsDefaultFilter}
                        />
                    </div>

                    <PaginationC
                        defaultFilter={productsDefaultFilter}
                        setDefaultFilter={setProductsDefaultFilter}
                        fetchDataApi={getAllProducts}
                        totalItems={totalProducts}
                    />

                </div>
            </div>

            <Form open={(formIsOpen && formIsOpen) || (formIsEdit && formIsEdit)} />
        </>
    )
}

export default Products