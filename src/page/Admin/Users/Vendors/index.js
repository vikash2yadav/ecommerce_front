import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { PartnersContext } from "../../../../context/PartnerContext"
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import Form from './Form';
import { CommonsContext } from '../../../../context/CommonContext'

const Customers = () => {
    const { vendors, setVendors ,getAllVendors } = useContext(PartnersContext);
    const { formIsOpen, setFormIsOpen } = useContext(CommonsContext);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'First Name',
            accessor: 'first_name',
        },
        {
            Header: 'Last Name',
            accessor: 'last_name',
        },
        {
            Header: 'Full Name',
            accessor: 'full_name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Birth date',
            accessor: 'birth_date',
        },
        {
            Header: 'Gender',
            accessor: 'grnder',
        },
        {
            Header: 'Country code',
            accessor: 'country_code',
        },
        {
            Header: 'Contact No',
            accessor: 'contact_no',
        },
        {
            Header: 'Alternative country code',
            accessor: 'alternative_country_code',
        },
        {
            Header: 'Alternative contact code',
            accessor: 'alternative_contact_no',
        },
        {
            Header: 'Language',
            accessor: 'language',
        },
        {
            Header: 'Role',
            accessor: 'role_id',
        },
        {
            Header: 'Created by',
            accessor: 'created_by',
        },
        {
            Header: 'Updated by',
            accessor: 'updated_by',
        },
        {
            Header: 'Status changed by',
            accessor: 'status_changed_by',
        },
        {
            Header: 'Deleted by',
            accessor: 'deleted_by',
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

    const handleOpen = () => {
        setFormIsOpen(true)
    }

    useEffect(()=> {
        getAllVendors();
    }, [setVendors]);

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Vendors" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={handleOpen}>+ Add New</Button>
                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={vendors} />
                    </div>

                    <PaginationC />

                </div>
            </div>
            <Form formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />
        </>
    )
}

export default Customers