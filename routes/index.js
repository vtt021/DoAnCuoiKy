var express = require('express');
var router = express.Router();
const samphamController = require('../controller/controller')

router.get('/', samphamController.getAll);

/* POST home page. */
router.post('/', function(req, res, next) {
    res.render('index', {});
});
module.exports = router;