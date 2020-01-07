var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
//User model
let User = require('../models/user');
const usersController = require('../controller/userController')

//Login Page
router.get('/login', (req, res) => res.render('login'));

//Register Page
router.get('/register', (req, res) => res.render('register'));

//Register handle
router.post('/register', usersController.register);

//Login Handle
router.post('/login', usersController.login);


//Logout Handle
router.get('/logout', usersController.logout);

module.exports = router;