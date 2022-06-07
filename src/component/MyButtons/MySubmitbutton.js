import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '1vw',
  padding: '6px 12px',
  width: '10vw',
  border: '1px solid',
  lineHeight: 1.5,
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
    backgroundColor: '#ffa500',
    borderColor: '#ee7600',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#ff4500',
    borderColor: '#ee7600',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #ffa500',
  },
});


export default function CustomizedButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>
        {props.name}
      </BootstrapButton>
    </Stack>
  );
}