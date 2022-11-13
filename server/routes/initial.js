const createInitialState = (name, destination, date) => {
  const obj = {
    name: name,
    destination: destination,
    date: date,
    drivers: {},
    freePassengers: {},
  };

  return obj;
};
const getInitialDriver = (
  name,
  groupName,
  make,
  color,
  capacity,
  contact,
  pickup,
  driverUUID
) => {
  const obj = {
    name: name,
    groupName: groupName,
    make: make,
    color: color,
    capacity: capacity,
    remainingCapacity: capacity,
    contact: contact,
    passengers: {},
    pickup: pickup,
    driverUUID: driverUUID,
  };

  return obj;
};

const getInitialPassenger = (name, contact, passengerUUID) => {
  const obj = {
    name: name,
    contact: contact,
    passengerUUID: passengerUUID,
  };

  return obj;
};

module.exports = {
  createInitialState,
  getInitialDriver,
  getInitialPassenger,
};
