var express = require('express');
var router = express.Router();
const {ensureAuthenticated } = require('../config/auth');
const samphamController = require('../controller/productController')

router.get('/', samphamController.getAll);


//Welcome Page
//router.get('/',(req,res) => res.render('welcome'));

//Dashboard
router.get('/dashboard',ensureAuthenticated,(req,res) =>
 res.render('dashboard', {
     name: req.user.name
 }));



/* POST home page. */
router.post('/', function(req, res, next) {
    res.render('index', {});
});
router.get('/register',(req,res) => res.render('register'));

module.exports = router;