const mealEndPoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }

}


let message = null;
const meals = async function(req, res,next){
    await fetch(mealEndPoint, options)
    .then(res=> res.json())
    .then(json => {
        // console.log(json);
        
        if(!(json instanceof Array)){
            message = 'API lookup error';
            json=[];
        }else if(!json.length){
                message = 'No meals exist in our database';
            }
        res.render('meals', {
            title: 'Meals', 
            meals: json,
            isMeals: true 
        });
    })
    .catch(err => res.status(500).send(err.message));

}

module.exports = {
    meals
};