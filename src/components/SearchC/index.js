import Search from 'antd/es/transfer/search'
import React from 'react'

const SearchC = (props) => {
  return (
    <>
    <div style={props?.sx}>
    <Search placeholder={props?.placeholder} onChange={props?.onChange} className={props?.className} />
    </div>
    </>
  )
}

export default SearchC