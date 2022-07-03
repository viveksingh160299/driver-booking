import React from 'react';
import './Style.css';
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
                     <Grid container item direction="row" justifyContent="center" alignItems="center" xs={12}>
                     <ButtonGroup variant="text" aria-label="text button group" className='button-group'>
                        <Grid container  direction="row" justifyContent="center" alignItems="center" xs={12} sm={12} md={12} lg={12}>
                          <Grid onClick={handleIsLogin} item container justifyContent="center" alignItems="center" className={values.islogin?"button-group-item":""} xs={6} sm={6} md={6} lg={6}>
                            <Button className={values.islogin?"button-color":"button-size"} >Login</Button>
                          </Grid>
                          <Grid onClick={handleIsSignup} item container justifyContent="center" alignItems="center" className={values.islogin?"":"button-group-item"} xs={6} sm={6} md={6} lg={6}>
                            <Button className={values.islogin?"button-size":"button-color"} >Register</Button>
                          </Grid>
                        </Grid>
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