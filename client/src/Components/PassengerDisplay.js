import React from 'react';
import {Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

import RemoveIcon from '@mui/icons-material/Remove';
import ListSubheader from '@mui/material/ListSubheader';

const makeTestPassengers = () => {
  return {
    'Patrick Passenger': {name: 'Patrick', contact: 'patty@ucsc.edu'},
    'Nessie': {name: 'Loch Nessie', contact: 'lochland@gmail.com'},
    'Alan Watts': {name: 'Alan Watts', contact: '424-988-0992'},
  };
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
    <List
      dense
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '16px',
        padding: '2%',
      }}
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{borderRadius: '16px'}}
        >
          <Typography variant="h6">Unseated Passengers</Typography>
        </ListSubheader>
      }
    >
      {Object.entries(passengers).map(([name, passenger]) => {
        return (
          <ListItem
            key={name}
            secondaryAction={
              <IconButton>
                <RemoveIcon/>
              </IconButton>
            }
          >
            <ListItemText primary={`${passenger['name']}`} edge="start" />
          </ListItem>
        );
      })}
    </List>
  );
}
