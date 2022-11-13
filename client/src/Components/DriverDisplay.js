import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';

import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

const makeTestDriver = (name, capacity, curNumRiders, contact) => {
  return ({
    name: name,
    capacity: capacity,
    curNumRiders: curNumRiders,
    contact: contact,
  });
}

const testDrivers = {
  'Jason Burger': makeTestDriver('Jason Burger', 4, 4, '425-808-9992'),
  'Buddy Holly': makeTestDriver('Buddy Holly', 6, 2, 'bholly@ucsc.edu'),
  'Ben Leeds Carson': makeTestDriver('Ben Leeds Carson', 2, 2, '888-901-1998'),
  'Juilio Kaiser': makeTestDriver('Juilio Kaiser', 2, 1, 'None'),
}

export default function DriverDisplay(props) {

  // const driversObject = props.drivers;
  const driversObject = testDrivers;

  const getIconColor = (driver) => {
    return driver['capacity'] > driver['curNumRiders'] ? 'success.main':'error.main';
  };

  return (
    <List dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px' }}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius: '16px'}}>
          <Typography variant='h6'>
            Drivers
          </Typography>
        </ListSubheader>
      }>
      {Object.entries(driversObject).map(([name, driver]) => {
        return (
          <ListItem
            key={name}
            secondaryAction={
              <IconButton>
                <AddIcon/>
              </IconButton>
            }>
              <ListItemIcon sx={{color: getIconColor(driver)}}>
                <CircleIcon/>
              </ListItemIcon>
              <ListItemText primary={`${driver['name']}`} 
              secondary={`${driver['curNumRiders']}/${driver['capacity']} seats`}
              edge='start'/>
          </ListItem>
        );
      })}
    </List>
  );
}
