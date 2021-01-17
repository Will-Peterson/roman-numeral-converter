import React, { useState } from "react";
import "./App.css";
import { Container, Grid, Input, FormControl, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  containerStyle: {
    backgroundColor: "honeydew",
    borderRadius: "1rem",
  },
  inputStyle: {
    fontSize: "3rem",
    maxLength: "10"
  }
}));

const App = () => {
  const [values, setValues] = useState({
    number: "",
    romanNumeral: "",
  });
  
  const classes = useStyles();
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const converter = (x) => {
    let num = parseInt(x);
    let romanToNum = {
      M\u033F:        1000000000,
      C\u033FM\u033F: 900000000,
      D\u033F:        500000000,
      C\u033FD\u033F: 400000000,
      C\u033F:        100000000,
      X\u033FC\u033F: 90000000,
      L\u033F:        50000000,
      X\u033FL\u033F: 40000000,
      X\u033F:        10000000,
      I\u033FX\u033F: 9000000,
      V\u033F:        5000000,
      I\u033FV\u033F: 4000000,
      M\u0305:        1000000, //   \u0305 one line
      C\u0305M\u0305: 900000,       //   \u033F two lines
      D\u0305:        500000,
      C\u0305D\u0305: 400000,
      C\u0305:        100000,
      X\u0305C\u0305: 90000,
      L\u0305:        50000,
      X\u0305L\u0305: 40000,
      X\u0305:        10000,
      I\u0305X\u0305: 9000,
      V\u0305:        5000,
      I\u0305V\u0305: 4000,
      M:              1000,
      CM:             900,
      D:              500,
      CD:             400,
      C:              100,
      XC:             90,
      L:              50,
      XL:             40,
      X:              10,
      IX:             9,
      V:              5,
      IV:             4,
      I:               1,
    };
    
    let romanNumeral = "";
    
    for (let key in romanToNum) {
      while (num >= romanToNum[key]) {
        romanNumeral += key;
        num -= romanToNum[key];
      }
    }
    return romanNumeral;
  };
  
  const inputProps ={
    max: 3999999999,
  }
  
  
  return (
    <Grid
    container
    direction="column"
    justify="center"
    style={{ minHeight: "100vh" }}
    align="center"
    >
      <Grid item xs={12} />
      <Container style={{minWidth: "1200px"}} className={classes.containerStyle}>
        <Typography variant='h2'>Number to Roman Numeral Converter</Typography>
        <FormControl>
          <Box m={5}>
            <Input
              className={classes.inputStyle}
              fullWidth
              type="number"
              value={values.number}
              name="number"
              onChange={handleChange}
              placeholder="25"
              autoFocus
              inputProps={inputProps}
              style={{width:'350px'}}
              />
          </Box>
          <Box m={5}>
            <Input
              style={{width:'1050px'}}
              className={classes.inputStyle}
              value={converter(values.number)}
              placeholder="XXL"
              disabled
              />
          </Box>
        </FormControl>
      </Container>
    </Grid>
  );
};

export default App;

/*
  TODO
  => tell user what to do / how many characters / which characters to use
  => put limit on input box
  => user input validation

  COMPLETED
  => add increase/decrease arrow
  => add extra numbers up to million
  => center inputs
*/