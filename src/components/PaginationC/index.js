import React from 'react'
import { Pagination } from '@mui/material';
import { Select } from 'antd';

const PaginationC = () => {
  return (
    <>
      <div className='flex justify-around items-center mt-8'>
        <div>
          <span className='mx-2'>Rows per page: </span>
          <Select defaultValue={5}>
            <option value="1">1</option><option value="2">2</option><option value="3">3</option>
          </Select>
        </div>
        <Pagination count={10} showFirstButton showLastButton />
      </div>
    </>
  )
}

export default PaginationC