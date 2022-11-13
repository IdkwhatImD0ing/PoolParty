import React, {useEffect, useState} from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';

export default function CreateTrip() {
  const [tripName, setTripName] = useState('');
  const [tripDate, setTripDate] = useState('');
  const [tripDest, setTripDest] = useState('');
  const [tripDeadline, setTripDeadline] = useState('');
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
          
          <Typography variant="h1" align='center'>Create a trip</Typography>
          <TextField
            required
            id="tripName"
            label="Trip Name (required)"
            variant="outlined"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
          />
          <TextField
            id="tripDate"
            label="Date"
            variant="outlined"
            value={tripDate}
            onChange={(e) => setTripDate(e.target.value)}
          />
          <TextField
            id="tripDest"
            label="Destination"
            variant="outlined"
            value={tripDest}
            onChange={(e) => setTripDest(e.target.value)}
          />
          <></>
          <Button variant='contained' >Submit</Button>
        </Stack>
      </Box>
    </>
  );
}
