let express = require('express');
let router = express.Router();
const aboutController = require ('../controllers/about')

/* GET home page. */
router.get('/', aboutController.about);

module.exports = router;
