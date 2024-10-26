const mongoose = require('mongoose');
const Room = require('../models/room');
const Model = mongoose.model('rooms');

const roomList = async(req,res) => {
    const q = await Model
    .find({})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};

const roomListByCode = async(req, res) =>{
    const q = await Model
    .find({'code': req.params.roomCode})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};


module.exports = {
    roomList,
    roomListByCode
};