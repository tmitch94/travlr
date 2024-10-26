const mongoose = require('mongoose');  

// Define the trip schema  
const roomSchema = new mongoose.Schema(
    {  code: { type: String, required: true, index: true },  
    name: { type: String, required: true, index: true },  
    start: { type: Date, required: true }, 
    end: {type: Date, required: true },  
    image: { type: String, required: true },  
    description: { type: String, required: true },
    rate: { type: String, required: true }
});  
const Rooms = mongoose.model('rooms', roomSchema);  module.exports = Rooms; 