import React, { useContext, useEffect, useMemo } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { OrdersContext } from '../../../../context/OrderContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const OrderItems = () => {
    const { orderItems, setOrderItems, getAllOrderItems} = useContext(OrdersContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Order id',
            accessor: 'order_id',
        },
        {
            Header: 'Product id',
            accessor: 'product_id',
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
        },
        {
            Header: 'Unit price',
            accessor: 'unit_price',
        },
        {
            Header: 'Unit discount',
            accessor: 'unit_discount',
        },
        {
            Header: 'Total discount',
            accessor: 'total_discount',
        },
        {
            Header: 'Totoal amount',
            accessor: 'totoal_amount',
        },
        {
            Header: 'Action',
            accessor: 'action',
            component: (
                <>
                    <CiEdit />
                    <MdDelete />
                </>
            )
        },
    ];

    useEffect(()=> {
        getAllOrderItems();
    }, [setOrderItems]);

    return (
        <>
            <AdminSidebar />
              
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Order Items" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>

                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={orderItems} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default OrderItems