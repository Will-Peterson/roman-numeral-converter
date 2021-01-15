import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: '0 auto',
    },
    margin: {
    margin: theme.spacing(1),
    },
    withoutLabel: {
    marginTop: theme.spacing(3),
    },
    textField: {
    width: '25ch',
    },
}));

export default function Form() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
    number: '25',
    romanNumberal: 'XXV'
    });

    const handleNumberToRomanNumeral = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleRomanNumeralToNumber = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    return (
    <div className={classes.root}> 
        <div>      
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Number</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.number}
                    onChange={handleNumberToRomanNumeral('amount')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
        
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Roman Numeral</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.romanNumberal}
                    onChange={handleRomanNumeralToNumber('amount')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
        </div>
    </div>
    );
}