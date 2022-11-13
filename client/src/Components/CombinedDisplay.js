import React, {useState} from 'react';
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
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@mui/material';

export default function DriverDisplay(props) {
  const drivers = props.drivers;
  const passengers = props.passengers;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const getIconColor = (driver) => {
    return driver['remainingCapacity'] > 0 ? 'success.main' : 'error.main';
  };

  const carNotFull = (driver) => {
    return driver['remainingCapacity'] > 0;
  };

  const handleClickOpen = (name) => {
    setName(name);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const objectNotEmpty = (obj) => {
    return Object.keys(obj).length > 0;
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Remove Driver?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this driver? Current passengers will
            be moved to the waitlist.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleSubmitDelete(name);
              handleClose();
            }}
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
      {objectNotEmpty(drivers) && (
        <>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{borderRadius: '16px', color: 'text.primary'}}
            disableSticky
          >
            <Typography variant="h6">Drivers</Typography>
          </ListSubheader>
          {Object.entries(drivers).map(([name, driver]) => {
            return (
              <ListItem
                key={name}
                secondaryAction={
                  carNotFull(driver) && (
                    <Tooltip title="Add Passenger">
                      <IconButton
                        onClick={() => {
                          props.setDriverUUID(name);
                          props.handleOpen();
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  )
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
                <Tooltip title="Remove Driver">
                  <IconButton
                    onClick={() => {
                      handleClickOpen(name);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </>
      )}
      {objectNotEmpty(drivers) && objectNotEmpty(passengers) && <Divider />}
      {objectNotEmpty(passengers) && (
        <>
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{borderRadius: '16px', color: 'text.primary'}}
            disableSticky
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
                  <Tooltip title="Remove">
                    <IconButton
                      onClick={() => {
                        handleSubmit(name);
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Tooltip>
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
