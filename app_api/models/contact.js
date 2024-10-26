const mongoose = require('mongoose');  

// Define the contact schema  
const contactSchema = new mongoose.Schema(
    {  
    address: {type: String, required: true},
    phone: {type: String, required: true},
    fax: {type: String, required: true}
});  
const Contacts = mongoose.model('contact', contactSchema);  module.exports = Contacts; 