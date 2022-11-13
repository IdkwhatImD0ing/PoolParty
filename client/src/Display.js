import React, { useState } from "react";
import { Box, Typography, Stack, Button, Modal, Toolbar } from "@mui/material";
import AddPassenger from "./Components/AddPassenger";
import Error from "./Components/Error";
import CarDisplay from "./Components/CarDisplay";
import CombinedDisplay from "./Components/CombinedDisplay";
import AddDriver from "./Components/AddDriver";
import JoinPassenger from "./Components/JoinPassenger";
import { useSearchParams } from "react-router-dom";
import { useReadChannelState } from "@onehop/react";

export default function DisplayTrip() {
  const [driver, setDriver] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [driverOpen, setDriverOpen] = useState(false);
  const [passengerOpen, setPassengerOpen] = useState(false);
  const [passengerOpen2, setPassengerOpen2] = useState(false);
  const [driverUUID, setDriverUUID] = useState(null);
  const handleDriverOpen = () => setDriverOpen(true);
  const handleDriverClose = () => setDriverOpen(false);
  const handlePassengerOpen = () => setPassengerOpen(true);
  const handlePassengerClose = () => setPassengerOpen(false);
  const handlePassengerOpen2 = () => setPassengerOpen2(true);
  const handlePassengerClose2 = () => setPassengerOpen2(false);

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
        overflow="auto"
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
          <AddPassenger handleClose={handlePassengerClose} tripId={tripId} />
        </Modal>
        <Modal
          open={passengerOpen2}
          onClose={handlePassengerClose2}
          closeAfterTransition
        >
          <JoinPassenger
            handleClose={handlePassengerClose2}
            tripId={tripId}
            driverUUID={driverUUID}
          />
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
              "{state.name}" on {state.date}
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
            <CombinedDisplay
              drivers={state.drivers}
              passengers={state.freePassengers}
              channelId={tripId}
              setDriverUUID={setDriverUUID}
              handleOpen={handlePassengerOpen2}
            />
          </Stack>
          {state.drivers &&
            Object.entries(state.drivers).map(([name, driverObject]) => {
              return (
                <CarDisplay
                  driver={driverObject}
                  setDriverUUID={setDriverUUID}
                  handleOpen={handlePassengerOpen2}
                />
              );
            })}
          {/* Toolbar to make space at bottom of screen */}
          <Toolbar />
        </Stack>
      </Box>
    </>
  );
}
