var fs = require('fs');
var contacts = JSON.parse(fs.readFileSync(`data/contact.json`, `utf-8`));/*GET Homepage*/

const contact = (req,res) => {
    res.render('contact', {
        title: "Travlr Getaways",
        contacts,
        isContact: true
    });
};

module.exports = {
    contact
}