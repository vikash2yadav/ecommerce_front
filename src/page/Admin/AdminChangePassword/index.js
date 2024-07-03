import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import Form from './Form'

const AdminChangePassword = () => {

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6">
                <div className="p-4 border border-gray-200  border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <h1 className='text-3xl mb-6'>Change Password</h1>
                    </div>

                    <Form />
                </div>
            </div>
        </>
    )
}

export default AdminChangePassword