const mongoose = require('mongoose');
const Meals = require('../models/meals');
const Model = mongoose.model('meals');

const mealList = async(req,res) => {
    const q = await Model
    .find({})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};

const mealListByCode = async(req, res) =>{
    const q = await Model
    .find({'code': req.params.mealCode})
    .exec();


    if (!q) {
        return res.status(404).json(err);
        
        
    } else {
        return res.status(200).json(q);
    }
};


module.exports = {
    mealList,
    mealListByCode
};