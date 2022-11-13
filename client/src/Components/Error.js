import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Loading from './Loading';

export default function Error() {
  const navigate = useNavigate();
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
      <Loading/>
      <Typography variant="h1" color="black">
        404
      </Typography>
      <Typography variant="h2" color="black" maxWidth={'90%'}>
        Error: trip not found
      </Typography>
      <Typography variant="h5" color="#32b2b7">
        make sure you copied the URL correctly!
      </Typography>
      <Button
        onClick={() => {
          navigate('/');
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
