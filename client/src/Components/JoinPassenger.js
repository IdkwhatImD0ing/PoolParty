import React, { useState } from "react";
import { Typography, Stack, Button, TextField } from "@mui/material";

export default function JoinPassenger(props) {
  const [passengerName, setPassengerName] = useState("");
  const [passengerContact, setPassengerContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passengerName === "") {
      alert("Please fill out name");
      return;
    }

    fetch("http://localhost:3001/joinPassenger", {
      headers: {
        channelId: props.tripId,
        name: passengerName,
        contact: passengerContact,
        driverUUID: props.driverUUID,
      },
    });
    props.handleClose();
  };
  return (
    <Stack
      position="absolute"
      top="50%"
      left="50%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        backgroundColor: "white",
        transform: "translate(-50%, -50%)",
        padding: "2%",
      }}
    >
      <Typography variant="h3">Add a Passenger</Typography>
      <TextField
        id="passengerName"
        label="Passenger Name"
        variant="outlined"
        value={passengerName}
        onChange={(e) => setPassengerName(e.target.value)}
      />
      <TextField
        id="passengerContact"
        label="Passenger Contact"
        variant="outlined"
        value={passengerContact}
        onChange={(e) => setPassengerContact(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </Stack>
  );
}
