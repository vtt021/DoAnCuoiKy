var express = require('express');
var router = express.Router();

/* GET Bread page */
router.get('/', function(req, res, next) {
  res.render('bread', { title: '' });
});

module.exports = router;
