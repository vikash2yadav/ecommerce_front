import { Modal } from 'antd';
import React, { useContext } from 'react';
import ButtonC from '../../../../components/ButtonC'
import { ProductVariantsContext } from "../../../../context/ProductVariantContext"

const ProductVariants = () => {
    const { variantDetailOpen, setVariantDetailOpen, productVariants } = useContext(ProductVariantsContext)
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
                    productVariants ? productVariants.map((variant) => ((
                        <>
                            <p className='mt-5 mb-3 text-xl font-semibold'>Product Variants</p>

                            <div className="flex w-full text-center flex-col">

                                <div className='border flex justify-between items-center border-2 rounded-xl border-gray-200 w-full h-44 mb-3'>
                                    <div>
                                        <h1>vnjhrvirjkgv</h1>
                                    </div>
                                    <div>
                                        <h1>vjkfvrtjkvmrjodfoekk,</h1>
                                    </div>
                                </div>

                                <div className="mt-1">
                                    <ButtonC type="submit" className="md:w-24 w-28 sm:w-16" variant="outlined" label="Add" color="primary" />
                                </div>
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
        </div>
    );
}

export default ProductVariants;