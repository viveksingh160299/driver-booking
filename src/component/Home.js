import {React, useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MySubmitButton from './MyButtons/MySubmitbutton'
import {useNavigate} from "react-router-dom";
import './Login.css';
import { Paper } from '@mui/material';
import { animated, useSpring, config } from "react-spring";
import background_home_1 from './background_home_1.mp4';
import background_home_2 from './background_home_2.mp4';

export function Home(){

    const AnimatedPaper = animated(Paper);
    const AnimatedTypography = animated(Typography);
    const navigate = useNavigate();

    const springProps1 = useSpring({
        loop: { reverse: true },
        from: { y: '-3vh', backgroundColor: '#0cebeb' },
        to: { y: '4vh', backgroundColor: '#29ffc6' },
        config: { duration: 1500 }
      });

    const springProps2 = useSpring({
        loop: { reverse: true },
        from: { y: '-2vh', backgroundColor: '#0cebeb' },
        to: { y: '4vh', backgroundColor: '#29ffc6' },
        config: { duration: 1700 }
      });
      
    const springProps3 = useSpring({
        loop: { reverse: true },
        from: { y: '-1vh', backgroundColor: '#0cebeb' },
        to: { y: '4vh', backgroundColor: '#29ffc6' },
        config: { duration: 1900 }
      });  

    const springPropsButton = useSpring({
        loop: { reverse: true },
        from: { border: '0vmin solid', borderColor: '#0cebeb' },
        to: { border: '0.5vmin solid', borderColor: '#0cebeb' },
        config: { duration: 500 }
      });  

    const springPropsTypography = useSpring({
        loop: { reverse: true },
        from: {color: '#ADD100' },
        to: { color: '#12FFF7' },
        config: { duration: 2000 }
      }); 

    const springPropsTypography1 = useSpring({
        from: { y: '-30vh', opacity: 0 },
        to: { y: '0vh', opacity: 1 },
        config: { duration: 1000 }
      });   

    const springPropsTypography2 = useSpring({
        from: { y: '30vh', opacity: 0 },
        to: { y: '0vh', opacity: 1 },
        config: { duration: 1000 }
      });  

    const springPropsVideo = useSpring({
        from: { x: '30vh', opacity: 0 },
        to: { x: '0vh', opacity: 1 },
        config: { duration: 1000 }
      });

    const springPropsMain = useSpring({
        loop: { reverse: true },
        from: { x: '-0.2vw' },
        to: { x: '2vw' },
      }); 

    const springPropsGridBottomBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'-50vw' },
        to: { width: '50vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 0,
      });   

      
    const springPropsGridRightBorder = useSpring({
        from: { height: '0vh',marginBottom:'-82vh' },
        to: { height: '81vh',marginBottom:'-1vh' },
        config:{
            duration: 1000
        },
        delay: 1000,
      });

    const springPropsGridTopBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'50vw' },
        to: { width: '50vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 2000,
      }); 

      const springPropsGridLeftBorder = useSpring({
        from: { height: '0vh',marginBottom:'80vh' },
        to: { height: '81vh',marginBottom:'-1vh' },
        config:{
            duration: 1000
        },
        delay: 3000,
      });

      const NavigateToLogin = () => {
        navigate("/Form");
      }

      const NavigateToDashboard = () => {
        navigate("/Dashboard");
      }

    return (
        <Grid container direction="row" width="100vw" height="100vh" className='home-container'>
            <Grid container  direction="row" justifyContent="center" alignItems="center" xs={12}  className='home-login-button'>
                <Paper elevation={24} className='nav-bar-paper'>
                    <Grid container  direction="row" justifyContent="flex-end" alignItems="center" xs={12}  className='home-paper-login-botton'>
                        <Grid onClick={NavigateToLogin}  container item xs={2}  justifyContent="center" alignItems="center" > 
                            <animated.div style={springPropsButton}><MySubmitButton name="Login / Signup" /></animated.div>
                        </Grid>
                        <Grid onClick={NavigateToDashboard} container item xs={2}  justifyContent="center" alignItems="center">
                            <animated.div style={springPropsButton}><MySubmitButton name="Dashboard"/></animated.div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" xs={12} className='home-main-body' >
                <AnimatedPaper elevation={24} style={springProps1} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps2} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps3} className='home-side-bars-paper' />
           
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'white',width:'0.5vh',...springPropsGridLeftBorder,...springPropsMain}}></AnimatedPaper>
                <AnimatedPaper style={springPropsMain} elevation={24} className='home-main-body-paper'>
                    
                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedPaper style={{borderRadius:'0',backgroundColor:'white',height:'0.5vh',...springPropsGridTopBorder}}></AnimatedPaper>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-body-paper'>                        
                        <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedTypography style={{...springPropsTypography1, ...springPropsTypography}} className='home-main-typography'>
                                 BOOK YOUR DRIVER 
                            </AnimatedTypography>
                            <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography}} className='home-main-typography'>
                                 IN FEW CLICKS
                            </AnimatedTypography>
                        </Grid>
                    </Grid>

                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedPaper style={{borderRadius:'0',backgroundColor:'white',height:'0.5vh',...springPropsGridBottomBorder}}></AnimatedPaper>
                    </Grid>
                </AnimatedPaper>
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'white',width:'0.5vh',...springPropsGridRightBorder,...springPropsMain}}></AnimatedPaper>
            
                
                <Grid container direction="row" justifyContent="center" alignItems="center" style={{width:'40vw',height:'80vh', marginLeft: '3vw'}}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" style={{width:'40vw',height:'38vh', marginTop: '0.5vw', marginBottom: '1.5vw'}}>
                        <Grid item container direction="row" justifyContent="center" alignItems="center" style={{width:'40vw',height:'38vh'}}>
                            <animated.video autoPlay loop muted style={{width:'40vw',height:'38vh',objectFit: 'fill',borderRadius: '2vmin', border:'1.2vmin solid',...springPropsVideo}}>
                                <source src={background_home_1} type="video/mp4" />
                            </animated.video>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center" style={{width:'40vw',height:'38vh', marginTop: '0vw', marginBottom: '2vw'}}>
                        <Grid item container direction="row" justifyContent="center" alignItems="center" style={{width:'40vw',height:'38vh'}}>
                            <animated.video autoPlay loop muted style={{width:'40vw',height:'38vh',objectFit: 'fill',borderRadius: '2vmin',border:'1.2vmin solid',...springPropsVideo}}>
                                <source src={background_home_2} type="video/mp4" />
                            </animated.video>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );

}