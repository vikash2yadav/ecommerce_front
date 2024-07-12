import React from 'react';
import { Pagination } from '@mui/material';
import { Select } from 'antd';
const { Option } = Select;

const PaginationC = (props) => {
  const pageItems = [5, 10, 15, 20];

  const handleChange = (items) => {
    props.setDefaultFilter(prevValue => ({
      ...prevValue,
      itemsPerPage: items
    }))
  };

  const handlePageChange = (event, page) => {
    props.setDefaultFilter(prevValue => ({
      ...prevValue,
      currentPage: page
    }))
  };

  return (
    <>
      {
        props?.totalItems > 0 ? (
          <div className='flex justify-around items-center mt-8'>
            <div>
              <span className='mx-2'>Rows per page: </span>
              <Select
                defaultValue={props?.defaultFilter.itemsPerPage}
                onChange={(value) => handleChange(value)}>
                {pageItems.map((item) => (
                  <Option key={item} value={item}>{item}</Option>
                ))}
              </Select>
            </div>
            <Pagination
              defaultPage={props?.defaultFilter.currentPage}
              count={Math.ceil(props?.totalItems / props?.defaultFilter?.itemsPerPage)}
              onChange={handlePageChange}
              showFirstButton showLastButton />
          </div>
        )
        :
        (
          <tr>
          <td className="p-6" colSpan={8}>
            <h1 className="text-center text-2xl mt-7"> No Data Found </h1>
          </td>
        </tr>
        )
      }
    </>
  )
}

export default PaginationC;
