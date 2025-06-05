import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './index.css';
import App from './App';
import Quiz from './quiz';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Quiz />
  </React.StrictMode>
);
