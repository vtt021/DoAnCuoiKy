var express = require('express');
var router = express.Router();
let admin = require('../models/admin');
const { ensureAuthenticated } = require('../config/ahth2');
const adminsController = require('../controller/adminController')

/* GET mail page */
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('admin', { title: '' });
});

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register handle
router.post('/register', adminsController.register);

//Login Handle
router.post('/login', adminsController.login);


//Logout Handle
router.get('/logout', adminsController.logout);

module.exports = router;