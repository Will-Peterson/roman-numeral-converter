import React from 'react';
import './App.css';
import Form from './components/Form';
import Converter from './components/Converter';

const App = () => {
  return (
    <div className='container'>
      <div className='title'>
        Number to Roman Numeral Converter
      </div>
      <div className='form-container'>
        <Form />
        <Converter />
      </div>
    </div>
  );
}

export default App;
