import React from 'react';
import './App.css';
import Form from './components/Form';
import Converter from './components/Converter';
import { Container, Grid } from '@material-ui/core';

const App = () => {
  return (
    <div className='outer-container'>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
      <Grid item xs={3}>
      </Grid>   
        <Container maxWidth='sm'>
          <div className='title'>
            Number to Roman Numeral Converter
          </div>
          <div className='form-container'>
            <Form />
          </div>
        </Container>
      </Grid>
    </div>
  );
}

export default App;
