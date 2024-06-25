import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { ProductReviewsContext } from '../../../../context/ProductReviewContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const ProductReview = () => {
    const { productReviews, setProductReviews, getAllProductReviews } = useContext(ProductReviewsContext);

    const columns = [
        {
            Header: 'User id',
            accessor: 'user_id',
        },
        {
            Header: 'Product id',
            accessor: 'product_id',
        },
        {
            Header: 'Rating',
            accessor: 'rating',
        },
        {
            Header: 'Comment',
            accessor: 'comment',
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

    useEffect(()=>{
        getAllProductReviews();
    }, [setProductReviews]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Product Reviews" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={productReviews} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default ProductReview