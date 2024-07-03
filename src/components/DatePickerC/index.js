import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const DatePickerC = ({ name, value, onChange }) => {
  return (
    <DatePicker
      name={name}
      value={value ? moment(value, 'YYYY-MM-DDTHH:mm') : null}
      onChange={(date, dateString) => onChange(name, date ? date.format('YYYY-MM-DDTHH:mm') : '')}
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
    />
  );
};

export default DatePickerC;
