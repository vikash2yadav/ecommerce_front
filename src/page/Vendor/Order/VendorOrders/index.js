import React, { useContext, useEffect } from 'react'
import VendorSidebar from '../../../../components/VendorSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { OrdersContext } from '../../../../context/OrderContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';

const VendorOrders = () => {
    const { vendorOrders } = useContext(OrdersContext);

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
            Header: 'Shipped addresses id',
            accessor: 'shipped_addresses_id',
        },
        {
            Header: 'Total discount',
            accessor: 'total_discount',
        },
        {
            Header: 'Total items',
            accessor: 'total_items',
        },
        {
            Header: 'Total amoumt',
            accessor: 'total_amoumt',
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
            <VendorSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="Your Orders" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={vendorOrders} />
                    </div>

                    <PaginationC />

                </div>
            </div>
        </>
    )
}

export default VendorOrders