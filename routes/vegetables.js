var express = require('express');
var router = express.Router();

/* GET vegetables page */
router.get('/', function(req, res, next) {
  res.render('vegetables', { title: '' });
});

module.exports = router;
