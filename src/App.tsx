import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [date, setDate] = useState(null);
  const handleChange = (value:any) => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date : 'None'}
      </div>
    </div>
  );
}


export default App;
