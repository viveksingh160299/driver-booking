import {React, useState} from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MySubmitButton from './MyButtons/MySubmitbutton'
import {useNavigate} from "react-router-dom";
import './Style.css';
import { Paper } from '@mui/material';
import { animated, useSpring } from "react-spring";
import background_home_1 from './utils/background_home_1.mp4';
import background_home_2 from './utils/background_home_2.mp4';

export function Home(){

    const AnimatedPaper = animated(Paper);
    const AnimatedTypography = animated(Typography);
    const navigate = useNavigate();

    const [revealelement1, setRevealElement1] = useState(0);
    const [revealelement2, setRevealElement2] = useState(0);
    const [revealelement3, setRevealElement3] = useState(0);
    const [revealelement4, setRevealElement4] = useState(0);

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

    const springPropsTypography = useSpring({
        loop: { reverse: true },
        from: {color: '#ffffff' },
        to: { color: '#0cebeb' },
        config: { duration: 2000 }
      }); 

    const springPropsTypography1 = useSpring({
        from: { y: '-15vh', opacity: 0 },
        to: { y: '0vh', opacity: 1 },
        config: { duration: 1000 }
      });   

    const springPropsTypography2 = useSpring({
        from: { y: '15vh', opacity: 0 },
        to: { y: '0vh', opacity: 1 },
        config: { duration: 1000 }
      });  

      const springPropsTypography3 = useSpring({
        loop: { reverse: true },
        from: {color: '#000000' },
        to: { color: '#333333' },
        config: { duration: 2000 }
      });   

    const springPropsVideo1_1 = useSpring({
        opacity: revealelement1 ? 1 : 0,
        y: revealelement1 ? '0vh' : '13vh',
        config: { duration: 300 }
      });

    const springPropsVideo2_1 = useSpring({
        opacity: revealelement2 ? 1 : 0,
        y: revealelement2 ? '0vh' : '13vh',
        config: { duration: 300 }
      });  

      const springPropsVideo1_2 = useSpring({
        opacity: revealelement3 ? 1 : 0,
        y: revealelement3 ? '0vh' : '13vh',
        config: { duration: 300 }
      });

    const springPropsVideo2_2 = useSpring({
        opacity: revealelement4 ? 1 : 0,
        y: revealelement4 ? '0vh' : '13vh',
        config: { duration: 300 }
      });   

    const springPropsGridBottomBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'-70vw' },
        to: { width: '70vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 0,
      });   

      
    const springPropsGridRightBorder = useSpring({
        from: { height: '0vh',marginBottom:'-42vh' },
        to: { height: '41vh',marginBottom:'-1vh' },
        config:{
            duration: 1000
        },
        delay: 1000,
      });

    const springPropsGridTopBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'70vw' },
        to: { width: '70vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 2000,
      }); 

      const springPropsGridLeftBorder = useSpring({
        from: { height: '0vh',marginBottom:'40vh' },
        to: { height: '41vh',marginBottom:'-1vh' },
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


    const springPropsGridNavigationBottomBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'-95vw' },
        to: { width: '95vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 0,
      });   

      
    const springPropsGridNavigationRightBorder = useSpring({
        from: { height: '0vh',marginBottom:'-16.5vh' },
        to: { height: '16vh',marginBottom:'-0.5vh' },
        config:{
            duration: 1000
        },
        delay: 1000,
      });

    const springPropsGridNavigationTopBorder = useSpring({
        
        from: { width: '0vw',marginLeft:'95vw' },
        to: { width: '95vw',marginLeft:'0vw' },
        config:{
            duration: 1000
        },
        delay: 2000,
      }); 

    const springPropsGridNavigationLeftBorder = useSpring({
        from: { height: '0vh',marginBottom:'15.5vh' },
        to: { height: '16vh',marginBottom:'-0.5vh' },
        config:{
            duration: 1000
        },
        delay: 3000,
      });


    const reveal = () => {

        var reveals1 = document.querySelectorAll(".reveal1");
        var reveals2 = document.querySelectorAll(".reveal2");
        var reveals3 = document.querySelectorAll(".reveal3");
        var reveals4 = document.querySelectorAll(".reveal4");
        var windowHeight = window.innerHeight;
          
        var elementTop = reveals1[0].getBoundingClientRect().top;
      
        if ( (elementTop/windowHeight) <= 0.7) {
            if( revealelement1 == 0){
              setRevealElement1(1);
            }
        } else {
            if( revealelement1 == 1){
              setRevealElement1(0);
            }
        }

        
        var elementTop = reveals2[0].getBoundingClientRect().top;
      
        if ( (elementTop/windowHeight) <= 0.7) {
            if( revealelement2 == 0){
              setRevealElement2(1);
            }
        } else {
            if( revealelement2 == 1){
              setRevealElement2(0);
            }
        }

        var elementTop = reveals3[0].getBoundingClientRect().top;
      
        if ( (elementTop/windowHeight) <= 0.7) {
            if( revealelement3 == 0){
              setRevealElement3(1);
            }
        } else {
            if( revealelement3 == 1){
              setRevealElement3(0);
            }
        }

        var elementTop = reveals4[0].getBoundingClientRect().top;
      
        if ( (elementTop/windowHeight) <= 0.7) {
            if( revealelement4 == 0){
              setRevealElement4(1);
            }
        } else {
            if( revealelement4 == 1){
              setRevealElement4(0);
            }
        }

      }

    window.addEventListener("scroll", reveal);  

    return (

      <Grid container direction="row" justifyContent="center" alignItems="center" >
        <Grid container item direction="row" className='home-container background-image'>


            <Grid container  direction="row" justifyContent="center" alignItems="center" xs={12}  className='home-login-button'>
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',width:'0.5vh',...springPropsGridNavigationLeftBorder}}></AnimatedPaper>
                <Paper elevation={24} className='nav-bar-paper'>
                   
                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                        <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',height:'0.5vh',...springPropsGridNavigationTopBorder}}></AnimatedPaper>
                    </Grid>
                   
                    <Grid container  direction="column" justifyContent="center" alignItems="center"  className='home-paper-login-botton'>
                        
                        <Grid item container direction="row" justifyContent="center" alignItems="center" className='driver-icon' />
                        <Grid item container direction="row" justifyContent="center" alignItems="center" className='booking-icon' />
                        
                        <Grid onClick={NavigateToLogin} className='home-paper-login-botton-grid'  container item  justifyContent="center" alignItems="center" > 
                            <MySubmitButton name="Login / Signup" />
                        </Grid>

                        <Grid className='nav-button-separator' container item style={{width:'0.2vw', height:'5.5vh', backgroundColor: 'white'}}  justifyContent="center" alignItems="center"></Grid>

                        <Grid onClick={NavigateToDashboard} className='home-paper-login-botton-grid' container item justifyContent="center" alignItems="center">
                            <MySubmitButton name="Dashboard"/>
                        </Grid>

                    </Grid>

                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',height:'0.5vh',...springPropsGridNavigationBottomBorder}}></AnimatedPaper>
                    </Grid>

                </Paper>
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',width:'0.5vh',...springPropsGridNavigationRightBorder,}}></AnimatedPaper>
            </Grid>





            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" xs={12} className='home-main-body' >
                <AnimatedPaper elevation={24} style={{marginLeft: '6vw', ...springProps1}} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps2} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps3} className='home-side-bars-paper' />
           
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',width:'0.5vh',...springPropsGridLeftBorder}}></AnimatedPaper>
                <AnimatedPaper elevation={24} className='home-main-body-paper'>
                    
                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',height:'0.5vh',...springPropsGridTopBorder}}></AnimatedPaper>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-body-paper'>                        
                        <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedTypography style={{...springPropsTypography1, ...springPropsTypography}} className='home-main-typography'>
                                Book Your Driver
                            </AnimatedTypography>
                            <AnimatedTypography className='home-main-typography'>
                                &nbsp;
                            </AnimatedTypography>
                            <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography}} className='home-main-typography'>
                                In Few Clicks
                            </AnimatedTypography>
                        </Grid>
                    </Grid>

                    <Grid item container direction="row" justifyContent="center" alignItems="center">
                            <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',height:'0.5vh',...springPropsGridBottomBorder}}></AnimatedPaper>
                    </Grid>
                </AnimatedPaper>
                <AnimatedPaper style={{borderRadius:'0',backgroundColor:'#1b1e23',width:'0.5vh',...springPropsGridRightBorder}}></AnimatedPaper>
            
                <AnimatedPaper elevation={24} style={{marginLeft: '3.9vw', ...springProps1}} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps2} className='home-side-bars-paper' />
                <AnimatedPaper elevation={24} style={springProps3} className='home-side-bars-paper' />
            </Grid>
                




            <Grid container direction="row" justifyContent="flex-start" alignItems="center" className='home-main-video-container'>
                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-video-container-1 reveal1' >
                        <Grid item container direction="row" justifyContent="center" alignItems="center" className='home-main-video-item-1'>
                            <animated.video autoPlay loop muted style={{...springPropsVideo1_1}} className='home-video-1'>
                                <source src={background_home_1} type="video/mp4" />
                            </animated.video>
                        </Grid>
                    </Grid>

                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-video-content-container-1 reveal2' >
                        <Grid  container item direction="column" justifyContent="center" alignItems="center" className='home-main-video-content-item-1'>
                            <AnimatedPaper elevation={24} style={{...springPropsVideo2_1}} className='home-main-video-content-1'>
                              <Grid container direction="row" justifyContent="center" alignItems="center" className='home-main-video-content-container-1-1' >
                                
                                <Grid container item direction="row" justifyContent="flex-start" alignItems="center" >                        
                                  
                                  <Grid item  >
                                    <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography3}} className='home-main-video-content-typography'>
                                      - Easily book your driver to deliver goods on your mobile.
                                    </AnimatedTypography>
                                  </Grid>
                                
                                  <Grid item >
                                    <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography3}} className='home-main-video-content-typography'>
                                      - Ship your product like furnitures, electrical appliances without worry.
                                    </AnimatedTypography>
                                  </Grid>
                                
                                </Grid>
                              
                              </Grid>
                            </AnimatedPaper> 
                        </Grid>
                    </Grid>
            </Grid>
            
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" className='home-main-video-container'>
                 
                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-video-container-2 reveal3' >
                        <Grid item container direction="row" justifyContent="center" alignItems="center" className='home-main-video-item-2'>
                            <animated.video autoPlay loop muted style={{...springPropsVideo1_2}} className='home-video-2'>
                                <source src={background_home_2} type="video/mp4" />
                            </animated.video>
                        </Grid>
                    </Grid>
                 
                    <Grid container direction="column" justifyContent="center" alignItems="center" className='home-main-video-content-container-2 reveal4' >
                        <Grid item container direction="row" justifyContent="center" alignItems="center" className='home-main-video-content-item-2'>
                            <AnimatedPaper elevation={24} style={{...springPropsVideo2_2}} className='home-main-video-content-2'>
                              <Grid container direction="row" justifyContent="center" alignItems="center" className='home-main-video-content-container-1-1' >
                                
                                <Grid container item direction="row" justifyContent="flex-start" alignItems="center" >                        
                                 
                                  <Grid item  >
                                    <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography3}} className='home-main-video-content-typography'>
                                      - Deliver your goods to destination in time.
                                    </AnimatedTypography>
                                  </Grid>
                                  
                                  <Grid item  >
                                    <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography3}} className='home-main-video-content-typography'>
                                      - We ensure safe and quick delivery.
                                    </AnimatedTypography>
                                  </Grid>
                                  
                                  <Grid item  >
                                    <AnimatedTypography style={{...springPropsTypography2, ...springPropsTypography3}} className='home-main-video-content-typography'>
                                      - All available at your doorstep at affordable price.
                                    </AnimatedTypography>
                                  </Grid>
                               
                                </Grid>
                              </Grid>
                            </AnimatedPaper>
                        </Grid>
                    </Grid>                   
                
            </Grid>



        </Grid>
      </Grid>
    );

}