import { Modal } from 'antd';
import React, { useContext, useState } from 'react';
import ButtonC from '../../../../components/ButtonC'
import TagC from '../../../../components/TagC'
import { ProductVariantsContext } from "../../../../context/ProductVariantContext"
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { CommonsContext } from '../../../../context/CommonContext'
import HighLightModal from '../../../../components/Admin/ProductVariant/HighLightModal'
import SpecificationModal from '../../../../components/Admin/ProductVariant/SpecificationModal'
import { getProductHighLightList, getProductSpecificationList } from '../../../../apis/product_variant';
import VariantForm from './VariantForm';

const ProductVariants = () => {
    const [product_highlight, setProduct_highlight] = useState([]);
    const [product_specifications, setProduct_specifications] = useState([]);
    const { handleDelete } = useContext(CommonsContext);
    const { variantDetailOpen, setVariantDetailOpen, productVariants, variantFormIsOpen, setHighLightDetailOpen, setSpecificationDetailOpen, setVariantFormIsOpen } = useContext(ProductVariantsContext)

    let attribute_value = [];
    const handleHighLightOpen = async (id) => {
        setHighLightDetailOpen(true);
        let data = await getProductHighLightList(id);
        if (data?.status === 200) {
            setProduct_highlight(data?.data?.data?.rows);
        }
    }

    const handleSpecificationOpen = async (id) => {
        setSpecificationDetailOpen(true);
        let data = await getProductSpecificationList(id);
        if (data?.status === 200) {
            setProduct_specifications(data?.data?.data?.rows);
            console.log("specification", product_specifications)
        }
    }

    const handleFormOpen = (id) => {
        setVariantFormIsOpen(true)
    }

    return (
        <div>
            <Modal
                open={variantDetailOpen}
                onCancel={() => setVariantDetailOpen(false)}
                footer={null}
                className="overflow-y-auto h-2/3"
                width={800}
            >
                {
                    productVariants ? productVariants.map((variant, index) => ((
                        <>
                            <p className='mt-5 mb-3 text-xl font-semibold'>Product Variants</p>

                            <div className="flex w-full text flex-col">

                                <div className='p-1 border flex flex-wrap border-2 rounded-xl border-gray-200 w-full md:h-52 sm:h-96 h-96 mb-3'>

                                    <div className='md:w-2/6 w-full flex justify-center items-center'>
                                        <img className='md:h-44 sm:w-96 h-32 w-full' src="data:image/jpeg;base64,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" alt="" />
                                    </div>

                                    <div className='md:w-3/6 items-left w-full'>
                                        <div className='md:mx-8 mx-3 md:py-4'>
                                            {
                                                variant?.product_variants?.map((Item) => {
                                                    attribute_value.push(Item?.attribute_value);
                                                })
                                            }
                                            <p className='text-xl font-semibold mb-3'>{variant?.name} ( {(attribute_value)} )</p>
                                            {
                                                variant?.product_variant_details && variant?.product_variant_details.map((item) => (
                                                    <>
                                                        <p className='text-sm font-semibold md:mb-1.5 mb-1'> Strike price : <span className='text-gray-400'>{item?.strike_price}</span> </p>
                                                        <p className='text-sm font-semibold md:mb-1.5 mb-1'>price : <span className='text-gray-400'>{item?.price}</span> </p>
                                                        <p className='text-sm font-semibold md:mb-1.5 mb-1'>tag : <span className='text-gray-400'>{item?.tag}</span> </p>
                                                        <p className='text-sm font-semibold md:mb-1.5 mb-1'>stock : <span className='text-gray-400'>{item?.stock}</span> </p>
                                                        <div className='mt-3'>
                                                            <TagC onClick={() => handleHighLightOpen(variant?.id)} className="hover:cursor-pointer hover:bg-gray-100" label="Highlights" />
                                                            <TagC onClick={() => handleSpecificationOpen(variant?.id)} className="hover:cursor-pointer hover:bg-gray-100" label="Specifications" />
                                                        </div>
                                                    </>
                                                ))
                                            }
                                        </div>

                                    </div>

                                    <div className='flex justify-center items-center md:w-1/6 w-full'>
                                        <FiEdit
                                            onClick={() => ''}
                                            className="text-blue-600 text-xl hover:text-blue-900 hover:cursor-pointer"
                                        />
                                        <MdDeleteOutline
                                            onClick={() => handleDelete('')}
                                            className="text-red-600 text-2xl hover:text-red-900 ml-2 hover:cursor-pointer"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-1 flex justify-center items-center">
                                <ButtonC type="submit" className="md:w-24 w-28 sm:w-16" variant="outlined" label="Add" color="primary" onClick={handleFormOpen} />
                            </div>
                        </>
                    )
                    )
                    ) : (
                        <div className='flex justify-center items-center text-2xl'>
                            No data
                        </div>
                    )
                }

            </Modal>

            <Modal
                open={variantFormIsOpen}
                onCancel={() => setVariantFormIsOpen(false)}
                footer={null}
            >
                <VariantForm formIsOpen={variantFormIsOpen} />
            </Modal>

            <HighLightModal list={product_highlight} />
            <SpecificationModal list={product_specifications} />

        </div>
    );
}

export default ProductVariants;