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

module.exports = router;
