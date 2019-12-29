const express = require('express');
const router = express();
const Joi = require('joi')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('../models/user')
const bodyParser = require("body-parser");

router.use(bodyParser.json());

//router.use(bodyParser.json());
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
router.post('/register', async(req, res, next) => {

    try {
        /*const result = Joi.validate(req.body, userSchema)
        if (result.error) {
            req.flash('error', 'Data entered is not valid. Please try again.')
            res.redirect('/register')
            return
        }
        console.log(result);*/

        const body = req.body;
        const newUser = await new User({ email: req.body.Email, username: req.body.Username, password: req.body.Password, phone: req.body.Phone })
        await newUser.save()

        req.flash('Thành công', 'Bạn đã đăng ký thành công, mời đăng nhập.')
        res.redirect('/login')

    } catch (error) {
        next(error)
    }
});

/*
// PROFILE SECTION =====================
// =====================================
// Đây là trang sẽ được bảo vệ, chỉ những người đã đăng nhập mới có thể xem được
// Chúng ta sẽ sử dụng route middleware để kiểm tra xem người đó đã đăng nhập chưa
// hàm isLoggedIn sẽ làm việc đó.
app.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile.ejs', {
    user: req.user // Lấy thông tin user trong session và truyền nó qua template
  });
});

// =====================================
// LOGOUT ==============================
// =====================================
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// route middleware để kiểm tra một user đã đăng nhập hay chưa?
function isLoggedIn(req, res, next) {
  // Nếu một user đã xác thực, cho đi tiếp
  if (req.isAuthenticated())
    return next();
  // Nếu chưa, đưa về trang chủ
  res.redirect('/');
}*/
module.exports = router