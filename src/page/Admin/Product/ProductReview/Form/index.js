import { Modal } from 'antd'
import React, { useContext } from 'react'
import { useFormik } from 'formik'
import SelectC from '../../../../../components/SelectC'
import TextAreaC from '../../../../../components/TextAreaC'
import ButtonC from '../../../../../components/ButtonC'
import { addProductReviewInitialValue, addProductReviewSchema } from '../Schema'
import { CommonsContext } from '../../../../../context/CommonContext'
import { addProductReviewApi } from '../../../../../apis/product_review'
import { ProductsContext } from '../../../../../context/ProductContext'
import { ProductVariantsContext } from "../../../../../context/ProductVariantContext"
import { ProductReviewsContext } from "../../../../../context/ProductReviewContext"
import { CustomersContext } from '../../../../../context/CustomerContext'
import ReactStars from 'react-stars'

const Form = (props) => {
  const { productVariants } = useContext(ProductVariantsContext);
  const { customers } = useContext(CustomersContext);
  const { products } = useContext(ProductsContext);
  const { getAllProductReviews } = useContext(ProductReviewsContext);
  const { setFormIsOpen, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

  const formik = useFormik({
    initialValues: addProductReviewInitialValue,
    validationSchema: addProductReviewSchema,
    onSubmit: async (values) => {
        let data = await addProductReviewApi(values);
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            getAllProductReviews();
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
                <p className='text-xl font-semibold mt-3 mb-3'> Add Product Review </p>

                <form action="" onSubmit={formik.handleSubmit}>
   
                     <div className='mb-3'>
                     <p className='text-sm'>Customer</p>
                        <SelectC options={customers} className='w-full' name="user_id" value={formik.values.user_id} onChange={handleChange('user_id')} />
                        {formik.errors.user_id && formik.touched.user_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.user_id}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                     <p className='text-sm'>Product</p>
                        <SelectC options={products} className='w-full' name="product_id" value={formik.values.product_id} onChange={handleChange('product_id')} />
                        {formik.errors.product_id && formik.touched.product_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.product_id}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                     <p className='text-sm'>Product Variant</p>
                        <SelectC options={productVariants} className='w-full' name="product_variant_id" value={formik.values.product_variant_id} onChange={handleChange('product_variant_id')} />
                        {formik.errors.product_variant_id && formik.touched.product_variant_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.product_variant_id}</div>
                        ) : null}
                    </div>    

                    <div className='mb-3'>
                     <p className='text-sm'>Rating</p>
                        <ReactStars  name="rating" value={formik.values.rating} onChange={handleChange('rating')} />
                        {formik.errors.rating && formik.touched.rating ? (
                            <div className='text-red-600 text-xs'>{formik.errors.rating}</div>
                        ) : null}
                    </div>    

                    <div className='mb-3'>
                     <p className='text-sm'>Comment</p>
                        <TextAreaC name="comment" value={formik.values.comment} onChange={formik.handleChange} />
                        {formik.errors.comment && formik.touched.comment ? (
                            <div className='text-red-600 text-xs'>{formik.errors.comment}</div>
                        ) : null}
                    </div>   

                    <ButtonC type="submit" variant="outlined" label="Add" color="primary" />
                </form>
            </Modal>
    </>
  )
}

export default Form

