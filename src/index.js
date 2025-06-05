import React from 'react';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './index.css';
import App from './App';
import jsonData from './filmstocks.json';
import reportWebVitals from './reportWebVitals';
import logo from './img/desktop-logo-small.png'

function Start() {
  const options = jsonData.map((option) => 
    <option key={option.process} value={option.film}>{option.film}</option>
  );
  
  return (
    <div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '200px',
      justifyContent: 'center',}}>
      <img src={logo} />
      </div>

      <div style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      justifyContent: 'center',}}>
        
      <Select options={jsonData.map((option) => ({
        value: option.label,
        label: option.film}))}/>
      
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
