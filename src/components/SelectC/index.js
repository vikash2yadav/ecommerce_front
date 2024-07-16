import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SelectC = ({ showSearch, className, defaultValue, options, value, onChange }) => {
  return (
    <Select showSearch={showSearch} defaultValue={defaultValue} className={className} value={value} onChange={onChange}>
      {options && options.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
};

export default SelectC;
