import React from 'react';
import {Box, Typography, Button, Stack} from '@mui/material';
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
      <Typography variant="h5" color="black" sx = {{mt: 3}}
        align='center'>
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
          marginTop: '16px',
          marginBottom: '16px',
          marginLeft: '16px',
          marginRight: '16px',
          padding: '16px',
          borderRadius: '16px',
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
}
