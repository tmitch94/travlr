var fs = require('fs');
var roomType = JSON.parse(fs.readFileSync(`data/roomStyles.json`, `utf-8`));

const rooms = (req,res) => {
    res.render('rooms', {title: 'Rooms', roomType});
};

module.exports = {
    rooms
};