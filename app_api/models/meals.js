const mongoose = require('mongoose');  

// Define the meal schema  
const mealSchema = new mongoose.Schema(
    {  name: { type: String, required: true, index: true },  
    image: { type: String, required: true, index: true },   
    subname: { type: String, required: true },  
    description: { type: String, required: true },
});  
const Meals = mongoose.model('meals', mealSchema);  module.exports = Meals; 