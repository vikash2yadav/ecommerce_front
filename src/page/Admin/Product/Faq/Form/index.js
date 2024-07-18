import { Modal } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import SelectC from '../../../../../components/SelectC'
import InputC from '../../../../../components/InputC'
import ButtonC from '../../../../../components/ButtonC'
import { addProductFaqInitialValue, addProductFaqSchema } from '../Schema'
import { CommonsContext } from '../../../../../context/CommonContext'
import { ProductsContext } from '../../../../../context/ProductContext'
import { ProductFaqsContext } from "../../../../../context/ProductFaqContext"
import { updateProductFaqApi, addProductFaqApi } from '../../../../../apis/faq';

const Form = (props) => {
    const { products } = useContext(ProductsContext);
    const { setFormIsOpen, formIsEdit, formIsOpen, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    const { defaultFilter, editData, getAllFaqs  } = useContext(ProductFaqsContext);

    const handleClose = () => {
        setFormIsOpen(false);
        setFormIsEdit(false);
        formik.resetForm();
    }

    const handleSubmit = async (values, { resetForm }) => {
        if (formIsOpen) {
            let data = await addProductFaqApi(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllFaqs(defaultFilter);
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
            let data = await updateProductFaqApi(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllFaqs(defaultFilter);
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
        initialValues: addProductFaqInitialValue,
        validationSchema: formIsOpen ? addProductFaqSchema : addProductFaqSchema,
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
                <p className='text-xl font-semibold mt-3 mb-3'>{formIsOpen ? 'Add Product Faq' : 'Update Product Faq'} </p>

                <form action="" onSubmit={formik.handleSubmit}>

                    <div className='mb-3'>
                        <p className='text-sm'>Product</p>
                        <SelectC options={products} className='w-full' name="product_id" value={formik.values.product_id} onChange={handleChange('product_id')} />
                        {formik.errors.product_id && formik.touched.product_id ? (
                            <div className='text-red-600 text-xs'>{formik.errors.product_id}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <p className='text-sm'>Question</p>
                        <InputC name="question" value={formik.values.question} onChange={formik.handleChange} />
                        {formik.errors.question && formik.touched.question ? (
                            <div className='text-red-600 text-xs'>{formik.errors.question}</div>
                        ) : null}
                    </div>

                    <div className='mb-3'>
                        <p className='text-sm'>Answer</p>
                        <InputC name="answer" value={formik.values.answer} onChange={formik.handleChange} />
                        {formik.errors.answer && formik.touched.answer ? (
                            <div className='text-red-600 text-xs'>{formik.errors.answer}</div>
                        ) : null}
                    </div>

                    <ButtonC type="submit" variant="outlined" label={formIsOpen ? 'Add' : 'Update'} color="primary" />
                </form>
            </Modal>
        </>
    )
}

export default Form

