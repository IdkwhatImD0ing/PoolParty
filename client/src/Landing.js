import React from 'react';
import {Box, Typography, Stack, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
// import { positions } from '@mui/system';

export default function Landing() {
  const navigate = useNavigate();
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
          <Typography variant="h1" fontFamily={'sans-serif'}>
            Pool Party
          </Typography>
          <Typography variant="h4" fontFamily={'sans-serif'} color={'#32b2b7'}>
            carpooling, made easy.
          </Typography>
          <Button
            onClick={() => {
              navigate('/create');
            }}
            variant="contained"
            sx={{
              fontSize: '1.5rem',
              marginTop: '16px',
              marginBottom: '16px',
              marginLeft: '16px',
              marginRight: '16px',
              padding: '3%',
              borderRadius: '12px',
            }}
          >
            Create an Event
          </Button>
        </Stack>
      </Box>
    </>
  );
}
