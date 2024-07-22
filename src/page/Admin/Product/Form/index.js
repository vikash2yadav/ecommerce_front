import { Modal } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import InputC from '../../../../components/InputC'
import SelectC from '../../../../components/SelectC'
import ButtonC from '../../../../components/ButtonC'
import { addProductInitialValue, addProductSchema } from '../Schema'
import { CommonsContext } from '../../../../context/CommonContext'
import { addProductApi, updateProductApi } from '../../../../apis/product'
import { ProductsContext } from '../../../../context/ProductContext'
import { CategoryContext } from "../../../../context/CategoryContext"
import { PartnersContext } from "../../../../context/PartnerContext"

const Form = (props) => {
  const { categories } = useContext(CategoryContext);
  const { getAllProducts, editData, productsDefaultFilter } = useContext(ProductsContext);
  const { vendors } = useContext(PartnersContext);
  const { setFormIsOpen,formIsOpen,formIsEdit,setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

  const handleClose = () => {
    setFormIsOpen(false);
    setFormIsEdit(false);
    formik.resetForm();
}

const handleSubmit = async (values, { resetForm }) => {
    if (formIsOpen) {
        let data = await addProductApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllProducts(productsDefaultFilter);
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
        let data = await updateProductApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllProducts(productsDefaultFilter);
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
    initialValues: addProductInitialValue,
    validationSchema: formIsOpen ? addProductSchema : addProductSchema,
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
       <Modal open={props?.open} onCancel={handleClose} footer={null}  className=' mt-0 overflow-y-auto h-4/5' >
               
                <p className='text-xl font-semibold mt-3 mb-3'>{formIsOpen ? 'Add Product' : 'Update Product'}</p>
                <form action="" onSubmit={formik.handleSubmit} className='h-full'>
   
                <div className='mb-3'>
                    <p className='text-sm'>Vendor</p>
                        <SelectC options={vendors} className='w-full' name="vendor_id" value={formik.values.vendor_id} onChange={handleChange('vendor_id')} />
                        {formik.errors.vendor_id && formik.touched.vendor_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.vendor_id}</div>
                        ) : null}
                    </div>

                <div className='mb-3'>
                    <p className='text-sm'>Title</p>
                        <InputC className='w-full' name="title" value={formik.values.title} onChange={formik.handleChange} />
                        {formik.errors.title && formik.touched.title ? (
                            <div className='text-red-600 text-xs'>{formik.errors.title}</div>
                        ) : null}
                    </div>   

                    <div className='mb-3'>
                    <p className='text-sm'>profile image</p>
                        <InputC className='w-full' name="profile_image" value={formik.values.profile_image} onChange={formik.handleChange} />
                        {formik.errors.profile_image && formik.touched.profile_image ? (
                            <div className='text-red-600 text-xs'>{formik.errors.profile_image}</div>
                        ) : null}
                    </div>  

                     <div className='mb-3'>
                     <p className='text-sm'>Product Name</p>
                        <InputC  name="name" value={formik.values.name} onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Product Description</p>
                        <InputC  name="description" value={formik.values.description} onChange={formik.handleChange} />
                        {formik.errors.description && formik.touched.description ? (
                            <div className='text-red-600 text-xs'>{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Category</p>
                        <SelectC options={categories} className='w-full' name="category_id" value={formik.values.category_id} onChange={handleChange('category_id')} />
                        {formik.errors.category_id && formik.touched.category_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.category_id}</div>
                        ) : null}
                    </div>             

                    <ButtonC type="submit" variant="outlined" label={formIsOpen ? 'Add' : 'Update'} color="primary" />
                </form>
            </Modal>
    </>
  )
}

export default Form

