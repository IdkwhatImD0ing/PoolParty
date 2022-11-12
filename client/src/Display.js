import React, {useState} from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';
import PassengerDisplay from './Components/PassengerDisplay';
import AddPassenger from './Components/AddPassenger';
import Error from './Components/Error';
import DriverDisplay from './Components/DriverDisplay';
import AddDriver from './Components/AddDriver';

export default function DisplayTrip() {
  const [driver, setDriver] = useState(null);
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
          <Typography variant="h1">Trip Name</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <DriverDisplay />
            {driver && <PassengerDisplay />}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
