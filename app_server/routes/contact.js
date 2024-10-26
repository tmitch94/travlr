let express = require('express');
let router = express.Router();
const contactController = require ('../controllers/contact')


router.get('/', contactController.contact);

module.exports = router;
