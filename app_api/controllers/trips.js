const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

/**
 * GET: /trips - lists all the trips
 * Regardless of outcome, response must include HTML status code
 * and JSON message to the requesting client 
 */
const tripList = async(req, res) =>{
    const q = await Model
    .find({})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {
    tripList
};

const tripListByCode = async(req, res) =>{
    const q = await Model
    .find({'code': req.params.tripCode})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};

module.exports = {
    tripList,
    tripListByCode
};



