import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar'
import Table from '../../../components/Table'
import { Input } from 'antd';
import { Button } from '@mui/material';

const Categories = () => {

    return (
        <>
            <AdminSidebar />
            <div className="w-full p-4 sm:ml-64 mb-6">
                <div className="p-4 border border-gray-200  border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <h1 className='text-3xl mb-6'>Change Password</h1>
                    </div>

                    <form action="" className='w-80'>
                        <Input className='mb-3' type='password' placeholder='Previous Password' />
                        <Input className='mb-3' type='password' placeholder='New Password' />
                        <Input className='mb-5' placeholder='Confirm Password' />
                        <Button variant='contained' color='secondary' className=''>Change password</Button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Categories