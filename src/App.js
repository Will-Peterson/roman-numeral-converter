import React from 'react';
import './App.css';
import Form from './components/Form';
import Converter from './components/Converter';
import { Container } from '@material-ui/core';

const App = () => {



  return (
    <div className='outer-container'>
      <Container maxWidth='sm'>
        <div className='title'>
          Number to Roman Numeral Converter
        </div>
        <div className='form-container'>
          <Form />
        </div>
        <div>
          {}
        </div>
      </Container>
    </div>
  );
}

export default App;
