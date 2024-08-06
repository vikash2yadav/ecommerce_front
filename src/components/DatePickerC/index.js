import React from 'react';
import { DatePicker } from 'antd';

const App = ({onChange, sx}) => (
  <>
    <DatePicker style={sx} onChange={onChange} />
  </>
);
export default App;