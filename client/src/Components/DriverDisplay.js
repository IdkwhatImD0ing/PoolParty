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

export default function DriverDisplay(props) {
  // const driversObject = props.drivers;

  const getIconColor = (driver) => {
    return driver['remainingCapacity'] > 0 ? 'success.main' : 'error.main';
  };

  return (
    <>
      {props.drivers && (
        <List
          dense
          sx={{
            width: '100%',
            minWidth: 240,
            maxWidth: 360,
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
              <Typography variant="h6">Drivers</Typography>
            </ListSubheader>
          }
        >
          {Object.entries(props.drivers).map(([name, driver]) => {
            return (
              <ListItem
                key={name}
                secondaryAction={
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                }
              >
                <ListItemIcon sx={{color: getIconColor(driver)}}>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`${driver['name']}`}
                  secondary={`${driver['remainingCapacity']} seats available`}
                  edge="start"
                />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
}
