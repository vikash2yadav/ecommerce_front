import { Input } from 'antd'
import React from 'react'

const InputC = ({type, name, onChange, value, defaultValue}) => {
  return (
    <>
    <Input 
        defaultValue={defaultValue}
    type={type}
    name={name} 
    onChange={onChange}
    value={value}
    />
    </>
  )
}

export default InputC