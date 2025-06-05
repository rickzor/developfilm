import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import './App.css';
import jsonData from './filmstocks.json';
import logo from './img/desktop-logo-small.png'

function App() {
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
    flex: 1
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



export default App;
