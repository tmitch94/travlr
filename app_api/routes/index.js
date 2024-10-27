const express = require("express");
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "payload",
});

const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");
const roomsController = require("../controllers/rooms");
const mealController = require("../controllers/meals");
const contactController = require("../controllers/contact");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

router
  .route("/trips")
  .get(tripsController.tripList)
  .post(auth, tripsController.tripsAddTrip);

//GET method routes triplistbycode - requires param
router
  .route("/trips/:tripCode")
  .get(tripsController.tripListByCode)
  .put(auth, tripsController.tripsUpdateTrip);

//Rooms
router.route("/rooms").get(roomsController.roomList);
router.route("/rooms/:roomCode").get(roomsController.roomListByCode);

//Meals
router.route("/meals").get(mealController.mealList);
router.route("/meals/:mealCode").get(mealController.mealListByCode);

//Contact

module.exports = router;
