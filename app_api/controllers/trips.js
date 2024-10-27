const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Trips = mongoose.model("trips");
const User = mongoose.model("users");

/**
 * GET: /trips - lists all the trips
 * Regardless of outcome, response must include HTML status code
 * and JSON message to the requesting client
 */
const tripList = async (req, res) => {
  const q = await Trip.find({}).exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

const tripListByCode = async (req, res) => {
  const q = await Trip.find({ code: req.params.tripCode }).exec();

  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

const getUser = (req, res, callback) => {
  if (req.payload && req.payload.email) {
    User.findOne({ email: req.payload.email }).exec((err, user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      } else if (err) {
        console.log(err);
        return res.status(404).json(err);
      }
      callback(req, res, user.name);
    });
  } else {
    return res.status(404).json({
      message: "User not found",
    });
  }
};

const tripsAddTrip = async (req, res) => {
  getUser(req, res, (req, res) => {
    Trip.create(
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      (err, trip) => {
        if (err) {
          return res
            .status(400) // bad request
            .json(err);
        } else {
          return res
            .status(201) // created
            .json(trip);
        }
      }
    );
  });
};

const tripsUpdateTrip = async (req, res) => {
  getUser(req, res, (req, res) => {
    Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )
      .then((trip) => {
        if (!trip) {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        res.send(trip);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res
          .status(500) // server error
          .json(err);
      });
  });
};

module.exports = {
  tripList,
  tripListByCode,
  tripsAddTrip,
  tripsUpdateTrip,
};
