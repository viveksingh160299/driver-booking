import {React, useState} from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { animated, useSpring } from "react-spring";
import '../Style.css';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '1vw',
  padding: '6px 12px',
  width: '10vw',
  border: '1px solid',
  height: '6vh',
  minWidth: '0px',
  backgroundColor: '#1b1e23',
  borderColor: '#000000',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0cebeb',
    borderColor: '#0cecec',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#b0fc38',
    borderColor: '#b0fc38',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #b0fc38',
  },
});


export default function CustomizedButtons(props) {
  const AnimatedBootstrapButton = animated(BootstrapButton);
  
  const [Width_Height, setWidthHeight] = useState({
    width: '10vw',
    height: '6vh',
    fontsize: '1vw',
  })

  const setWidthHeightOnEnter = () => {
      setWidthHeight({
        width: '12vw',
        height: '8vh',
        fontsize: '1.2vw'
      });
  };

  const setWidthHeightOnLeave = () => {
    setWidthHeight({
      width: '10vw',
      height: '6vh',
      fontsize: '1vw'
    });
};

  const springWidthHeightOnHover = useSpring({
    from: {width: '10vw', height: '6vh', fontSize: '1vw'},
    to: {width: Width_Height.width, height: Width_Height.height, fontSize: Width_Height.fontsize},
    config: { duration: 200 }
  });

  return (
    <Stack spacing={2} direction="row">
      <AnimatedBootstrapButton className='AnimatedBootstrapButton' onMouseEnter={()=>setWidthHeightOnEnter()} onMouseLeave={()=>setWidthHeightOnLeave()} style={{...springWidthHeightOnHover}} variant="contained" disableRipple>
        {props.name}
      </AnimatedBootstrapButton>
    </Stack>
  );
}