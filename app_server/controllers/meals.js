var fs = require('fs');
var mealType = JSON.parse(fs.readFileSync(`data/mealType.json`, `utf-8`));

const meals = (req,res) => {
    res.render('meals', {
        title: 'Meals', 
        mealType,
        isMeal: true});
};

module.exports = {
    meals
};