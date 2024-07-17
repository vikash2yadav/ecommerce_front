import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const SelectC = ({ showSearch, className, defaultValue, options, value, onChange }) => {
  
  return (
    <Select showSearch={showSearch} defaultValue={defaultValue} className={className} value={value} onChange={onChange}>
      {options && options.map((item) => (
        <Option key={item.id} value={item.id}>
          {item.name && item.name} 
          {item?.full_name && item.full_name}
          {item?.attribute_value && item.attribute_value}
        </Option>
      ))}
    </Select>
  );
};

export default SelectC;
