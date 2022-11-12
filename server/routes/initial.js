const createInitialState = (name, destination, date) => {
  const obj = {
    name: name,
    destination: destination,
    date: date,
    drivers: {},
  };

  return obj;
};
const getInitialDriver = (name, groupName, make, color, capacity, contact) => {
  const obj = {
    name: name,
    groupName: groupName,
    make: make,
    color: color,
    capacity: capacity,
    contact: contact,
    passengers: {},
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
