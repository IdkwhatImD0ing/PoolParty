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
      <Typography variant="h1">Error: Trip Not Found</Typography>
    </Box>
  );
}
