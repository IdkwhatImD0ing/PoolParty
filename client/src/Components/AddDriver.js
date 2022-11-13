import React, {useState} from 'react';
import {Typography, Stack, Button, TextField, Grid} from '@mui/material';

export default function AddDriver(props) {
  const [driverName, setDriverName] = useState('');
  const [driverContact, setDriverContact] = useState('');
  const [driverPickup, setDriverPickup] = useState('');
  const [color, setColor] = useState('');
  const [make, setMake] = useState('');
  const [groupName, setGroupName] = useState('');
  const [seats, setSeats] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      driverName === '' ||
      driverContact === '' ||
      driverPickup === '' ||
      color === '' ||
      make === '' ||
      groupName === '' ||
      seats === ''
    ) {
      alert('Please fill out all fields');
      return;
    }

    fetch('https://poolserver.hop.sh/joinDriver', {
      headers: {
        channelId: props.tripId,
        name: driverName,
        contact: driverContact,
        color: color,
        make: make,
        groupName: groupName,
        capacity: seats,
        pickup: driverPickup,
      },
    });
    props.onClick();
    props.handleClose();
  };
  return (
    <Stack
      position="absolute"
      top="50%"
      left="50%"
      direction="column"
      alignItems="center"
      width={window.innerWidth < 600 ? '80%' : '50%'}
      justifyContent="center"
      spacing={2}
      sx={{
        backgroundColor: 'white',
        transform: 'translate(-50%, -50%)',
        padding: '2%',
        borderRadius: '16px',
      }}
    >
      <Typography variant="h3" align="center">
        Add Driver
      </Typography>
      <Grid container rowSpacing={2}
      >
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="driverName"
            label="Name"
            variant="outlined"
            value={driverName}
            onChange={(e) => setDriverName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="driverContact"
            label="Contact"
            variant="outlined"
            value={driverContact}
            onChange={(e) => setDriverContact(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="groupName"
            label="Group Name"
            variant="outlined"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="driverPickup"
            label="Pickup Location"
            variant="outlined"
            value={driverPickup}
            onChange={(e) => setDriverPickup(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="make"
            label="Car Make"
            variant="outlined"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} pl={1} pr={1}>
          <TextField
            id="color"
            label="Car Color"
            variant="outlined"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} pl={1} pr={1}>
          <TextField
            id="seats"
            label="Number of Available Seats"
            variant="outlined"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>

      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Stack>
  );
}
