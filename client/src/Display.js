import React, {useState} from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';
import PassengerDisplay from './Components/PassengerDisplay';
import AddPassenger from './Components/AddPassenger';
import Error from './Components/Error';
import DriverDisplay from './Components/DriverDisplay';
import AddDriver from './Components/AddDriver';
import {useSearchParams} from 'react-router-dom';
import {useReadChannelState} from '@onehop/react';

export default function DisplayTrip() {
  const [driver, setDriver] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const tripId = searchParams.get('tripId');
  const {state} = useReadChannelState(tripId);
  console.log(state);

  if (!tripId || !state) {
    return <Error />;
  }

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
          <Typography variant="h1">Trip Name: {state.name}</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={5}
          >
            <Button>Add Driver</Button>
            <Button>Add Passenger</Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {state.drivers && <DriverDisplay />}
            {driver && <PassengerDisplay drivers={state.drivers} />}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
