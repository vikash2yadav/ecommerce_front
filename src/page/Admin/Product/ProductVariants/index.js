import React, { useContext } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductVariantsContext } from '../../../../context/ProductVariantContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const Products = () => {
    const { productVariants } = useContext(ProductVariantsContext);
    console.log(productVariants)
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
            Header: 'Attribute id',
            accessor: 'attribute_id',
        },
        {
            Header: 'Attribute value id',
            accessor: 'attribute_value_id',
        },
        {
            Header: 'Price',
            accessor: 'price',
        },
        {
            Header: 'Discount',
            accessor: 'discount',
        },
        {
            Header: 'Stock',
            accessor: 'stock',
        },
        {
            Header: 'Weight',
            accessor: 'weight',
        },
        {
            Header: 'Dimensions',
            accessor: 'dimensions',
        },
        {
            Header: 'Material',
            accessor: 'material',
        },
        {
            Header: 'Image',
            accessor: 'image',
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

                <UperTitleBox title="All Product Variants" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={productVariants} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default Products