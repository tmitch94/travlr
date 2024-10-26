let express = require('express');
let router = express.Router();
const newsController = require ('../controllers/news')


router.get('/', newsController.news);

module.exports = router;
