import React from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';

export default function Error() {
  return (
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
      <Typography variant="h1" color="black">404</Typography>
      <Typography variant="h2" color="black" maxWidth={"90%"}>Error: trip not found</Typography>
      <Typography variant="h5" color="#32b2b7">make sure you copied the URL correctly!</Typography>
      <Button 
          onClick={() => {
            alert('clicked');
            }}
            sx={{
              backgroundColor: '#d2c457',
              color: 'black',
              fontFamily: 'sans-serif',
              fontSize: '1.5rem',
              marginTop: '3%',
              marginBottom: '5%',
              marginLeft: '8%',
              marginRight: '8%',
              padding: '1%',
            }}
            >
          Back to Home
        </Button>
    </Box>
  );
}
