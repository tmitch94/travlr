const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');

router.route('/trips').get(tripsController.tripList);

//GET method routes triplistbycode - requires param
router.route('/trips/:tripCode').get(tripsController.tripListByCode);

router.route('/rooms').get(roomsController.roomList);
router.route('/rooms/:roomCode').get(roomsController.roomListByCode);

module.exports = router;