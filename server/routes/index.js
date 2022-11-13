var express = require('express');
var router = express.Router();
var cors = require('cors');

require('dotenv').config();
const {
  getInitialDriver,
  getInitialPassenger,
  createInitialState,
} = require('./initial');
const {Hop, ChannelType} = require('@onehop/js');
const hop = new Hop(process.env.HOP_KEY);

const createChannelId = () => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createUUID = () => {
  const crypto = require('crypto');
  return crypto.randomUUID();
};

router.use(cors());
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'ExpressJs Server for PoolRide'});
});

router.get('/api', (req, res) => {
  res.json({
    message: 'Hello from PoolRide Backend created in ExpressJS!',
  });
});

router.get('/id', async (req, res) => {
  const {id} = await hop.channels.tokens.create();
  res.json({message: 'Successfully Generated ID!', id: id});
});

router.get('/createTrip', async (req, res) => {
  const channelId = createChannelId();

  console.log('Name: ' + req.get('name'));
  console.log('Destination: ' + req.get('destination'));
  console.log('Date: ' + req.get('tripDate'));

  const tripState = createInitialState(
    req.get('name'),
    req.get('destination'),
    req.get('tripDate'),
  );

  const channel = await hop.channels.create(
    ChannelType.UNPROTECTED,
    `${channelId}`,
    // Creation Options
    {
      // Initial Channel state object
      state: tripState,
    },
  );
  res.json({message: 'Successfully Generated Trip!', channelId: channelId});
});

router.get('/joinDriver', async (req, res) => {
  const channelId = req.get('channelId');
  const name = req.get('name');
  const groupName = req.get('groupName');
  const make = req.get('make');
  const color = req.get('color');
  const capacity = req.get('capacity');
  const contact = req.get('contact');
  const pickup = req.get('pickup');
  const driverUUID = createUUID();

  const driverState = getInitialDriver(
    name,
    groupName,
    make,
    color,
    capacity,
    contact,
    pickup,
    driverUUID,
  );
  const channel = await hop.channels.get(`${channelId}`);

  hop.channels.patchState(channelId, {
    drivers: {...channel.state.drivers, [driverUUID]: driverState},
  });
  res.json({message: 'Successfully Joined as Driver!', channelId: channelId});
});

router.get('/joinPassenger', async (req, res) => {
  const channelId = req.get('channelId');
  const name = req.get('name');
  const contact = req.get('contact');
  const driverUUID = req.get('driverUUID');
  const passengerUUID = createUUID();

  const passengerState = getInitialPassenger(name, contact, passengerUUID);
  const channel = await hop.channels.get(`${channelId}`);
  const driverState = JSON.parse(JSON.stringify(channel.state.drivers));

  driverState[driverUUID].passengers = {
    ...driverState[driverUUID].passengers,
    [passengerUUID]: passengerState,
  };
  driverState[driverUUID].remainingCapacity =
    driverState[driverUUID].remainingCapacity - 1;

  hop.channels.patchState(channelId, {drivers: driverState});

  res.json({
    message: 'Successfully Joined as Passenger!',
    channelId: channelId,
  });
});

router.get('/addPassenger', async (req, res) => {
  const channelId = req.get('channelId');
  const name = req.get('name');
  const contact = req.get('contact');
  const passengerUUID = createUUID();

  const passengerState = getInitialPassenger(name, contact, passengerUUID);
  const channel = await hop.channels.get(`${channelId}`);

  hop.channels.patchState(channelId, {
    freePassengers: {
      ...channel.state.freePassengers,
      [passengerUUID]: passengerState,
    },
  });

  res.json({
    message: 'Successfully Joined as Passenger!',
    channelId: channelId,
  });
});

router.get('/removePassenger', async (req, res) => {
  const channelId = req.get('channelId');
  const passengerUUID = req.get('passengerUUID');

  const channel = await hop.channels.get(`${channelId}`);
  const freePassengerState = JSON.parse(
    JSON.stringify(channel.state.freePassengers),
  );
  delete freePassengerState[passengerUUID];

  hop.channels.patchState(channelId, {freePassengers: freePassengerState});

  res.json({
    message: 'Successfully Removed Passenger!',
    channelId: channelId,
  });
});

router.get('/removeFromCar', async (req, res) => {
  const channelId = req.get('channelId');
  const driverUUID = req.get('driverUUID');
  const passengerUUID = req.get('passengerUUID');

  const channel = await hop.channels.get(`${channelId}`);
  const driverState = JSON.parse(JSON.stringify(channel.state.drivers));

  delete driverState[driverUUID].passengers[passengerUUID];
  driverState[driverUUID].remainingCapacity =
    driverState[driverUUID].remainingCapacity + 1;

  hop.channels.patchState(channelId, {drivers: driverState});

  res.json({
    message: 'Successfully Removed Passenger From Car!',
    channelId: channelId,
  });
});

router.get('/removeDriver', async (req, res) => {
  const channelId = req.get('channelId');
  const driverUUID = req.get('driverUUID');

  const channel = await hop.channels.get(`${channelId}`);
  const driverState = JSON.parse(JSON.stringify(channel.state.drivers));

  //Move all driver passengers to free passengers
  const freePassengerState = {
    ...JSON.parse(JSON.stringify(channel.state.freePassengers)),
    ...driverState[driverUUID].passengers,
  };

  delete driverState[driverUUID];

  hop.channels.patchState(channelId, {
    drivers: driverState,
    freePassengers: freePassengerState,
  });

  res.json({
    message: 'Successfully Removed Driver!',
    channelId: channelId,
  });
});

module.exports = router;
