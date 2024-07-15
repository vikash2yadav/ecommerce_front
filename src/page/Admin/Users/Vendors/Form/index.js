import { Modal } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import InputC from '../../../../../components/InputC'
import SelectC from '../../../../../components/SelectC'
import ButtonC from '../../../../../components/ButtonC'
import { addVendorInitialValue, addVendorSchema, genders, updateVendorSchema } from '../Schema'
import { CommonsContext } from '../../../../../context/CommonContext'
import { addVendorApi, updateVendorApi } from '../../../../../apis/partner'
import { LanguageContext } from '../../../../../context/LangContext'
import { PartnersContext } from '../../../../../context/PartnerContext'

const Form = (props) => {
  const { getAllVendors, editData } = useContext(PartnersContext);
  const { languages ,getAllLanguages} = useContext(LanguageContext);
  const { formIsOpen, setFormIsOpen, defaultFilter, formIsEdit, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

  const handleClose = () => {
    setFormIsOpen(false);
    setFormIsEdit(false);
    formik.resetForm();
}

const handleSubmit = async (values, { resetForm }) => {
    if (formIsOpen) {
        let data = await addVendorApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllVendors(defaultFilter);
            handleClose()
            formik.resetForm();
        } else {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data.data.message
            });
        }
    } else {
        let data = await updateVendorApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllVendors(defaultFilter);
            handleClose()
            formik.resetForm();
        } else {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data.data.message
            });
        }
    }
}

const formik = useFormik({
    initialValues: addVendorInitialValue,
    validationSchema: formIsOpen ? addVendorSchema : updateVendorSchema,
    onSubmit: handleSubmit
});

const handleChange = (name) => (value) => {
    formik.setFieldValue(name, value)
}

useEffect(() => {
    if (formIsEdit) {
        formik.setValues(editData);
    }
}, [formIsEdit, editData]);

  return (
    <>
      <Modal open={props?.open} onCancel={handleClose} footer={null}>
                <p className='text-xl font-semibold mt-3 mb-3'>{formIsOpen ? 'Add Vendor' : 'Update Vendor'} </p>

                <form action="" onSubmit={formik.handleSubmit}>
   
                     <div className='mb-3'>
                     <p className='text-sm'>First Name</p>
                        <InputC  name="first_name" value={formik.values.first_name} onChange={formik.handleChange} />
                        {formik.errors.first_name && formik.touched.first_name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.first_name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Last Name</p>
                        <InputC  name="last_name" value={formik.values.last_name} onChange={formik.handleChange} />
                        {formik.errors.last_name && formik.touched.last_name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.last_name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Email</p>
                        <InputC name="email" value={formik.values.email} onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email ? (
                            <div className='text-red-600 text-xs'>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    {
                    formIsOpen && (
                        <div className='mb-3'>
                        <p className='text-sm'>Password</p>
                        <InputC name="password" value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password && formik.touched.password ? (
                            <div className='text-red-600 text-xs'>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    )
                  }

                    {/* <div className='mb-3'>
                        <p className='text-sm'>Profile Image</p>
                        <InputC className='relative overflow-hidden ' type="file" name="profile_image" value={formik.values.profile_image} onChange={formik.handleChange} />
                        {formik.errors.profile_image && formik.touched.profile_image ? (
                            <div className='text-red-600 text-xs'>{formik.errors.profile_image}</div>
                        ) : null}
                    </div> */}

                    <div className='mb-3'>
                    <p className='text-sm'>Birth Date</p>
                        <InputC name="birth_date" value={formik.values.birth_date} onChange={formik.handleChange} />
                        {formik.errors.birth_date && formik.touched.birth_date ? (
                            <div className='text-red-600 text-xs'>{formik.errors.birth_date}</div>
                        ) : null}
                    </div>
                    
                    <div className='mb-3'>
                    <p className='text-sm'>Contact </p>
                        <InputC name="contact_no" value={formik.values.contact_no} onChange={formik.handleChange} />
                        {formik.errors.contact_no && formik.touched.contact_no ? (
                            <div className='text-red-600 text-xs'>{formik.errors.contact_no}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Alternate Contact</p>
                        <InputC name="alternative_contact_no" value={formik.values.alternative_contact_no} onChange={formik.handleChange} />
                        {formik.errors.alternative_contact_no && formik.touched.alternative_contact_no ? (
                            <div className='text-red-600 text-xs'>{formik.errors.alternative_contact_no}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Gender</p>
                        <SelectC options={genders} className="w-full" placeholder="Gender" name="gender" value={formik.values.gender} onChange={handleChange('gender')}/>
                        {formik.errors.gender && formik.touched.gender ? (
                            <div className='text-red-600 text-xs'>{formik.errors.gender}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Language</p>
                        <SelectC options={languages} className="w-full" placeholder="Language" name="language_id" value={formik.values.language_id} onChange={handleChange('language_id')} />
                        {formik.errors.language_id && formik.touched.language_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.language_id}</div>
                        ) : null}
                    </div>  

                    <ButtonC type="submit" variant="outlined"  label={formIsOpen ? 'Add' : 'Update'} color="primary" />
                </form>
            </Modal>
    </>
  )
}

export default Form

