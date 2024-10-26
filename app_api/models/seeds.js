const Mongoose = require('./db');
const Trip = require('./travlr');
const Room = require('./room');
const Meals = require('./meals');
const News = require('./news');

//Read seed data from json File
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));
var rooms = JSON.parse(fs.readFileSync('./data/roomStyles.json', 'utf-8'));
var meals = JSON.parse(fs.readFileSync('./data/mealType.json', 'utf-8'));
var news = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

//delete any existing records then insert seed data
const seedDB = async()=>{
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    await Room.insertMany(rooms);
    await Meals.insertMany(meals);
    await(News.insertMany(news));
};

//Close the MongoDB connection and exit
seedDB().then(async() =>{
    await Mongoose.connection.close();
    process.exit(0);
});