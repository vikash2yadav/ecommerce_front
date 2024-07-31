import React, { useContext } from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Formik, Form, Field, FieldArray, useFormik } from 'formik';
import InputC from '../../../../../components/InputC';
import SelectC from '../../../../../components/SelectC';
import { CommonsContext } from '../../../../../context/CommonContext';
import { addProductInitialValue, addProductSchema, tags } from '../../Schema';
import ButtonC from '../../../../../components/ButtonC';
import {addProductVariantApi} from '../../../../../apis/product_variant'

const VariantForm = (props) => {
    const { setFormIsOpen, formIsEdit, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    
    const handleSubmit = async (values) => {
        console.log(values);
      if(props?.formIsOpen){
        let data = await addProductVariantApi(values);
        if(data?.status === 200){
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'success',
                message: data?.data?.message
            })
        }else{
            setSnackbarAlertOpen(true);
            setSnackbarContent({
                type: 'error',
                message: data?.data?.message
            })
        }
      }
    };

    const handleChange = (name) => (value) => {
        // Formik.(name, value)
    }

    return (
          <Formik
            initialValues={{
                variants: [{
                    attributes: [{}]
                }]
            }}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange }) => (
                <Form>
                    <FieldArray
                        name="variants"
                        render={arrayHelpers => (
                            <div>
                                {values.variants && values.variants.length > 0 ? (
                                    values.variants.map((item, index) => (
                                        <div key={index}>
                                            <p className='text-xl font-semibold'>{props?.formIsOpen ? `Product Variant ${index + 1}` : `Product Variant ${index + 1}`}</p>
                                            <div className='flex justify-end items-end mb-3'>
                                                <FaDeleteLeft size="2.2rem" className='text-gray-700' onClick={() => arrayHelpers.remove(index)} />
                                            </div>
                                            <div className='grid grid-cols-2 gap-8 mb-3'>
                                                <div className='mb-3'>
                                                    <p className='text-sm'>Product Name </p>
                                                    <InputC name={`variants[${index}].name`} value={values.variants[index].name} onChange={handleChange} />
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
                                                    <SelectC options={tags} className='w-full' name={`variants[${index}].tag`} value={values.variants[index].tag} onChange={(e) => handleChange(e.target.name, e.target.value)} />
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
                                                        <p className='text-sm'>Attributes </p>
                                                        <div className='grid grid-cols-2 gap-8 mb-3 border border-gray-200 py-4 px-6'>
                                                            {values.variants[index].attributes.map((attribute, attrIndex) => (
                                                                <>
                                                                <div key={attrIndex} className='mb-3'>
                                                                    <p className='text-xs'>Name</p>
                                                                    <SelectC options={tags} className='w-full' name={`variants[${index}].attributes[${attrIndex}].attribute_id`} value={attribute.attribute_id} onChange={handleChange('attribute_id')} />
                                                                </div>
                                                                <div key={attrIndex} className='mb-3'>
                                                                <p className='text-xs'>Name</p>
                                                                <SelectC options={tags} className='w-full' name={`variants[${index}].attributes[${attrIndex}].attribute_id`} value={attribute.attribute_id} onChange={handleChange('attribute_id')} />
                                                            </div>
                                                            </>
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            <div className='mb-8'>
                                                <p className='text-sm'>Keywords <span className='text-xs text-blue-500 mx-1'>(keywords will be used to filter your product)</span> </p>
                                                <InputC name={`variants[${index}].keywords`} value={values.variants[index].keywords} onChange={handleChange} />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                                <ButtonC style={{ marginBottom: '30px' }} startIcon={<IoMdAdd />} type="button" onClick={() => arrayHelpers.push({ attributes: [{}] })} variant="outlined" label={'Add'} color="primary" />
                            </div>
                        )}
                    />
                      <div className='flex justify-center items-center'>
                      <ButtonC type="submit" onClick={handleSubmit} variant="contained" label={props?.formIsOpen ? 'Submit' : 'Update'} color="primary" />
                      </div>
                </Form>
            )}
        </Formik>
    );
};

export default VariantForm;
