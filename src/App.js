import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import './App.css';
import jsonData from './filmstocks.json';
import logo from './img/desktop-logo-small.png'
import Quiz from './quiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showInstructions, setShowInstructions] = useState(null);

  const handleChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };
  const handleQuizFinish = () => {
        console.log('Selected Value:', selectedValue.value);
        setShowQuiz(false);
        setShowSearch(false);
        // Perform your desired action here
  };
  const handleInstructionsFinish = () => {
        console.log('Selected Value:', selectedValue.value);
        setShowQuiz(false);
        setShowSearch(false);
        // Perform your desired action here
  };
  const handleGoClick = () => {
        console.log('Selected Value:', selectedValue.value);
        setShowSearch(false);
        setShowQuiz(true);
        // Perform your desired action here
    };
  const handleNextClick = () => {
        console.log('Selected Value:', selectedValue.value);
        setShowQuiz(false);
        // Perform your desired action here
    };
  const selectedFilm = selectedValue ? selectedValue.label : 'No film selected';
  const selectedChemistry = selectedValue ? selectedValue.value : 'No film selected';
  const styles = {
  container: (base) => ({
    ...base,
    flex: 1
  })};
  
  return (
    <div ><div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '200px',
      justifyContent: 'center'}}>
      <img src={logo} />
      </div>
      {showQuiz ? (
      <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      justifyContent: 'center'}}>
      <Quiz  onClick={handleQuizFinish} filmType={{selectedFilm}} filmChemistry={{selectedChemistry}}/>
      </div>
      ) : (<></>)}

      {showSearch ? (
      <>

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
      </>
      ) : (<></>)}
      {showInstructions ? (
        // Show Loading Instructions here
        <Button title='Next' onPress={handleInstructionsFinish}/>
        ) : (<></>)}
    </div>
  );
}



export default App;
