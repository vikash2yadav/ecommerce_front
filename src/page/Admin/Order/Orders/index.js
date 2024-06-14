import React, { useContext, useMemo } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { OrdersContext } from '../../../../context/OrderContext';
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const Orders = () => {
    const { orders } = useContext(OrdersContext);

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
            component: (
                <>
                    <CiEdit />
                    <MdDelete />
                </>
            )
        },
    ];

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