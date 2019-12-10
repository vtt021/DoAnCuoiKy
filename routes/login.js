var express = require('express');
var router = express.Router();

/* GET About page */
router.get('/', function(req, res, next) {
  res.render('login', { title: '' });
});
router.post('/', function(req, res, next) {
  res.send("Dang nhap thanh cong");
});
router.post('/signin', function(req, res, next) {
  res.send("Tao tai khoan");
});
module.exports = router;
