var express = require('express');
var router = express.Router();

/* GET mail page */
router.get('/', function(req, res, next) {
    res.render('adminlogin', { title: '' });
});

module.exports = router;