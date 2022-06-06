import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import './Dashboard.css';
import {useNavigate} from "react-router-dom";

export function Dashboard () {

    const [userdata, setUserData] = useState()
    const navigate = useNavigate()

    const email = localStorage.getItem("EmailId");
    const token = localStorage.getItem("AccessToken");
    console.log(email)
    console.log(token)
    
    useEffect(()=>{

        if (email == null || token == null)
        {
            console.log("either credentials or token is not found in localstorage!")
            navigate("/Form")
        }

        fetch('http://localhost:3001/dashboard',{
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
              "Authorization": 'Bearer ' + `${token}`
            }),
            body: JSON.stringify({email: email}),
          })
          .then((res) =>{
              //if res.ok is true then status-code is between 200-299
              if (!res.ok) {
                 throw new Error(res.body.error);
              }
              
              return res.json();
          })
          .then( (data) => {
              setTimeout(() => {
                setUserData(JSON.stringify(data));
              }, 3000);
    
          }).catch((err) => {
              console.log(err)
              navigate("/Form")
          });
    },[])

    return (
       <Grid container spacing={4} direction="row" justifyContent="center" alignItems="center" width="100vw" height="100vh">
        <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12} ls={6} >
                <Typography variant="caption" display="block">
                            Welcome {userdata}
                </Typography>
            </Grid>
        </Grid>
       </Grid> 
    );

}