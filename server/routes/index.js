var express = require('express');
var router = express.Router();

require('dotenv').config();
const {
  getInitialState,
  getDriverState,
  getPassengerState,
} = require('./initial');
const {Hop, ChannelType} = require('@onehop/js');
const hop = new Hop(process.env.HOP_KEY);

const createChannelId = () => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

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

  const tripState = getInitialState(
    req.get('name'),
    req.get('destination'),
    req.get('date'),
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
  res.json({message: 'Successfully Generated Lobby!', channelId: channelId});
});

router.get('/joinDriver', async (req, res) => {
  const channelId = req.get('channelId');
  const name = req.get('name');
  const groupName = req.get('groupName');
  const make = req.get('make');
  const color = req.get('color');
  const capacity = req.get('capacity');
  const contact = req.get('contact');

  const driverState = getDriverState(
    name,
    groupName,
    make,
    color,
    capacity,
    contact,
  );

  hop.patchState(channelId, {drivers: {}});
  res.json({message: 'Successfully Joined as Driver!', channelId: channelId});
});

router.get('/joinPassenger', async (req, res) => {
  const channelId = req.get('channelId');
  const name = req.get('name');
  const contact = req.get('contact');
  const driver = req.get('driver');

  const passengerState = getPassengerState(name, contact);

  hop.patchState(channelId, {passengers: {}});
  res.json({
    message: 'Successfully Joined as Passenger!',
    channelId: channelId,
  });
});

module.exports = router;
