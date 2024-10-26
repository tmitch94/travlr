let express = require('express');
let router = express.Router();
const contactController = require ('../controllers/contact')

/* GET home page. */
router.get('/', contactController.contact);

module.exports = router;
