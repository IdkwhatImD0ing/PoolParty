import React from 'react';
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';
// import { positions } from '@mui/system';

export default function Landing() {
  return (
    <>
      <Box
        height="100vh"
        weight="100vw"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'lightblue',
        }}
      >
        <Typography
        variant="h1"
        fontFamily={"sans-serif"}
        paddingLeft="10px"
        >
          Pool Party
          </Typography>
        <Typography variant="h4" fontFamily={"sans-serif"} paddingLeft="50px" paddingBottom="50px"color={"#32b2b7"}>carpooling, made easy.</Typography>
        <Button 
          onClick={() => {
            alert('clicked');
            }}
            sx={{
              backgroundColor: '#d2c457',
              color: 'black',
              fontFamily: 'sans-serif',
              fontSize: '40px',
              height: '100px',
              width: '440px',
              marginTop: '20px',
              marginBottom: '20px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
            >
          Create a Event
        </Button>
        <Typography variant="h3" paddingTop={"100px"} paddingLeft="20px" fontStyle={'sans-serif'}>About Us</Typography>
        <Typography variant="h5" paddingTop={"20px"} paddingLeft="20px" fontStyle={'sans-serif'}>We're a group of students at UC Santa Cruz who are passionate about helping students to find rides.</Typography>
      </Box>
    </>
  );
}
