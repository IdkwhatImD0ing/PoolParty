import React, {useState} from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';

export default function AddPassenger() {
  const [passengerName, setPassengerName] = useState('');
  const [passengerContact, setPassengerContact] = useState('');
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1">Add a Passenger</Typography>
        <TextField
          id="passengerName"
          label="Passenger Name"
          variant="outlined"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
        />
        <TextField
          id="passengerContact"
          label="Passenger Contact"
          variant="outlined"
          value={passengerContact}
          onChange={(e) => setPassengerContact(e.target.value)}
        />
        <Button>Add</Button>
      </Stack>
    </>
  );
}
