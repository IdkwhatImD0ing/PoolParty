import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  Stack,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  ListSubheader,
  Typography,
} from '@mui/material';

export default function DriverDisplay(props) {
  const drivers = props.drivers;
  const passengers = props.passengers;

  const getIconColor = (driver) => {
    return driver['remainingCapacity'] > 0 ? 'success.main' : 'error.main';
  };

  const handleSubmit = (passengerUUID) => {
    fetch('https://poolserver.hop.sh/removePassenger', {
      headers: {
        channelId: props.channelId,
        passengerUUID: passengerUUID,
      },
    });
  };

  const handleSubmitDelete = (driverUUID) => {
    fetch('https://poolserver.hop.sh/removeDriver', {
      headers: {
        channelId: props.channelId,
        driverUUID: driverUUID,
      },
    });
  };

  return (
    <List
      dense
      sx={{
        width: '100%',
        minWidth: 360,
        maxWidth: 360,
        bgcolor: 'background.paper',
        borderRadius: '16px',
        padding: '2%',
      }}
    >
      {drivers && (
        <>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{borderRadius: '16px'}}
          >
            <Typography variant="h6">Drivers</Typography>
          </ListSubheader>
          {Object.entries(drivers).map(([name, driver]) => {
            return (
              <ListItem
                key={name}
                secondaryAction={
                  <IconButton
                    onClick={() => {
                      props.setDriverUUID(name);
                      props.handleOpen();
                    }}
                  >
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
                <IconButton
                  onClick={() => {
                    handleSubmitDelete(name);
                  }}
                >
                  <RemoveIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </>
      )}
      {drivers && passengers && <Divider />}
      {passengers && (
        <>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{borderRadius: '16px'}}
          >
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Needs a Ride</Typography>
              <Typography variant="h8">
                {`${Object.keys(passengers).length} total`}
              </Typography>
            </Stack>
          </ListSubheader>
          {Object.entries(passengers).map(([name, passenger]) => {
            return (
              <ListItem
                key={name}
                secondaryAction={
                  <IconButton
                    onClick={() => {
                      handleSubmit(name);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`${passenger['name']}`} edge="start" />
              </ListItem>
            );
          })}
        </>
      )}
    </List>
  );
}
