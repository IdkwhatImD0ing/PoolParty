import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

export default function CarDisplay(props) {
  const driver = props.driver;

  const carEmpty = (driver) => {
    return driver["remainingCapacity"] === driver["capacity"];
  };

  const carNotFull = (driver) => {
    return driver["remainingCapacity"] > 0;
  };

  const getIconColor = (driver) => {
    return carNotFull(driver) ? "success.main" : "error.main";
  };

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 360,
        minWidth: 250,
        bgcolor: "background.paper",
        borderRadius: "16px",
        padding: "2%",
      }}
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ borderRadius: "16px" }}
        >
          <Typography variant="h6">
            {`${driver.groupName} - 
             ${driver.color ? driver.color : ""}
             ${driver.make ? " " + driver.make : ""}`}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CircleIcon sx={{ color: getIconColor(driver) }} />
            <Typography variant="h8">
              {`${driver.capacity - driver.remainingCapacity}/${
                driver.capacity
              } Passengers`}
            </Typography>
          </Stack>
        </ListSubheader>
      }
    >
      <ListItem>
        <ListItemIcon>
          <DirectionsCarIcon />
        </ListItemIcon>
        <ListItemText
          primary={driver.name}
          primaryTypographyProps={{ variant: "h8" }}
          secondary={driver.contact}
        />
      </ListItem>
      <Divider />
      <List component="div" disablePadding dense>
        {Object.entries(driver.passengers).map(([name, passenger]) => {
          return (
            // Individual passenger
            <ListItem sx={{ pl: 2 }}>
              <ListItemText
                primary={passenger.name}
                secondary={passenger.contact ? passenger.contact : ""}
              />
            </ListItem>
          );
        })}
        {carEmpty(driver) && (
          <ListItem>
            <ListItemText secondary="No passengers yet" />
          </ListItem>
        )}
        {carNotFull(driver) && (
          <ListItemButton
            onClick={() => {
              props.setDriverUUID(driver.uuid);
              props.handleOpen();
            }}
          >
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add passenger" />
          </ListItemButton>
        )}
      </List>
    </List>
  );
}
