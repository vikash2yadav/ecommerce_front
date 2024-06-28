import React from 'react';
import { MuiTelInput } from 'mui-tel-input';

export default function TelInputC({ name, value, onChange }) {
  const handleChange = (newPhone) => {
    onChange({ target: { name, value: newPhone } });
  };

  return (
    <MuiTelInput defaultCountry="in" name={name} value={value} onChange={handleChange} />
  );
}
