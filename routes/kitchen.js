var express = require('express');
var router = express.Router();

/* GET kitchen page */
router.get('/', function(req, res, next) {
  res.render('kitchen', { title: '' });
});

module.exports = router;
