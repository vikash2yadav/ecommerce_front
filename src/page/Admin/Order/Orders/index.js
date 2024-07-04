import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { OrdersContext } from '../../../../context/OrderContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Orders = () => {
    const { orders, setOrders, getAllOrders } = useContext(OrdersContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'User id',
            accessor: 'user_id',
        },
        {
            Header: 'Orderd date',
            accessor: 'orderd_date',
        },
        {
            Header: 'Shipped date',
            accessor: 'shipped_date',
        },
        {
            Header: 'Shipped address id',
            accessor: 'shipped_addresses_id',
        },
        {
            Header: 'Total amoumt',
            accessor: 'total_amoumt',
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

    useEffect(()=> {
        getAllOrders();
    }, [setOrders]);

    return (
        <>
            <AdminSidebar />
              
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Orders" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>

                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={orders} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default Orders