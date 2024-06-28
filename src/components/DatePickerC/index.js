import React from 'react';
import { DatePicker } from 'antd';

const DatePickerC = ({ name, value, onChange }) => {
  return (
    <DatePicker name={name}  onChange={onChange} />
  );
};

export default DatePickerC;
