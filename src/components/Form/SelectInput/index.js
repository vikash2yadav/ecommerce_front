import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput({options, onChange, name, value}) {

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange((e)=>e.target.value)}
          name={name}

        >
          {
            options.map((item) => (
              <MenuItem value={item.value}>{item?.name}</MenuItem>
            ))
          }
        </Select>
  );
}
