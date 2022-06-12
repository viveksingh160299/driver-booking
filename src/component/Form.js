import React from 'react';
import './Login.css';
import {Login} from './Login';
import {Signup} from './Signup';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import background from './utils/background.mp4';

export function Form(){

const [values, setValues] = React.useState({
        islogin: true,
    });    

const handleIsLogin = () => {
        setValues({
          ...values,
          islogin: true,
        });
      };

const handleIsSignup = () => {
        setValues({
          ...values,
          islogin: false,
        });
      };      

    return (
        <div> 
          <video autoPlay loop muted id="myBackgroundVideo" >
             <source src={background} type="video/mp4" />
          </video>

          <div className="outer">
           <div className="wrapper">
             <div className={values.islogin?"card frosted-card text-white":"card frosted-card frosted-card-register  text-white"}>
               <div className="card-body">
                  <Grid container>
                     <Grid item xs={12}>
                     <ButtonGroup variant="text" aria-label="text button group">
                         <Button className={values.islogin?"button-color":"button-size"} onClick={handleIsLogin}>Login</Button>
                         <Button className={values.islogin?"button-size":"button-color"} onClick={handleIsSignup}>Register</Button>
                     </ButtonGroup>
                     </Grid>
                  </Grid>   

                  {values.islogin?<Login/>:<Signup/>}
               </div>
             </div>
           </div>  
         </div> 
      </div>
    );
};