var fs = require('fs');
var mealType = JSON.parse(fs.readFileSync(`data/mealType.json`, `utf-8`));

const meals = (req,res) => {
    res.render('meals', {
        title: 'Meals', 
        mealType,
        isMeals: true});
};

module.exports = {
    meals
};