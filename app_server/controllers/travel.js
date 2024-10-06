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
let message = null;
const travel = async function(req, res,next){
    await fetch(tripEndpoint, options)
    .then(res=> res.json())
    .then(json => {
        // console.log(json);
        
        if(!(json instanceof Array)){
            message = 'API lookup error';
            json=[];
        }else if(!json.length){
                message = 'No trips exist in our database';
            }
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