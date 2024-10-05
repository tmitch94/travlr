/*GET travel view */
const tripEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }

}


// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync(`./data/trips.json`, `utf-8`));

const travel = async function(req, res,next){
    await fetch(tripEndpoint, options)
    .then(res=> res.json())
    .then(json => {
        console.log(json);
        res.render('travel', {
            title: 'Travlr Getaways', 
            trips: json,
            isTravel: true 
        });
    })
    .catch(err => res.status(500).send(err.message));

}

module.exports = {
    travel
};