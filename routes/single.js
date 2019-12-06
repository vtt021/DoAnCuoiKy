var express = require('express');
var router = express.Router();

/* GET Single page */
router.get('/', function(req, res, next) {
  res.render('single', { title: '' });
});

module.exports = router;
