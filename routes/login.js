const express = require('express');
const router = express();
const Joi = require('joi')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('../models/user')
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect("mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/QuanLySanPham?retryWrites=true&w=majority" || "mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    //validation schema

const userSchema = Joi.object().keys({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().required()
});
router.get('/', function(req, res, next) {
    res.render('login', { title: ' ', option: 0 });
});
// Xử lý thông tin khi có người thực hiện đăng nhập
router.post('/', function(req, res, next) {
    res.render('login', { title: 'Đăng nhập thành công', option: 1 }); {

    }
});


// Dang ky 

router.get('/register', function(req, res) {
    res.render('index')
});
// phuong thuc POST
router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/profile', // chuyển hướng tới trang được bảo vệ
    failureRedirect: '/index', // trở lại trang đăng ký nếu có lỗi
    failureFlash: true // allow flash messages
}));

module.exports = router