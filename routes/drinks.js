var express = require('express');
var router = express.Router();

/* GET Drink page */
router.get('/', function(req, res, next) {
  res.render('drinks', { title: '' });
});

module.exports = router;
