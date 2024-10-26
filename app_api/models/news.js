const mongoose = require('mongoose');  

// Define the meal schema  
const newsSchema = new mongoose.Schema(
    {  title: { type: String, required: true, index: true },  
    image: { type: String, required: true, index: true },   
    date: { type: Date, required: true },  
    author: { type: String, required: true },
    description: {type: String, require: true}
});  
const News = mongoose.model('news', newsSchema);  module.exports = News; 