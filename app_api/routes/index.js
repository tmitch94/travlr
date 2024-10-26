const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealController = require('../controllers/meals');
const contactController = require('../controllers/contact');

router.route('/trips').get(tripsController.tripList);

//GET method routes triplistbycode - requires param
router.route('/trips/:tripCode').get(tripsController.tripListByCode);

//Rooms
router.route('rooms').get(roomsController.roomList);
router.route('/rooms/:roomCode').get(roomsController.roomListByCode);

//Meals
router.route('meals').get(mealController.mealList);
router.route('/meals/:mealCode').get(mealController.mealListByCode);


//Contact
router.route('meals').get(mealController.mealList);
router.route('/meals/:mealCode').get(mealController.mealListByCode);

module.exports = router;