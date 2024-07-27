import { Modal } from 'antd'
import React, { useContext } from 'react'
import { ProductVariantsContext } from '../../../../context/ProductVariantContext'

const SpecificationModal = ({ productVariants }) => {
  const { specificationDetailOpen, setSpecificationDetailOpen } = useContext(ProductVariantsContext)

  return (
    <>
      <Modal
        open={specificationDetailOpen}
        onCancel={() => setSpecificationDetailOpen(false)}
        footer={null}
      >
        {
          productVariants ? productVariants.map((variant) => ((
            <>
              <p className='mt-5 mb-3 text-xl font-semibold'>HighLights</p>
              <div className="flex w-full text flex-col">


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
    </>
  )
}

export default SpecificationModal