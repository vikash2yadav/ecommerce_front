import React from 'react'
import { Tag } from 'antd';

const TagC = ({ onClick, label, className }) => {
  return (
    <>
      <Tag onClick={onClick} className={className}>{label}</Tag>
    </>
  )
}

export default TagC