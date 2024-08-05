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
        width={450}
      >
       <div className='md:max-h-80 md:min-h-28 min-h-18 max-h-64 overflow-y-auto hide-scrollbar'>
       <Divider orientation="left" className='capitalize'>Highlights</Divider>
        {
          list ? (
            <List
              size="default"
              bordered
              dataSource={list}
              renderItem={(item) => <List.Item>{item.content}</List.Item>}
            />
          )
            :
            (<></>)
        }
       </div>
      </Modal>
    </>
  )
}

export default HighLightModal
