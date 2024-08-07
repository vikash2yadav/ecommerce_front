import React, { useContext, useEffect, useState } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Formik, Form, FieldArray } from 'formik';
import InputC from '../../../../../components/InputC';
import SelectC from '../../../../../components/SelectC';
import { CommonsContext } from '../../../../../context/CommonContext';
import { tags } from '../../Schema';
import ButtonC from '../../../../../components/ButtonC';
import { updateProductVariantApi } from '../../../../../apis/product_variant';
import { updateProductVariantInitialValue, addProductVariantSchema } from '../Schema';
import { ProductVariantsContext } from '../../../../../context/ProductVariantContext';
import { Modal } from 'antd';
import { AttributesContext } from '../../../../../context/AttributeContext';
import { SpecificationsContext } from '../../../../../context/SpecificationContext';

const UpdateForm = () => {
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    const { parentProductData, editData, setEditData, setVariantFormIsOpen, variantFormIsEdit, setVariantFormIsEdit } = useContext(ProductVariantsContext);
    const { attributes } = useContext(AttributesContext);
    const { specificationCategories } = useContext(SpecificationsContext);
    const [initialValues, setInitialValues] = useState(updateProductVariantInitialValue);

    useEffect(() => {
        // if (editData) {
        //     setInitialValues({
        //         name: editData.name,
        //         sku: editData.sku,
        //         // strike_price: editData.product_variant_details[0]?.strike_price,
        //         // price: editData.product_variant_details[0]?.price,
        //         // tag: editData.product_variant_details[0]?.tag,
        //         // stock: editData.product_variant_details[0]?.stock,
        //         keywords: editData.keywords,
        //         attributes: editData.attributes,
        //         highlights: editData.highlights,
        //         specifications: editData.specifications,
        //     });
        // }
    }, [editData]);

    const handleClose = () => {
        setVariantFormIsOpen(false);
        setVariantFormIsEdit(false);
    }

    const handleSubmit = async (values, { resetForm }) => {
        // let data = await updateProductVariantApi(values);
        console.log(values)
        let data ;
        if (data?.status === 200) {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data.data.message
            });
            handleClose();
        } else {
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data.data.message
            });
        }
    }

    return (
        <Modal
            open={variantFormIsEdit}
            onCancel={handleClose}
            footer={null}
            width={500}
            style={{
                top: 50,
            }}
        >
            <div className='md:h-96 h-80 overflow-y-auto hide-scrollbar'>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, setFieldValue }) => (
                        <Form>
                            <div>
                                <div>
                                    <p className='text-xl font-semibold mt-5 mb-5'>Update Variant</p>

                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                        <div className='mb-3'>
                                            <p className='text-sm'>Product Name </p>
                                            <InputC name='name' value={values.name} onChange={handleChange} />
                                        </div>

                                        <div className='mb-3'>
                                            <p className='text-sm'>Sku </p>
                                            <InputC name={`sku`} value={values.sku} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                        <div className='mb-3'>
                                            <p className='text-sm'>Strike Price </p>
                                            <InputC type="number" placeholder={0} className='w-full' name={`strike_price`} value={values.strike_price} onChange={handleChange} />
                                        </div>
                                        <div className='mb-3'>
                                            <p className='text-sm'>Price </p>
                                            <InputC type="number" placeholder={0} className='w-full' name={`price`} value={values.price} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                        <div className='mb-3'>
                                            <p className='text-sm'>Tag </p>
                                            <SelectC
                                                options={tags}
                                                className='w-full'
                                                name={`tag`}
                                                value={values.tag}
                                                onChange={(value) => setFieldValue(`tag`, value)}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <p className='text-sm'>Stock </p>
                                            <InputC type="number" placeholder={0} className='w-full' name={`stock`} value={values.stock} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <FieldArray
                                        name={`attributes`}
                                        render={attributeHelper => (
                                            <>
                                                <p className='text-xl'>Attributes </p>
                                                <div className='mb-5 gap-8 border border-gray-200 py-2 px-6'>
                                                    {values?.attributes.map((attribute, attrIndex) => (
                                                        <div key={attrIndex}>
                                                            <div className='flex justify-end items-end'>
                                                                <FaDeleteLeft size="1.5rem" className='text-gray-700' onClick={() => attributeHelper.remove(attrIndex)} />
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-8">
                                                                <div className='mb-1'>
                                                                    <p className='text-xs'>Name</p>
                                                                    <SelectC
                                                                        options={attributes}
                                                                        className='w-full'
                                                                        name={`attributes[${attrIndex}].attribute_id`}
                                                                        value={values.attributes[attrIndex].attribute_id}
                                                                        onChange={(value) => setFieldValue(`values.attributes[${attrIndex}].attribute_id`, value)}
                                                                    />
                                                                </div>
                                                                <div className='mb-1'>
                                                                    <p className='text-xs'>Value</p>
                                                                    <InputC
                                                                        className='w-full'
                                                                        name={`attributes[${attrIndex}].attribute_value`}
                                                                        value={values.attributes[attrIndex].attribute_value}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <ButtonC style={{ marginBottom: '10px', marginTop: '5px' }} startIcon={<IoMdAdd />} type="button" onClick={() => attributeHelper.push({ attribute_id: '', attribute_value: '' })} variant="outlined" label={'Add'} color="primary" />
                                                </div>
                                            </>
                                        )}
                                    />

                                    <div className='mb-8'>
                                        <p className='text-sm'>Keywords <span className='text-xs text-blue-500 mx-1'>(keywords will be used to filter your product)</span> </p>
                                        <InputC name={`keywords`} value={values.keywords} onChange={handleChange} />
                                    </div>

                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <ButtonC type="submit" variant="contained" label={'Update'} color="primary" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default UpdateForm;