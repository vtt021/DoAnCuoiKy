var express = require('express');
var router = express.Router();

/* GET Pet page */
router.get('/', function(req, res, next) {
  res.render('pet', { title: '' });
});

module.exports = router;
