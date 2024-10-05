const Mongoose = require('./db');
const Trip = require('./travlr');
const Room = require('./room');

//Read seed data from json File
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));
var rooms = JSON.parse(fs.readFileSync('./data/roomStyles.json', 'utf-8'));

//delete any existing records then insert seed data
const seedDB = async()=>{
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    await Room.insertMany(rooms);
};

//Close the MongoDB connection and exit
seedDB().then(async() =>{
    await Mongoose.connection.close();
    process.exit(0);
});