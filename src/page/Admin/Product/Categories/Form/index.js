import React, { useContext, useEffect } from 'react';
import InputC from '../../../../../components/InputC';
import SelectC from '../../../../../components/SelectC';
import ButtonC from '../../../../../components/ButtonC';
import { Modal } from 'antd';
import { CommonsContext } from '../../../../../context/CommonContext';
import { useFormik } from 'formik';
import { addCategoryInitialValue, addCategorySchema, updateCategorySchema } from '../Schema';
import { addCategory, updateCategory } from '../../../../../apis/category';
import { CategoryContext } from '../../../../../context/CategoryContext';
import classNames from 'classnames';

const Form = (props) => {
    const { categories, getAllCategories, editData, defaultFilter } = useContext(CategoryContext);
    const { formIsOpen, setFormIsOpen, formIsEdit, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

    const handleClose = () => {
        setFormIsOpen(false);
        setFormIsEdit(false);
        formik.resetForm();
    }

    const handleSubmit = async (values, { resetForm }) => {

        if (formIsOpen) {
            let data = await addCategory(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllCategories();
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
            let data = await updateCategory(values);
            if (data?.status === 200) {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                getAllCategories(defaultFilter);
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
        initialValues: addCategoryInitialValue,
        validationSchema: formIsOpen ? addCategorySchema : updateCategorySchema,
        onSubmit: handleSubmit
    });

    const handleChange = (name) => (value) => {
        formik.setFieldValue(name, value);
    }

    useEffect(() => {
        if (formIsEdit) {
            formik.setValues(editData);
        }
    }, [formIsEdit, editData]);

    return (
        <Modal open={props?.open} onCancel={handleClose} footer={null}>
            <p className='text-xl font-semibold mt-3 mb-3'>{formIsOpen ? 'Add Category' : 'Update Category'}</p>

            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <p className='text-sm'>Parent Category</p>
                    <SelectC
                        options={categories}
                        className="w-full"
                        placeholder="parent_id"
                        name="parent_id"
                        value={formik.values.parent_id}
                        onChange={handleChange('parent_id')}
                    />
                    {formik.errors.parent_id && formik.touched.parent_id && (
                        <div className='text-red-600 text-xs'>{formik.errors.parent_id}</div>
                    )}
                </div>

                <div className='mb-3'>
                    <p className='text-sm'>Category Name <span className='font-semibold text-red-600'>*</span></p>
                    <InputC
                        placeholder="book"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className={classNames({
                            'border-red-600': formik.errors.name && formik.touched.name
                        })}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className='text-red-600 text-xs'>{formik.errors.name}</div>
                    )}
                </div>

                <div className='mb-3'>
                    <p className='text-sm'>Description <span className='font-semibold text-red-600'>*</span></p>
                    <InputC
                        placeholder="cultural books are here"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        className={classNames({
                            'border-red-600': formik.errors.description && formik.touched.description
                        })}
                    />
                    {formik.errors.description && formik.touched.description && (
                        <div className='text-red-600 text-xs'>{formik.errors.description}</div>
                    )}
                </div>
                {formIsOpen && (
                    <p className="text-xs mb-3">
                        <span className='underline'>Note:</span> if you want to create sub category, select parent category.
                    </p>
                )}

                <ButtonC type="submit" variant="contained" label={formIsOpen ? 'Add' : 'Update'} color="info" />
            </form>
        </Modal>
    );
}

export default Form;