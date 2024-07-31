import { Modal } from 'antd'
import React, { useContext } from 'react'
import { Divider, List } from 'antd';
import { ProductVariantsContext } from '../../../../context/ProductVariantContext'

const HighLightModal = ({ list }) => {
  const { highLightDetailOpen, setHighLightDetailOpen } = useContext(ProductVariantsContext)

  return (
    <>
      <Modal
        open={highLightDetailOpen}
        onCancel={() => setHighLightDetailOpen(false)}
        footer={null}
      >
       <div  className='md:h-56 h-36' >
       <Divider orientation="left">Highlights</Divider>
        {
          list ? (
            <List
              size="default"
              bordered
              dataSource={list}
              renderItem={(item) => <List.Item>{item.value}</List.Item>}
            />
          )
            :
            (
              <div className='flex justify-center items-center text-2xl'>
                No data
              </div>
            )
        }
       </div>
      </Modal>
    </>
  )
}

export default HighLightModal