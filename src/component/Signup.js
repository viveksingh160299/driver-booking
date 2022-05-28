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
import { Typography } from '@mui/material';


export function Signup(){

  
const [values, setValues] = React.useState({
    name: '',
    mob_number: '',
    email: '',
    newpassword: '',
    showNewPassword: false,
    submit: true,
    reenterpassword: '',
    showReEnterNewPassword: false,
    InvalidName: false,
    InvalidMobNumber: false,
    InvalidEmail: false,
    InvalidPassword: false,
    IsPasswordEqual:true,
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
  let regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  let regex_name = new RegExp(/^[a-z0-9]+$/i); 

  values.email = values.email.replace(/\s/g, "");

  if(!regex_name.test(values.name) || values.name.length<2)
  {
      setValues({
      ...values,
      InvalidName: true,
      InvalidMobNumber: false,
      InvalidEmail: false,
      InvalidPassword: false,
      IsPasswordEqual:true,
      });
  }

  else if(values.mob_number.length<10 || values.mob_number.length>15)
  {
      setValues({
      ...values,
      InvalidMobNumber: true,
      InvalidName: false,
      InvalidEmail: false,
      InvalidPassword: false,
      IsPasswordEqual:true,
      });
  }


  else if(!regex.test(values.email))
  {
      setValues({
      ...values,
      InvalidEmail: true,
      InvalidMobNumber: false,
      InvalidName: false,
      InvalidPassword: false,
      IsPasswordEqual:true,
      });
  }

  else if(values.newpassword.length<8)
  {
      setValues({
      ...values,
      InvalidPassword: true,
      InvalidMobNumber: false,
      InvalidName: false,
      InvalidEmail: false,
      IsPasswordEqual:true,
      });
  }

  else if(values.newpassword.localeCompare(values.reenterpassword) !==0)
  {
      setValues({
      ...values,
      IsPasswordEqual:false,
      InvalidMobNumber: false,
      InvalidName: false,
      InvalidEmail: false,
      InvalidPassword: false,
      });
  }
  
  //Call get post request here
  else{
      setValues({
      ...values,
      submit: !values.submit,
      InvalidName: false,
      InvalidMobNumber: false,
      InvalidEmail: false,
      InvalidPassword: false,
      IsPasswordEqual:true,
      });
   }
};

const inputProps = {
  marginTop: "3vh",
};
  


      return (
       <div className="container"> 
        

              <Grid container spacing={4} className="frosted-container">
                  
              <Grid item xs={12} lg={9}>
                  <TextField
                      size="small"
                      label="Full Name"
                      id="outlined-start-adornment"
                      onChange={handleChange('name')}
                      fullWidth
                      className="frosted-item"
                      variant="outlined"
                      required
                      inputProps={{
                        style:{
                          height: "45px"
                        }
                      }}
                     />
                  </Grid>

                  <Grid item xs={12} lg={9}>
                  <TextField
                      size="small"
                      label="Mobile Number"
                      type="number"
                      id="outlined-start-adornment"
                      onChange={handleChange('mob_number')}
                      fullWidth
                      className="frosted-item"
                      variant="outlined"
                      required
                      inputProps={{
                        style:{
                          height: "45px"
                        }
                      }}
                     />
                  </Grid>

                  <Grid item xs={12} lg={9}>
                     <TextField
                      size="small"
                      label="Email"
                      id="outlined-start-adornment"
                      onChange={handleChange('email')}
                      fullWidth
                      className="frosted-item"
                      variant="outlined"
                      inputProps={{
                        style:{
                          height: "45px"
                        }
                      }}
                      required
                     />
                  </Grid>
                 
                  <Grid item xs={12} lg={9}>
                     <FormControl  variant="outlined" fullWidth className="frosted-item" size="small" required>
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
                        inputProps={{
                          style:{
                            height: "45px"
                          }
                        }}
                        />
                     </FormControl>
                  </Grid>
                   

                  <Grid item xs={12} lg={9}>
                     <FormControl  variant="outlined" fullWidth className="frosted-item" size="small" required>
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                        inputProps={{
                          style:{
                            height: "45px"
                          }
                        }}
                        />
                     </FormControl>
                  </Grid> 

                  <Grid item ls={3} className='leftreg'/>

                  {values.InvalidName ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmailRegister">
                             Please enter valid Name!
                          </Typography> 
                        </Grid>
                      </Grid>:""}

                  {values.InvalidMobNumber ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmailRegister">
                             Please enter valid Mobile Number!
                          </Typography> 
                        </Grid>
                  </Grid>:""}    

                  {values.InvalidEmail || values.InvalidPassword ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmailRegister">
                             Please enter valid Email Address and Password!
                          </Typography> 
                        </Grid>
                      </Grid>:""}  

                  {!values.IsPasswordEqual ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmailRegister">
                             New Password and Confirm Password is not same!
                          </Typography> 
                        </Grid>
                      </Grid>:""}      

                  

                  <Grid item xs={3} />
                  <Grid alignItems="center" justifyContent="center" container xs={6} style={inputProps}>
                  <Grid item xs={12} onClick={handleSubmit}>
                       {values.submit ? <MySignupButton values={values} /> : <MyLoadButton />}
                  </Grid>
                  </Grid>
                  <Grid item xs={3} />

              </Grid>
           </div>  
      );
};


function MySignupButton(props){
     
     return (
              <Button variant="contained"  className={props.values.InvalidMobNumber || props.values.InvalidName || !props.values.IsPasswordEqual || props.values.InvalidEmail || props.values.InvalidPassword?"Login-button-Invalid Login-button ":"Login-button"} fullWidth style={{textTransform: 'none'}}>
                        Register
              </Button>
     ); 
};

function MyLoadButton(){
     
  return (
           <LoadingButton variant="contained"  className="Login-button" fullWidth loading />
  ); 
};