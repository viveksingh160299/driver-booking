import { Grid } from '@mui/material';
import './otp.css';
import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { TextField } from '@mui/material';
import MySubmitButton from './MyButtons/MySubmitbutton'
import { Typography } from '@mui/material';

export function OtpVerification () {

    const [values, setValues] = useState({
        otpValue1: '',
        otpValue2: '',
        otpValue3: '',
        otpValue4: '',
        otpValue5: '',
        otpValue6: '',
    })

    const [autofocus,setFocus] = useState(1)

    const focusMethod = () => {
        document.getElementById("filled-required").focus();
    }

    const handleChange = (prop) => (event) => {
            
            if(event.target.value.length != 0){
                document.getElementById("filled-required").value=event.target.value[event.target.value.length-1];  
                
                if (prop == 'otpValue1')
                    setFocus( 2 );
            
                else if (prop == 'otpValue2')
                    setFocus( 3 );
        
                else if (prop == 'otpValue3')
                    setFocus( 4 ); 
            
                else if (prop == 'otpValue4')
                    setFocus( 5 ); 
            
                else if (prop == 'otpValue5')
                    setFocus( 6 );
        
                else
                    setFocus( 1 );
            }
               
            else{
                

                if (prop == 'otpValue1'){
                    setFocus( 1 );
                    document.getElementsByClassName("otpValue1").value=''
                }           
                else if (prop == 'otpValue2'){
                    setFocus( 2 );
                    document.getElementsByClassName("otpValue2").value=''
                }
        
                else if (prop == 'otpValue3'){
                    setFocus( 3 );
                    document.getElementsByClassName("otpValue3").value=''
                } 
            
                else if (prop == 'otpValue4'){
                    setFocus( 4 );
                    document.getElementsByClassName("otpValue4").value=''
                } 
            
                else if (prop == 'otpValue5'){
                    setFocus( 5 );
                    document.getElementsByClassName("otpValue5").value=''
                }
        
                else{
                    setFocus( 6 );
                    document.getElementsByClassName("otpValue6").value=''
                }
            }
            
              
            setValues({ ...values, [prop]: event.target.value}); 
      };

      async function HandleResend(e) {
          try{

            const credentials = {mobile_number: location.state.mobile_number}

            fetch('http://localhost:3001/otp',{
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
                    console.log('token')
                    console.log(data.otp_token)
                    localStorage.setItem("otp_token", data.otp_token);
                }, 4000);

                setFocus( 1 );
                setValues({
                    ...values,
                    otpValue1: '',
                    otpValue2: '',
                    otpValue3: '',
                    otpValue4: '',
                    otpValue5: '',
                    otpValue6: '',
                    })
      
            }).catch((err) => {
              console.log('servererror')
              alert(`Some Error occurred ${err}`);
              navigate('/Form');
            });

          }catch(err){
            alert(`Some Error occurred ${err}`);
            navigate('/Form');
          }
      }




      useEffect(()=>{
        focusMethod()
      },[autofocus])

      const location = useLocation();
      const navigate = useNavigate();



      async function handleSubmit(e) {
 
        try{
          const otp = values.otpValue1 + values.otpValue2 + values.otpValue3 + values.otpValue4 + values.otpValue5 + values.otpValue6 ; 

          const credentials = {name: location.state.name, mobile_number: location.state.mobile_number, email: location.state.email, password: location.state.password, otp: otp}

          console.log(credentials)
          const otp_token = localStorage.getItem("otp_token");

          fetch('http://localhost:3001/register',{
           method: "POST",
           headers: new Headers({
               "Content-Type": "application/json",
               "Authorization": 'Bearer ' + `${otp_token}`
           }),
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

              console.log('token')
              console.log(data.accessToken)
              localStorage.setItem("AccessToken", data.accessToken);
              localStorage.setItem("EmailId", location.state.email);
              localStorage.clear("otp_token");
              navigate("/Dashboard")

           }, 4000);

          }).catch((err) => {
            localStorage.clear("otp_token");
            console.log(err)
            alert(`Some Error occurred ${err}`);
            navigate('/Form');
          });

        }catch(err){
            localStorage.clear("otp_token");
            alert(`Some Error occurred ${err}`);
            navigate('/Form');
        }

      }



    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" width="100vw" height="100vh" className='otp-container'>
         
         <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} >
             <Grid item xs={3}/>
                <Grid item xs={6}>
                    <Typography variant="caption" display="block" textAlign={'center'} fontSize="20px">
                        OTP has been successfully sent to Mobile. Please enter the same OTP below.
                    </Typography> 
                </Grid>
             <Grid item xs={3} />
         </Grid>
         
         <Grid container direction="row" justifyContent="center" alignItems="center" className="otp" xs={12} md={8} ls={6}>
             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==1 ? "filled-required":""}
                onChange={handleChange('otpValue1')}
                defaultValue=""
                variant="filled"
                className='otpValue1'
                />
             </Grid>
             

             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==2 ? "filled-required":""}
                onChange={handleChange('otpValue2')}
                defaultValue=""
                variant="filled"
                className='otpValue2'
                />
             </Grid>
             

             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==3 ? "filled-required":""}
                onChange={handleChange('otpValue3')}
                defaultValue=""
                variant="filled"
                className='otpValue3'
                />
             </Grid>
             

             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==4 ? "filled-required":""}
                onChange={handleChange('otpValue4')}
                defaultValue=""
                variant="filled"
                className='otpValue4'
                />
             </Grid>
             

             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==5 ? "filled-required":""}
                onChange={handleChange('otpValue5')}
                defaultValue=""
                variant="filled"
                className='otpValue5'
                />
             </Grid>
             

             <Grid item xs={1} className="otp-item">
                <TextField
                required
                id = { autofocus==6 ? "filled-required":""}
                onChange={handleChange('otpValue6')}
                defaultValue=""
                variant="filled"
                className='otpValue6'
                />
             </Grid>

         </Grid>

         <Grid container direction="row" justifyContent="center" alignItems="center" className="otp-button-container" xs={12} md={8} ls={6}>
             <Grid item xs={3} />
             <Grid item xs={2} onClick={HandleResend}>
                <MySubmitButton name="Resend" />   
             </Grid>
             <Grid item xs={2} />
             <Grid item xs={2} onClick={handleSubmit}>
                <MySubmitButton name="Submit" />   
             </Grid>
             <Grid item xs={3} />
         </Grid>
        </Grid> 
     );

}