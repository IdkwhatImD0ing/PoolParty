import React, {useState} from 'react';
import {Box, Typography, Stack, Button, TextField} from '@mui/material';

export default function AddDriver() {
  const [driverName, setDriverName] = useState('');
  const [driverContact, setDriverContact] = useState('');
  const [driverPickup, setDriverPickup] = useState('');
  const [color, setColor] = useState('');
  const [make, setMake] = useState('');
  const [groupName, setGroupName] = useState('');
  const [seats, setSeats] = useState('');
  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography variant="h1">Add a Driver</Typography>
        <TextField
          id="driverName"
          label="Driver Name"
          variant="outlined"
          value={driverName}
          onChange={(e) => setDriverName(e.target.value)}
        />
        <TextField
          id="driverContact"
          label="Driver Contact"
          variant="outlined"
          value={driverContact}
          onChange={(e) => setDriverContact(e.target.value)}
        />
        <TextField
          id="driverPickup"
          label="Driver Pickup Location"
          variant="outlined"
          value={driverPickup}
          onChange={(e) => setDriverPickup(e.target.value)}
        />
        <TextField
          id="color"
          label="Car Color"
          variant="outlined"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <TextField
          id="make"
          label="Car Make"
          variant="outlined"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <TextField
          id="groupName"
          label="Group Name"
          variant="outlined"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <TextField
          id="seats"
          label="Number of Seats"
          variant="outlined"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
        <Button>Submit</Button>
      </Stack>
    </>
  );
}
