import React from 'react';
import {Box, Typography, Stack, Button} from '@mui/material';

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
          spacing={2}
        >
          <Typography variant="h1">Pool Party</Typography>
          <Typography variant="h3">Ride Sharing made easy</Typography>
          <Button>Get Started!</Button>
        </Stack>
      </Box>
    </>
  );
}
