const roomEndPoint = 'http://localhost:3000/api/rooms';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }

}
let message = null;
const rooms = async function(req, res,next){
    await fetch(roomEndPoint, options)
    .then(res=> res.json())
    .then(json => {
        // console.log(json);
        
        if(!(json instanceof Array)){
            message = 'API lookup error';
            json=[];
        }else if(!json.length){
                message = 'No rooms exist in our database';
            }
        res.render('rooms', {
            title: 'Rooms', 
            rooms: json,
            isRoom: true 
        });
    })
    .catch(err => res.status(500).send(err.message));

}

module.exports = {
    rooms
};