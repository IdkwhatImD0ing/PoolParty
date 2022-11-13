import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal } from "@mui/material";
import PassengerDisplay from "./Components/PassengerDisplay";
import AddPassenger from "./Components/AddPassenger";
import Error from "./Components/Error";
import DriverDisplay from "./Components/DriverDisplay";
import AddDriver from "./Components/AddDriver";
import { useSearchParams } from "react-router-dom";
import { useReadChannelState } from "@onehop/react";

export default function DisplayTrip() {
  const [driver, setDriver] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [driverOpen, setDriverOpen] = useState(false);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const handleDriverOpen = () => setDriverOpen(true);
  const handleDriverClose = () => setDriverOpen(false);
  const handlePassengerOpen = () => setPassengerOpen(true);
  const handlePassengerClose = () => setPassengerOpen(false);

  const tripId = searchParams.get("tripId");
  const { state } = useReadChannelState(tripId);

  if (!tripId || !state) {
    return <Error />;
  }

  return (
    <>
      <Box
        height="100vh"
        weight="100vw"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <Modal
          open={driverOpen}
          onClose={handleDriverClose}
          closeAfterTransition
        >
          <AddDriver handleClose={handleDriverClose} tripId={tripId} />
        </Modal>
        <Modal
          open={passengerOpen}
          onClose={handlePassengerClose}
          closeAfterTransition
        >
          <AddPassenger />
        </Modal>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={"5vh"}
          sx={{ mt: "5%" }}
          maxWidth="98%"
        >
          <Typography variant="h1" align="center">
            Carpool for
          </Typography>

          {state.date !== "" && (
            <Typography
              variant="h1"
              align="center"
              sx={{ fontWeight: "bold", fontSize: "80px" }}
            >
              "GraceHacks {state.name}" on {state.date}
            </Typography>
          )}

          {state.date === "" && (
            <Typography
              variant="h1"
              align="center"
              sx={{ fontWeight: "bold", fontSize: "80px" }}
            >
              "GraceHacks {state.name}"
            </Typography>
          )}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={5}
          >
            <Button onClick={handleDriverOpen}>Add Driver</Button>
            <Button onClick={handlePassengerOpen}>Add Passenger</Button>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {state.drivers && <DriverDisplay drivers={state.drivers} />}
            {driver && <PassengerDisplay drivers={state.drivers} />}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
