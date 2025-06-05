import React, { useState } from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './index.css';
import App from './App';
import jsonData from './filmstocks.json';
import reportWebVitals from './reportWebVitals';
import logo from './img/desktop-logo-small.png'



function Start() {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };
  const handleGoClick = () => {
        console.log('Selected Value:', selectedValue.value);
        // Perform your desired action here
    };
  const styles = {
  container: (base) => ({
    ...base,
    flex: 1,
  })};
  return (
    <div >
      <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '200px',
      justifyContent: 'center'}}>
      <img src={logo} />
      </div>

      <div style={{
      maxWidth: '600px',
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      margin: '0 auto',
      justifyContent: 'center'}}>

      <Select 
        styles={styles} 
        placeholder="Select a film stock..."
        onChange={handleChange}
        value={selectedValue}
        options={jsonData.map((option) => ({
        value: option.process,
        label: option.film}))
        }/>
        &nbsp;
        &nbsp;
        &nbsp;
        <Button title='Start' onPress={handleGoClick}/>
      </div>
    </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
