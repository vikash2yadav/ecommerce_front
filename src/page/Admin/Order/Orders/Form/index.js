import React, { useContext } from 'react';
import { Form as FormikForm, FieldArray, Formik } from 'formik';
import { Button, Modal, Popover } from 'antd';
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import InputC from '../../../../../components/InputC';
import TagC from '../../../../../components/TagC';
import DatePickerC from '../../../../../components/DatePickerC';
import SelectC from '../../../../../components/SelectC';
import ButtonC from '../../../../../components/ButtonC';
import { CommonsContext } from '../../../../../context/CommonContext';
import { addOrderInitialValue, addOrderSchema } from '../Schema';
import { addCategory, updateCategory } from '../../../../../apis/category';
import { CategoryContext } from '../../../../../context/CategoryContext';
import { CustomersContext } from '../../../../../context/CustomerContext';
import { PartnersContext } from '../../../../../context/PartnerContext';
import { ProductsContext } from '../../../../../context/ProductContext';
import { TbHandClick } from "react-icons/tb";

const Form = (props) => {
    const { getAllCategories, defaultFilter } = useContext(CategoryContext);
    const { formIsOpen, setFormIsOpen, setFormIsEdit, setSnackbarAlertOpen, setSnackbarContent } = useContext(CommonsContext);
    const { customers } = useContext(CustomersContext);
    const { products } = useContext(ProductsContext);

    const handleClose = () => {
        setFormIsOpen(false);
        setFormIsEdit(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        const response = formIsOpen ? await addCategory(values) : await updateCategory(values);
        const messageType = response?.status === 200 ? 'success' : 'error';

        setSnackbarAlertOpen(true);
        setSnackbarContent({
            type: messageType,
            message: response.data.message
        });

        if (messageType === 'success') {
            getAllCategories(defaultFilter);
            handleClose();
            resetForm();
        }
    };

    return (
        <Modal open={props?.open} onCancel={handleClose} footer={null} width={600} style={{ top: 50 }}>
            <p className='text-xl font-semibold mt-3 mb-3'>{formIsOpen ? 'Add Order' : 'Update Order'}</p>
            <div className='md:h-96 h-80 overflow-y-auto hide-scrollbar'>
                <Formik
                    initialValues={addOrderInitialValue}
                    validationSchema={addOrderSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, setFieldValue }) => (
                        <FormikForm>
                            <div className='grid grid-cols-2 gap-8 mb-3'>
                                <div className='mb-3'>
                                    <p className='text-sm'>Customer</p>
                                    <SelectC options={customers} className="w-full" name='user_id' value={values.user_id} options={customers} onChange={(value) => setFieldValue('user_id', value)} />
                                </div>
                                <div className='mb-3'>
                                    <p className='text-sm'>Order date</p>
                                    <DatePickerC sx={{ width: '100%' }} name='orderd_date' value={values.orderd_date} onChange={(value, datestring) => { setFieldValue("orderd_date", datestring) }} />
                                </div>
                            </div>
                            <FieldArray name='items'>
                                {({ remove, push }) => (
                                    <>
                                        <p className='text-xl'>Items</p>
                                        <div className='mb-5 gap-8 border border-gray-200 py-2 px-6'>
                                            {values.items.map((item, index) => (
                                                <div key={index}>
                                                    <div className='flex justify-center items-center'>
                                                        <h1 className="px-4 py-0.5 bg-yellow-400 text-sm font-semibold rounded-xl border border-gray-200">Item {index + 1}</h1>
                                                    </div>
                                                    <div className='flex justify-end items-end'>
                                                        <FaDeleteLeft size='1.5rem' className='text-gray-700' onClick={() => remove(index)} />
                                                    </div>
                                                    <div className='grid grid-cols-2 gap-8 mb-3'>
                                                        <div className='mb-1'>
                                                            <p className='text-xs'>Product</p>
                                                            <SelectC
                                                                options={products}
                                                                className="w-full"
                                                                name={`items[${index}].product_id`}
                                                                value={values.items[index].product_id}
                                                                onChange={(value) => setFieldValue(`items[${index}].product_id`, value)}
                                                            />
                                                        </div>
                                                        <div className='mb-1'>
                                                            <p className='text-xs'>Variant</p>
                                                            <SelectC
                                                                // options={'productVariants'}
                                                                className="w-full"
                                                                name={`items[${index}].product_variant_id`}
                                                                value={values.items[index].product_variant_id}
                                                                onChange={(value) => setFieldValue(`items[${index}].product_variant_id`, value)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='mb-3'>
                                                        <p className='text-xs'>Stock</p>
                                                        <InputC
                                                            type='number'
                                                            name={`items[${index}].stock`}
                                                            value={values.items[index].stock}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                    <div className=' w-full mb-5 '>
                                                        <Popover content={<div>
                                                            <p className='text-sm font-semibold md:mb-1.5 mb-1'> Strike price : <span className='text-gray-400'>{ }</span> </p>
                                                            <p className='text-sm font-semibold md:mb-1.5 mb-1'>price : <span className='text-gray-400'>{item?.stock}</span> </p>
                                                        </div>} title="Description" trigger="hover">
                                                            <Button color="secondary">Get Info</Button>
                                                        </Popover>
                                                    </div>
                                                </div>
                                            ))}
                                            <ButtonC
                                                style={{ marginBottom: '10px', marginTop: '5px' }}
                                                startIcon={<IoMdAdd />}
                                                type='button'
                                                onClick={() => push({
                                                    name: '',
                                                    sku: '',
                                                    strike_price: '',
                                                    price: '',
                                                    tag: '',
                                                    stock: '',
                                                    attributes: [{ attribute_id: '', attribute_value: '' }]
                                                })}
                                                variant='outlined'
                                                label='Add Item'
                                                color='primary'
                                            />
                                        </div>
                                    </>
                                )}
                            </FieldArray>

                            <div className='flex justify-center items-center'>
                                <ButtonC type='submit' variant='contained' label='Update' color='primary' />
                            </div>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default Form;
