import React from 'react';
import './Login.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


export function Login(){

  
const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    submit:true,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const handleSubmit = () => {
  setValues({
    ...values,
    submit: !values.submit,
  });
};

const inputProps = {
  marginTop: "3vh",
};
  


      return (
       <div className="container">

              <Grid container spacing={4} className="frosted-container">
                  
                  <Grid item xs={9}>
                     <TextField
                      label="Email"
                      id="outlined-start-adornment"
                      onChange={handleChange('email')}
                      fullWidth
                      className="frosted-item"
                      variant="outlined"
                     />
                  </Grid>
                 
                  <Grid item xs={9}>
                     <FormControl  variant="outlined" fullWidth className="frosted-item">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowPassword}
                           onMouseDown={handleMouseDownPassword}
                           edge="end"
                           >
                           {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        }
                        label="Password"

                        />
                     </FormControl>
                  </Grid>
                
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                      <Typography variant="caption" display="block" className="Forgot">
                           Forgot Password?
                      </Typography>
                  </Grid>

                  <Grid item xs={3} />
                  <Grid alignItems="center" justifyContent="center" container xs={6} style={inputProps}>
                  <Grid item xs={12} onClick={handleSubmit}>
                       {values.submit ? <MyLoginButton /> : <MyLoadButton />}
                  </Grid>
                  </Grid>
                  <Grid item xs={3} />

              </Grid>
        </div>
           
      );
};


function MyLoginButton(){
     
     return (
              <Button variant="contained"  className="Login-button" fullWidth style={{textTransform: 'none'}}>
                        Login
              </Button>
     ); 
};

function MyLoadButton(){
     
  return (
           <LoadingButton variant="contained"  className="Login-button" fullWidth loading />
  ); 
};