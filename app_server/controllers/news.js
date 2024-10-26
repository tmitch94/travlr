var fs = require('fs');
var newsType = JSON.parse(fs.readFileSync(`data/news.json`, `utf-8`));
var latestNews = JSON.parse(fs.readFileSync(`data/latestnews.json`, `utf-8`));
var tips = JSON.parse(fs.readFileSync(`data/vacationTips.json`, `utf-8`));

/*GET Newspage*/
const news = (req,res) => {
    res.render('news', {
        title: "Travlr Getaways",
        newsType,
        latestNews,
        tips,
        isNews: true
    });
};

module.exports = {
    news
}