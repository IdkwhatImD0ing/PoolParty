import React from 'react';
import {Box, Typography} from '@mui/material';

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
        <Typography variant="h1">Pool Party</Typography>
      </Box>
    </>
  );
}
