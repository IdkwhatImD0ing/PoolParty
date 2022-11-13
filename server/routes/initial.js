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
  };

  return obj;
};

const getInitialPassenger = (name, contact) => {
  const obj = {
    name: name,
    contact: contact,
  };

  return obj;
};

module.exports = {
  createInitialState,
  getInitialDriver,
  getInitialPassenger,
};
