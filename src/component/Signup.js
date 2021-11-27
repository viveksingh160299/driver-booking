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
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


export function Signup(){

  
const [values, setValues] = React.useState({
    email: '',
    newpassword: '',
    showNewPassword: false,
    submit: true,
    reenterpassword: '',
    showReEnterNewPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowNewPassword = () => {
  setValues({
    ...values,
    showNewPassword: !values.showNewPassword,
  });
};

const handleMouseDownNewPassword = (event) => {
  event.preventDefault();
};

const handleClickShowReEnterNewPassword = () => {
    setValues({
      ...values,
      showReEnterNewPassword: !values.showReEnterNewPassword,
    });
  };
  
  const handleMouseDownReEnterNewPassword = (event) => {
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
                        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showNewPassword ? 'text' : 'password'}
                        value={values.newpassword}
                        onChange={handleChange('newpassword')}
                        endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowNewPassword}
                           onMouseDown={handleMouseDownNewPassword}
                           edge="end"
                           >
                           {values.showNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        }
                        label="New Password"

                        />
                     </FormControl>
                  </Grid>
                   

                  <Grid item xs={9}>
                     <FormControl  variant="outlined" fullWidth className="frosted-item">
                        <InputLabel htmlFor="outlined-adornment-password">Re-Enter New Password</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showReEnterNewPassword ? 'text' : 'password'}
                        value={values.reenterpassword}
                        onChange={handleChange('reenterpassword')}
                        endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                           aria-label="toggle password visibility"
                           onClick={handleClickShowReEnterNewPassword}
                           onMouseDown={handleMouseDownReEnterNewPassword}
                           edge="end"
                           >
                           {values.showReEnterNewPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                        }
                        label="Re-Enter New Password"

                        />
                     </FormControl>
                  </Grid> 
                  <Grid item xs={3} />

                  <Grid item xs={3} />
                  <Grid alignItems="center" justifyContent="center" container xs={6} style={inputProps}>
                  <Grid item xs={12} onClick={handleSubmit}>
                       {values.submit ? <MySignupButton /> : <MyLoadButton />}
                  </Grid>
                  </Grid>
                  <Grid item xs={3} />

              </Grid>
           </div>  
      );
};


function MySignupButton(){
     
     return (
              <Button variant="contained"  className="Login-button" fullWidth style={{textTransform: 'none'}}>
                        Register
              </Button>
     ); 
};

function MyLoadButton(){
     
  return (
           <LoadingButton variant="contained"  className="Login-button" fullWidth loading />
  ); 
};