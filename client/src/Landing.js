import React from 'react';
import {Box, Typography, Stack, Button} from '@mui/material';
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
         <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
        <Typography
        variant="h1"
        fontFamily={"sans-serif"}
        >
          Pool Party
          </Typography>
        <Typography variant="h4" fontFamily={"sans-serif"} color={"#32b2b7"}> carpooling, made easy.</Typography>
        <Button 
          onClick={() => {
            alert('clicked');
            }}
            sx={{
              backgroundColor: '#d2c457',
              color: 'black',
              fontFamily: 'sans-serif',
              fontSize: '1.5rem',
              marginTop: '8%',
              marginBottom: '5%',
              marginLeft: '8%',
              marginRight: '8%',
              padding: '1%',
            }}
            >
          Create an Event
        </Button>
        <Typography variant="h3" fontStyle={'sans-serif'}>About Us</Typography>
        <Typography variant="h5" fontStyle={'sans-serif'} maxWidth="95%">We're a group of students at UC Santa Cruz who are passionate about helping students to find rides.</Typography>
        </Stack>
      </Box>
    </>
  );
}
