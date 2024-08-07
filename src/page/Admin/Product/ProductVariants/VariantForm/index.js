import React, { useContext, useEffect } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Formik, Form, FieldArray, useFormikContext } from 'formik';
import InputC from '../../../../../components/InputC';
import SelectC from '../../../../../components/SelectC';
import { CommonsContext } from '../../../../../context/CommonContext';
import { tags } from '../../Schema';
import ButtonC from '../../../../../components/ButtonC';
import { addProductVariantApi, updateProductVariantApi } from '../../../../../apis/product_variant';
import { addProductVariantInitialValue, addProductVariantSchema } from '../Schema';
import { ProductVariantsContext } from '../../../../../context/ProductVariantContext';
import { Modal } from 'antd';
import { AttributesContext } from '../../../../../context/AttributeContext';
import { SpecificationsContext } from '../../../../../context/SpecificationContext';

const VariantForm = () => {
    const { setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    const { parentProductData, getAllProductVariants, variantFormIsOpen, editData, setVariantFormIsOpen, variantFormIsEdit, setVariantFormIsEdit } = useContext(ProductVariantsContext)
    const { attributes } = useContext(AttributesContext);
    const { specificationCategories } = useContext(SpecificationsContext);

    const handleClose = () => {
        setVariantFormIsOpen(false);
        setVariantFormIsEdit(false);
    }

    const handleSubmit = async (values, { resetForm }) => {
        values.variants = values.variants.map(variant => {
            return {
                ...variant,
                category_id: parentProductData?.category_id,
                parent_id: parentProductData?.id,
                vendor_id: parentProductData?.vendor_id,
            };
        });
        if (variantFormIsOpen) {
            let data = await addProductVariantApi(values);
            if (data?.status === 200) {
                getAllProductVariants(parentProductData?.id);
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'success',
                    message: data.data.message
                });
                resetForm();
                handleClose();
            } else {
                setSnackbarAlertOpen(true);
                setSnackbarContent({
                    type: 'error',
                    message: data.data.message
                });
            }
        }
    }

    return (
        <Modal
            open={variantFormIsOpen}
            onCancel={handleClose}
            footer={null}
            width={500}
            style={{
                top: 50,
            }}
        >
            <div className='md:h-96 h-80 overflow-y-auto hide-scrollbar'>
                <Formik
                    initialValues={variantFormIsOpen ? addProductVariantInitialValue : editData}
                    validationSchema={addProductVariantSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, setFieldValue }) => (
                        <Form>
                            <FieldArray
                                name="variants"
                                render={arrayHelpers => (
                                    <div>
                                        {values.variants && values.variants.length > 0 ? (
                                            values.variants.map((item, index) => (
                                                <div key={index}>
                                                    <p className='text-xl font-semibold mt-5'>Product Variant {index + 1}</p>
                                                    {
                                                        variantFormIsOpen ? (<div className='flex justify-end items-end mb-3'>
                                                            <FaDeleteLeft size="2rem" className='text-gray-700' onClick={() => arrayHelpers.remove(index)} />
                                                        </div>) :
                                                            (null)
                                                    }
                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Product Name </p>
                                                            <InputC defaultValue="abc" name={`variants[${index}].name`} value={values.variants[index].name} onChange={handleChange} />
                                                        </div>

                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Sku </p>
                                                            <InputC name={`variants[${index}].sku`} value={values.variants[index].sku} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Strike Price </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].strike_price`} value={values.variants[index].strike_price} onChange={handleChange} />
                                                        </div>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Price </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].price`} value={values.variants[index].price} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Tag </p>
                                                            <SelectC
                                                                options={tags}
                                                                className='w-full'
                                                                name={`variants[${index}].tag`}
                                                                value={values.variants[index].tag}
                                                                onChange={(value) => setFieldValue(`variants[${index}].tag`, value)}
                                                            />
                                                        </div>
                                                        <div className='mb-3'>
                                                            <p className='text-sm'>Stock </p>
                                                            <InputC type="number" placeholder={0} className='w-full' name={`variants[${index}].stock`} value={values.variants[index].stock} onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <FieldArray
                                                        name={`variants[${index}].attributes`}
                                                        render={attributeHelpers => (
                                                            <>
                                                                <p className='text-xl'>Attributes </p>
                                                                <div className='mb-5 gap-8 border border-gray-200 py-2 px-6'>
                                                                    {values.variants[index].attributes.map((attribute, attrIndex) => (
                                                                        <div key={attrIndex}>
                                                                            <div className='flex justify-end items-end'>
                                                                                <FaDeleteLeft size="1.5rem" className='text-gray-700' onClick={() => attributeHelpers.remove(attrIndex)} />
                                                                            </div>
                                                                            <div className="grid grid-cols-2 gap-8">
                                                                                <div className='mb-1'>
                                                                                    <p className='text-xs'>Name</p>
                                                                                    <SelectC
                                                                                        options={attributes}
                                                                                        className='w-full'
                                                                                        name={`variants[${index}].attributes[${attrIndex}].attribute_id`}
                                                                                        value={values?.variants[index].attributes[attrIndex].attribute_id}
                                                                                        onChange={(value) => setFieldValue(`variants[${index}].attributes[${attrIndex}].attribute_id`, value)}
                                                                                    />
                                                                                </div>
                                                                                <div className='mb-1'>
                                                                                    <p className='text-xs'>Value</p>
                                                                                    <InputC
                                                                                        className='w-full'
                                                                                        name={`variants[${index}].attributes[${attrIndex}].attribute_value`}
                                                                                        value={values?.variants[index].attributes[attrIndex].attribute_value}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    <ButtonC style={{ marginBottom: '10px', marginTop: '5px' }} startIcon={<IoMdAdd />} type="button" onClick={() => attributeHelpers.push({ attribute_id: '', attribute_value: '' })} variant="outlined" label={'Add'} color="primary" />
                                                                </div>
                                                            </>
                                                        )}
                                                    />

                                                    <div className='mb-8'>
                                                        <p className='text-sm'>Keywords <span className='text-xs text-blue-500 mx-1'>(keywords will be used to filter your product)</span> </p>
                                                        <InputC name={`variants[${index}].keywords`} value={values.variants[index].keywords} onChange={handleChange} />
                                                    </div>


                                                    <FieldArray
                                                        name={`variants[${index}].highlights`}
                                                        render={highlightsHelpers => (
                                                            <>
                                                                <p className='text-xl'>HighLights </p>
                                                                <div className='mb-5 gap-8 border border-gray-200 py-2 px-6'>
                                                                    {values.variants[index].highlights.map((highlight, highIndex) => (
                                                                        <div key={highIndex}>
                                                                            <div className='flex justify-end items-end'>
                                                                                <FaDeleteLeft size="1.5rem" className='text-gray-700' onClick={() => highlightsHelpers.remove(highIndex)} />
                                                                            </div>
                                                                            <div className='mb-1'>
                                                                                <p className='text-xs'>Content</p>
                                                                                <InputC
                                                                                    className='w-full'
                                                                                    name={`variants[${index}].highlights[${highIndex}].content`}
                                                                                    value={values?.variants[index].highlights[highIndex].content}
                                                                                    onChange={handleChange}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    <ButtonC style={{ marginBottom: '10px', marginTop: '5px' }} startIcon={<IoMdAdd />} type="button" onClick={() => highlightsHelpers.push({ content: '' })} variant="outlined" label={'Add'} color="primary" />
                                                                </div>
                                                            </>
                                                        )}
                                                    />


                                                    <FieldArray
                                                        name={`variants[${index}].specifications`}
                                                        render={specificationsHelpers => (
                                                            <>
                                                                <p className='text-xl'>Specifications </p>
                                                                <div className='mb-5 gap-8 border border-gray-200 py-2 px-6'>
                                                                    {values.variants[index].specifications.map((specification, specificationIndex) => (
                                                                        <div key={specificationIndex}>
                                                                            <div className='flex justify-end items-end'>
                                                                                <FaDeleteLeft size="1.5rem" className='text-gray-700' onClick={() => specificationsHelpers.remove(specificationIndex)} />
                                                                            </div>

                                                                            <div className='mb-2'>
                                                                                <p className='text-xs'>Specification Category</p>
                                                                                <SelectC
                                                                                    defaultValue={editData}
                                                                                    options={specificationCategories}
                                                                                    className='w-full'
                                                                                    name={`variants[${index}].specifications[${specificationIndex}].specification_category_id`}
                                                                                    value={values?.variants[index].specifications[specificationIndex].specification_category_id}
                                                                                    onChange={(value) => setFieldValue(`variants[${index}].specifications[${specificationIndex}].specification_category_id`, value)}
                                                                                />
                                                                            </div>

                                                                            <div className="grid grid-cols-2 gap-8">
                                                                                <div className='mb-1'>
                                                                                    <p className='text-xs'>Title</p>
                                                                                    <InputC
                                                                                        className='w-full'
                                                                                        name={`variants[${index}].specifications[${specificationIndex}].title`}
                                                                                        value={values?.variants[index].specifications[specificationIndex].title}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                </div>
                                                                                <div className='mb-1'>
                                                                                    <p className='text-xs'>Value</p>
                                                                                    <InputC
                                                                                        className='w-full'
                                                                                        name={`variants[${index}].specifications[${specificationIndex}].value`}
                                                                                        value={values?.variants[index].specifications[specificationIndex].value}
                                                                                        onChange={handleChange}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                    <ButtonC style={{ marginBottom: '10px', marginTop: '5px' }} startIcon={<IoMdAdd />} type="button" onClick={() => specificationsHelpers.push({})} variant="outlined" label={'Add'} color="primary" />
                                                                </div>
                                                            </>
                                                        )}
                                                    />

                                                </div>
                                            ))
                                        ) : null}
                                        {
                                            <ButtonC style={{ marginBottom: '30px' }} startIcon={<IoMdAdd />} type="button" onClick={() => arrayHelpers.push(
                                                {
                                                    name: '', sku: '', strike_price: 0, price: 0, tag: '', stock: 0, keywords: '',
                                                    attributes: [{ attribute_id: '', attribute_value: '' }],
                                                    highlights: [{ content: '' }],
                                                    specifications: [{
                                                        specification_category_id: '',
                                                        title: '',
                                                        value: ''
                                                    }]
                                                })} variant="outlined" label={'Add'} color="primary" />
                                        }
                                    </div>
                                )}
                            />
                            <div className='flex justify-center items-center'>
                                <ButtonC type="submit" variant="contained" label={'Add'} color="primary" />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default VariantForm;
