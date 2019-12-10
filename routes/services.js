var express = require('express');
var router = express.Router();

/* GET Pet page */
router.get('/', function(req, res, next) {
  res.render('services', { title: '' });
});

module.exports = router;
