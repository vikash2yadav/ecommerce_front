import { Modal } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useFormik, Formik, Form, Field, FieldArray } from 'formik'
import InputC from '../../../../components/InputC'
import SelectC from '../../../../components/SelectC'
import ButtonC from '../../../../components/ButtonC'
import { addProductInitialValue, addProductSchema, tags } from '../Schema'
import { CommonsContext } from '../../../../context/CommonContext'
import { addProductApi, updateProductApi } from '../../../../apis/product'
import { ProductsContext } from '../../../../context/ProductContext'
import { CategoryContext } from "../../../../context/CategoryContext"
import { PartnersContext } from "../../../../context/PartnerContext"
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const FormC = (props) => {
    const { categories } = useContext(CategoryContext);
    const { getAllProducts, editData, productsDefaultFilter } = useContext(ProductsContext);
    const { vendors } = useContext(PartnersContext);
    const { setFormIsOpen, formIsOpen, formIsEdit, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);

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
            <Modal open={props?.open} width={600} onCancel={handleClose} footer={null} className='mt-0 overflow-y-auto h-4/5' >

                <p className='text-xl font-semibold mt-3 mb-5'>{formIsOpen ? 'Add Product' : 'Update Product'}</p>
                <form action="" onSubmit={formik.handleSubmit} className=''>

                    <div className='grid grid-cols-2 gap-8 mb-3'>
                        <div className='mb-3'>
                            <p className='text-sm'>Vendor </p>
                            <SelectC options={vendors} className='w-full' name="vendor_id" value={formik.values.vendor_id} onChange={handleChange('vendor_id')} />
                            {formik.errors.vendor_id && formik.touched.vendor_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.vendor_id}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <p className='text-sm'>Category </p>
                            <SelectC options={categories} className='w-full' name="category_id" value={formik.values.category_id} onChange={handleChange('category_id')} />
                            {formik.errors.category_id && formik.touched.category_id ? (
                                <div className='text-red-600 text-xs'>{formik.errors.category_id}</div>
                            ) : null}
                        </div>
                    </div>

                    {/* <div className='mb-3'>
                    <p className='text-sm'>profile image</p>
                        <InputC className='w-full' name="profile_image" value={formik.values.profile_image} onChange={formik.handleChange} />
                        {formik.errors.profile_image && formik.touched.profile_image ? (
                            <div className='text-red-600 text-xs'>{formik.errors.profile_image}</div>
                        ) : null}
                    </div>   */}

                    <div className='grid grid-cols-2 gap-8 mb-3'>
                        <div className='mb-3'>
                            <p className='text-sm'>Product Name </p>
                            <InputC name="variants.name" value={formik.values.variants.name} onChange={formik.handleChange} />
                            {formik?.errors?.variants?.name && formik?.touched?.variants?.name ? (
                                <div className='text-red-600 text-xs'>{formik?.errors?.variants?.name}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <p className='text-sm'>Sku </p>
                            <InputC className='w-full' name="sku" value={formik.values.sku} onChange={formik.handleChange} />
                            {formik.errors.sku && formik.touched.sku ? (
                                <div className='text-red-600 text-xs'>{formik.errors.sku}</div>
                            ) : null}
                        </div>


                    </div>

                    <div className='grid grid-cols-2 gap-8 mb-3'>
                        <div className='mb-3'>
                            <p className='text-sm'>Strike Price </p>
                            <InputC type="number" placeholder={0} className='w-full' name="strike_price" value={formik.values.strike_price} onChange={formik.handleChange} />
                            {formik.errors.strike_price && formik.touched.strike_price ? (
                                <div className='text-red-600 text-xs'>{formik.errors.strike_price}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <p className='text-sm'>Price </p>
                            <InputC type="number" placeholder={0} className='w-full' name="price" value={formik.values.price} onChange={formik.handleChange} />
                            {formik.errors.price && formik.touched.price ? (
                                <div className='text-red-600 text-xs'>{formik.errors.price}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-8 mb-3'>
                        <div className='mb-3'>
                            <p className='text-sm'>Tag </p>
                            <SelectC options={tags} className='w-full' name="tag" value={formik.values.tag} onChange={handleChange('tag')} />
                            {formik.errors.tag && formik.touched.tag ? (
                                <div className='text-red-600 text-xs'>{formik.errors.tag}</div>
                            ) : null}
                        </div>

                        <div className='mb-3'>
                            <p className='text-sm'>Stock </p>
                            <InputC type="number" placeholder={0} className='w-full' name="stock" value={formik.values.stock} onChange={formik.handleChange} />
                            {formik.errors.stock && formik.touched.stock ? (
                                <div className='text-red-600 text-xs'>{formik.errors.stock}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className='mb-12'>
                        <p className='text-sm'>Keywords <span className='text-xs text-blue-500 mx-1'>( keywords will be use for filter your product )</span> </p>
                        <InputC name="keywords" value={formik.values.keywords} onChange={formik.handleChange} />
                        {formik.errors.keywords && formik.touched.keywords ? (
                            <div className='text-red-600 text-xs'>{formik.errors.keywords}</div>
                        ) : null}
                    </div>

                   { console.log("index", formik.values.variants)}
                    <Formik
                        initialValues={{
                            variants: [{
                                attributes: [{}]
                            }]
                        }}
                        onSubmit={values =>''}
                        render={({ values }) => (
                            <FieldArray
                                className="bg-gray-100"
                                name="variants"
                                render={arrayHelpers => (
                                    <div>
                                        {values.variants && values.variants.length > 0 ? (
                                            values.variants.map((item, index) => (
                                                <div key={index}>   
                                                {/* {console.log("index", index)} */}
                                                    <p className='text-xl font-semibold'>{formIsOpen ? `Product Variant ${index + 1}` : `Product Variant ${index + 1}`}</p>
                                                    <div className='flex justify-end items-end mb-3'>
                                                        <FaDeleteLeft size="2.2rem" className='text-gray-700' onClick={() => arrayHelpers.remove(index)} />
                                                    </div>

                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Product Name </p>
                                                            <InputC name={`variants[${index}].name`} value={formik.values.variants[index].name} onChange={formik.handleChange} />
                                                            {/* {formik?.errors?.variants[index]?.name && formik?.touched?.variants[index]?.name ? (
                                                                <div className='text-red-600 text-xs'>{formik?.errors?.variants[index]?.name}</div>
                                                            ) : null} */}
                                                        </div>

                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Sku </p>
                                                            <InputC name={`variants[${index}].sku`} value={formik.values.variants[index].sku} onChange={formik.handleChange} />
                                                            {/* {formik.errors.variants[index]?.sku && formik.touched.variants[index]?.sku ? (
                                                                <div className='text-red-600 text-xs'>{formik.errors.variants[index]?.sku}</div>
                                                            ) : null} */}
                                                        </div>


                                                    </div>

                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Strike Price </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].strike_price`} value={formik.values.variants[index].strike_price} onChange={formik.handleChange} />
                                                            {/* {formik.errors.variants[index].strike_price && formik.touched.variants[index].strike_price ? (
                                                                <div className='text-red-600 text-xs'>{formik.errors.variants[index].strike_price}</div>
                                                            ) : null} */}
                                                        </div>

                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Price </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].price`} value={formik.values.variants[index].price} onChange={formik.handleChange} />
                                                            {/* {formik.errors.variants[index].price && formik.touched.variants[index].price ? (
                                                                <div className='text-red-600 text-xs'>{formik.errors.variants[index].price}</div>
                                                            ) : null} */}
                                                        </div>
                                                    </div>

                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Tag </p>
                                                            <SelectC options={tags} className='w-full' name={`variants[${index}].tag`} value={formik.values.variants[index].tag} onChange={handleChange('tag')} />
                                                            {/* {formik.errors.variants[index].tag && formik.touched.variants[index].tag ? (
                                                                <div className='text-red-600 text-xs'>{formik.errors.variants[index].tag}</div>
                                                            ) : null} */}
                                                        </div>

                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Stock </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].stock`} value={formik.values.variants[index].stock} onChange={formik.handleChange} />
                                                            {/* {formik.errors.variants[index].stock && formik.touched.variants[index].stock ? (
                                                                <div className='text-red-600 text-xs'>{formik.errors.variants[index].stock}</div>
                                                            ) : null} */}
                                                        </div>
                                                    </div>

                                                    <FieldArray
                                                        className="bg-gray-100"
                                                        name="variants"
                                                        render={arrayHelpers => (
                                                            <>
                                                                <p className='text-sm'>Attributes </p>
                                                                <div className='grid grid-cols-2 gap-8 mb-3 border border border-gray-200 py-4 px-6'>
                                                                    <div className='mb-3'>
                                                                        <p className='text-xs'>Name</p>
                                                                        <SelectC options={tags} className='w-full' name={`variants[${index}].attributes[${index}].attribute_id`} value={formik.values.variants[index].attributes[index].attribute_id} onChange={handleChange('attribute_id')} />
                                                                        {formik.errors.attribute_id && formik.touched.attribute_id ? (
                                                                            <div className='text-red-600 text-xs'>{formik.errors.attribute_id}</div>
                                                                        ) : null}
                                                                    </div>

                                                                    <div className='mb-3'>
                                                                        <p className='text-xs'>Value </p>
                                                                        <SelectC className='w-full' name="attribute_value" value={formik.values.attribute_value} onChange={handleChange('attribute_value')} />
                                                                        {formik.errors.attribute_value && formik.touched.attribute_value ? (
                                                                            <div className='text-red-600 text-xs'>{formik.errors.attribute_value}</div>
                                                                        ) : null}
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )} />


                                                    <div className='mb-8'>
                                                        <p className='text-sm'>Keywords <span className='text-xs text-blue-500 mx-1'>( keywords will be use for filter your product )</span> </p>
                                                        <InputC name={`variants[${index}].keywords`} value={formik.values.variants[index].keywords} onChange={formik.handleChange} />
                                                        {/* {formik.errors.variants[index].keywords && formik.touched.variants[index].keywords ? (
                                                            <div className='text-red-600 text-xs'>{formik.errors.variants[index].keywords}</div>
                                                        ) : null} */}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <></>
                                        )}
                                        <ButtonC style={{ marginBottom: '30px' }} startIcon={<IoMdAdd />} type="button" onClick={() => arrayHelpers.push('')} variant="outlined" label={formIsOpen ? 'Add Variant' : 'Update Variant'} color="primary" />
                                    </div>
                                )}
                            />
                        )}
                    />


                    <div className="flex justify-center items-center mt-3">
                        <ButtonC type="cancel" variant="outlined" label={formIsOpen ? 'Cancel' : 'Cancel'} />
                        <ButtonC style={{ marginLeft: '10px' }} type="submit" variant="contained" label={formIsOpen ? 'Submit' : 'Update'} color="primary" />
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default FormC

