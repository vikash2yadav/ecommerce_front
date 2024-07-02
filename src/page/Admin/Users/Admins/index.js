import React, { useContext, useEffect } from 'react'
import AdminSidebar from '../../../../components/Admin/AdminSidebar'
import Table from '../../../../components/Table'
import { Button, Modal } from 'antd';
import PaginationC from '../../../../components/PaginationC';
import { AdminsContext } from '../../../../context/AdminContext'
import { CommonsContext } from '../../../../context/CommonContext'
import { LanguageContext } from '../../../../context/LangContext'
import { RolesContext } from '../../../../context/RoleContext'
import UperTitleBox from '../../../../components/Admin/UperTitleBox';
import InputC from '../../../../components/InputC';
import SelectC from '../../../../components/SelectC';
import { useFormik } from 'formik';
import ButtonC from '../../../../components/ButtonC';
import { addAdminInitialValue, addAdminSchema, genders } from './Schema';
import { addAdminApi } from '../../../../apis/admin';

const Admins = () => {
    const {roles, getAllRoles} = useContext(RolesContext);
    const { admins, setAdmins, getAllAdmins } = useContext(AdminsContext);
    const { formIsOpen, setFormIsOpen, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    const {languages, getAllLanguages} =  useContext(LanguageContext);
    
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
    ]

    const formik = useFormik({
        initialValues: addAdminInitialValue,
        validationSchema: addAdminSchema,
        onSubmit: async (values) => {
            let data = await addAdminApi(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllAdmins();
                setFormIsOpen(false)
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data.data.message
                });
            }
        }
    })

    useEffect(()=>{
        getAllLanguages();
        getAllAdmins();
        getAllRoles();
    })
    return (
        <>
            <AdminSidebar />
            
            <div className="p-4 sm:ml-64 mb-6">

                <UperTitleBox title="All Admins" />

                <div className="p-4 border-2  border-gray-200  border rounded-lg mb-8">

                    <div className='flex justify-end mb-2'>
                        <Button onClick={()=> setFormIsOpen(true)}>+ Add New</Button>

                    </div>

                    <div className='overflow-x-auto'>
                        <Table columns={columns} data={admins} />
                    </div>

                    <PaginationC />

                </div>
            </div>

            <Modal open={formIsOpen} onCancel={() => setFormIsOpen(false)} footer={null}>
                <p className='text-xl font-semibold mt-3 mb-3'> Add Admin </p>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <InputC placeholder="First Name" name="first_name" value={formik.values.first_name} onChange={formik.handleChange} />
                        {formik.errors.first_name && formik.touched.first_name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <InputC placeholder="Last Name" name="last_name" value={formik.values.last_name} onChange={formik.handleChange} />
                        {formik.errors.last_name && formik.touched.last_name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <InputC placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email ? (
                            <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <InputC placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password && formik.touched.password ? (
                            <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <InputC placeholder="Birth Date" name="birth_date" value={formik.values.birth_date} onChange={formik.handleChange} />
                        {formik.errors.birth_date && formik.touched.birth_date ? (
                            <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <SelectC defaultValue={1} options={genders} className="w-full" placeholder="Gender" name="gender" value={formik.values.gender} onChange={formik.handleChange} />
                        {formik.errors.gender && formik.touched.gender ? (
                            <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <SelectC 
                        options={roles}
                         className="w-full" placeholder="Role" name="role_id" value={formik.values.role_id} onChange={formik.handleChange} />
                        {formik.errors.role_id && formik.touched.role_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.role_id}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <SelectC options={languages} className="w-full" placeholder="Language" name="language_id" value={formik.values.language_id} onChange={formik.handleChange} />
                        {formik.errors.language_id && formik.touched.language_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                        ) : null}
                    </div>

                    <ButtonC type="submit" variant="outlined" label="Add" color="primary" />
                </form>
            </Modal>
        </>
    )
}

export default Admins