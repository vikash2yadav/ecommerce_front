import { Modal } from 'antd'
import React, { useContext } from 'react'
import { ProductVariantsContext } from '../../../../context/ProductVariantContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const SpecificationModal = ({ list }) => {
  const { specificationDetailOpen, setSpecificationDetailOpen } = useContext(ProductVariantsContext)

  return (
    <>
      <Modal
        open={specificationDetailOpen}
        onCancel={() => setSpecificationDetailOpen(false)}
        footer={null}
        width={450}
      >
        <p className='mt-5 mb-3 text-xl font-semibold mb-5 capitalize'>specifications</p>
        {
          list.length === 0 ? (
            <div className='flex pt-2 mb-5 justify-center items-center text-2xl'>
              No data
            </div>
          )
            : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="simple table">
                  <TableHead>
                    <TableRow style={{backgroundColor:'#C8C8C8', color: 'white'}}>
                      <TableCell>Category</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((item) => (
                      <TableRow
                        key={list.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>{item?.specification_category?.name}</TableCell>
                        <TableCell>{item?.title}</TableCell>
                        <TableCell>{item?.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
        }
      </Modal>
    </>
  )
}

export default SpecificationModal