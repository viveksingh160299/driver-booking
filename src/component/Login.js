import React, { useEffect } from 'react';
import './Style.css';
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
import {useNavigate} from "react-router-dom";


export function Login(){

const navigate = useNavigate();

const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
    submit:true,
    InvalidEmail: false,
    InvalidPassword: false,
    ServerError: false,
    ServerErrorValue: '',
});

useEffect(()=>{
  

  console.log("Inside effect")
  console.log(values.submit)
  console.log('servererror')
  console.log(values.ServerError)
},[values.submit,values.ServerError])

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

async function handleSubmit(e) {

  let regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  
  values.email = values.email.replace(/\s/g, "");

  if(!regex.test(values.email))
  {
    
      setValues({
      ...values,
      InvalidEmail: true,
      InvalidPassword: false,
      ServerError: false,
      });
  }

  else if(values.password.length<8)
  {
      setValues({
      ...values,
      InvalidPassword: true,
      InvalidEmail: false,
      ServerError: false,
      });
  }
  
  //Call get post request here
  else{
      setValues({
      ...values,
      submit: !values.submit,
      InvalidEmail: false,
      InvalidPassword: false,
      ServerError: false,
      })
      
      console.log("out catch")
      console.log(values.submit)

      const credentials = {email: values.email, password: values.password}

      fetch('http://localhost:3001/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials),
      })
      .then((res) =>{
          if (!res.ok) {
             throw new Error(res.body.error);
          }
          
          return res.json();
      })
      .then( (data) => {
          setTimeout(() => {
              console.log('Inside Login : token')
              console.log(data.accessToken)
              localStorage.setItem("AccessToken", data.accessToken);
              localStorage.setItem("EmailId", values.email);
              navigate("/Dashboard")
              
          }, 4000);

      }).catch((err) => {
        console.log('servererror')
        console.log(values.ServerError)
        console.log(err)
        
        setValues({
          ...values,
          ServerError: true,
          ServerErrorValue: `${err}`,
          })
    
      });
   };
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
                      label="Email"
                      id="outlined-start-adornment"
                      onChange={handleChange('email')}
                      fullWidth
                      className="frosted-item"
                      variant="outlined"
                      required
                      inputProps={{
                        style:{
                          height: "45px",
                          backgroundColor: "#ffffff",
                          borderRadius: '5px',
                        }
                      }}
                     />
                  </Grid>
                 
                  <Grid item xs={12} lg={9}>
                     <FormControl size="small" variant="outlined" fullWidth className="frosted-item" required>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                        
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        inputProps={{
                          style:{
                            height: "45px",
                            backgroundColor: "#ffffff",
                            borderRadius: '5px',
                          }
                        }}

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

                  {values.InvalidEmail || values.InvalidPassword  ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmail">
                             Please enter valid Email Address and Password!
                          </Typography> 
                        </Grid>
                      </Grid>:""}  

                  {values.ServerError  ? 
                      <Grid container>
                        <Grid item xs={2} /> 
                        <Grid item xs={10}>
                          <Typography variant="caption" display="block" className="InvalidEmail">
                             {values.ServerErrorValue}
                          </Typography> 
                        </Grid>
                      </Grid>:""}    
                
                  <Grid item xs={6} />
                  <Grid item xs={6}>
                      <Typography variant="caption" display="block" className="Forgot">
                           Forgot Password?
                      </Typography>
                  </Grid>
                  
                  <Grid item xs={12} />
                
                  <Grid item xs={3} />
                  <Grid alignItems="center" justifyContent="center" container xs={6} style={inputProps}>
                  <Grid item xs={12} onClick={handleSubmit}>
                       {values.submit ? <MyLoginButton values={values}/> : <MyLoadButton />}
                  </Grid>
                  </Grid>
                  <Grid item xs={3} />


              </Grid>
          
        </div>
           
      );
};


function MyLoginButton(props){
     
     return (
              <Button variant="contained" className={props.values.InvalidEmail || props.values.InvalidPassword?"Login-button-Invalid Login-button":"Login-button"} fullWidth style={{textTransform: 'none'}}>
                        Login
              </Button>
     ); 
};

function MyLoadButton(){
     
  return (
           <LoadingButton variant="contained"  className="Login-button" fullWidth loading />
  ); 
};