/*GET Homepage*/
const index = (req,res) => {
    res.render('index', {
        title: "Travlr Getaways",
        isMain: true
    });
};

module.exports = {
    index
}