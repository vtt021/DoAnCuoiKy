var express = require('express');
var router = express.Router();

/* GET frozen page */
router.get('/', function(req, res, next) {
  res.render('frozen', { title: '' });
});

module.exports = router;
