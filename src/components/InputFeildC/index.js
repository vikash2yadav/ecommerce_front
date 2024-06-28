import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputFeildC({className, variant, value, name, onChange}) {
  return (
    <Box>
      <TextField id="outlined-basic" className={className} variant={variant} value={value} name={name} onChange={onChange} />
    </Box>
  );
}