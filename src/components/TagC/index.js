import React from 'react'
import { Tag } from 'antd';

const TagC = ({ onClick, label, className, color, startIcon }) => {
  return (
    <>
      <Tag color={color} onClick={onClick} className={className}>{label} {startIcon}</Tag>
    </>
  )
}

export default TagC