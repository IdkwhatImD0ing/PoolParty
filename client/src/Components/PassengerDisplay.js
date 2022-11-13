import React from 'react';
import {List, ListItem, ListItemText, Box, Typography, Stack, Button, TextField, ListSubheader} from '@mui/material';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';

const makeTestPassengers = () => {
  return ({
    'Patrick Passenger': {name: 'Patrick', contact: 'patty@ucsc.edu'},
    'Nessie': {name: 'Loch Nessie', contact: 'lochland@gmail.com'},
    'Alan Watts': {name: 'Alan Watts', contact: '424-988-0992'},
  });
};

export default function PassengerDisplay(props) {
  // Dictionary  of passenger objects
  const passengers = props.passengers;
  // const passengers = makeTestPassengers();

  /*
  passenger object
{
name:
contact:
}*/

  return (
    <List dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px' }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius: '16px'}}>
          <Typography variant='h6'>
            Unseated Passengers
          </Typography>
        </ListSubheader>
      }>
      {Object.entries(passengers).map(([name, passenger]) => {
        return (
          <ListItem
            key={name}
            secondaryAction={
              <IconButton>
                <AddIcon/>
              </IconButton>
            }>
              <ListItemText primary={`${passenger['name']}`} edge='start'/>
          </ListItem>
        );
      })}
    </List>
  );
}
