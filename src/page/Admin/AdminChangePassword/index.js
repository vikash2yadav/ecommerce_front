import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import Form from './Form'
import ProfileForm from './ProfileForm'

const AdminChangePassword = () => {

    return (
        <>
            <AdminSidebar />
            <div className="p-4 sm:ml-64 mb-6 grid grid-cols-3 gap-4">
               
            <div className="p-4 border border-gray-200  border-dashed rounded-lg dark:border-gray-700">
                    <div className="mb-4">
                        <h1 className='text-2xl mb-6'>Change Password</h1>
                    </div>

                    <Form />
                </div>


            <div className="p-4 col-span-2 border border-gray-200  border-dashed rounded-lg dark:border-gray-700">
                    <div className="mb-4">
                        <h1 className='text-2xl mb-6'>Update Profile</h1>
                    </div>

                    <ProfileForm />
                </div>

               
                
            </div>
        </>
    )
}

export default AdminChangePassword