import { Input } from 'antd'
import React from 'react'

const InputC = ({ type,sx, placeholder, className, name, onChange, value, defaultValue }) => {
  return (
    <>
      <Input
        defaultValue={defaultValue}
        style={sx}
        className={className}
        placeholder= {placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  )
}

export default InputC