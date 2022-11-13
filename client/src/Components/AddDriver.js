import React, {useState} from 'react';
import {
  Typography,
  Stack,
  Button,
  TextField,
  Paper,
  Grid,
  styled,
} from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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

    fetch('http://localhost:3001/joinDriver', {
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
    props.handleClose();
  };
  return (
    <>
      <Stack
        position="absolute"
        top="50%"
        left="50%"
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          padding: '2%',
        }}
      >
        <Typography variant="h1">Add a Driver</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="driverName"
                label="Driver Name"
                variant="outlined"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <TextField
                id="driverContact"
                label="Driver Contact"
                variant="outlined"
                value={driverContact}
                onChange={(e) => setDriverContact(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <TextField
                id="driverPickup"
                label="Driver Pickup Location"
                variant="outlined"
                value={driverPickup}
                onChange={(e) => setDriverPickup(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <TextField
                id="color"
                label="Car Color"
                variant="outlined"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <TextField
                id="make"
                label="Car Make"
                variant="outlined"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <TextField
                id="groupName"
                label="Group Name"
                variant="outlined"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>
              <TextField
                id="seats"
                label="Number of Seats"
                variant="outlined"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                fullWidth
              />
            </Item>
          </Grid>
        </Grid>

        <Button>Submit</Button>
      </Stack>
    </>
  );
}
