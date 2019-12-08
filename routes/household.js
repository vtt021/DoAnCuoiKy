var express = require('express');
var router = express.Router();

/* GET household page */
router.get('/', function(req, res, next) {
  res.render('household', { title: '' });
});

module.exports = router;
