import { Modal } from 'antd'
import React, { useContext } from 'react'
import { useFormik } from 'formik'
import InputC from '../../../../../components/InputC'
import SelectC from '../../../../../components/SelectC'
import TextAreaC from '../../../../../components/TextAreaC'
import ButtonC from '../../../../../components/ButtonC'
import { addProductInitialValue, addProductSchema } from '../Schema'
import { CommonsContext } from '../../../../../context/CommonContext'
import { addProductApi } from '../../../../../apis/product'
import { ProductsContext } from '../../../../../context/ProductContext'
import { CategoryContext } from "../../../../../context/CategoryContext"

const Form = (props) => {
  const { categories } = useContext(CategoryContext);
  const { getAllProducts } = useContext(ProductsContext);
  const { setFormIsOpen, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

  const formik = useFormik({
    initialValues: addProductInitialValue,
    validationSchema: addProductSchema,
    onSubmit: async (values) => {
        let data = await addProductApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllProducts();
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

  const handleChange = (name) => (value) => {
    formik.setFieldValue(name, value)
  }

  return (
    <>
       <Modal className='overflow-y-auto' open={props?.formIsOpen} onCancel={() => props?.setFormIsOpen(false)} footer={null}>
                <p className='text-xl font-semibold mt-3 mb-3'> Add Product </p>

                <form action="" onSubmit={formik.handleSubmit}>
   
                     <div className='mb-3'>
                     <p className='text-sm'>Product Name</p>
                        <InputC  name="name" value={formik.values.name} onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name ? (
                            <div className='text-red-600 text-xs'>{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Product Description</p>
                        <TextAreaC  name="description" value={formik.values.description} onChange={formik.handleChange} />
                        {formik.errors.description && formik.touched.description ? (
                            <div className='text-red-600 text-xs'>{formik.errors.description}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                    <p className='text-sm'>Category</p>
                        <SelectC options={categories} className='w-full' name="category_id" value={formik.values.category_id} onChange={handleChange} />
                        {formik.errors.category_id && formik.touched.category_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.category_id}</div>
                        ) : null}
                    </div>          

                    <ButtonC type="submit" variant="outlined" label="Add" color="primary" />
                </form>
            </Modal>
    </>
  )
}

export default Form

