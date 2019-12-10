const express = require('express');
const router = express.Router()
const Joi = require('joi')
const passport = require('passport')

const User = require('../models/user')


//validation schema

const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required(),
  confirmationPassword: Joi.any().valid(Joi.ref('password')).required()
})
router.get('/', function (req, res, next) {
  res.render('login', { title: ' ', option: 0 });
});
router.post('/', function (req, res, next) {
  res.render('login', { title: 'Đăng nhập thành công', option: 1});
});
// phuong thuc GET 
router.get('/login2', function (req, res, next) {
  res.render('login', { title: ' ', option: 2 });
});

router.get('/register', function (req, res) {
  res.render('index')
});
// phuong thuc POST
router.post('/register', async (req, res, next) => {
  try {
    const result = Joi.validate(req.body, userSchema)
    if (result.error) {
      req.flash('error', 'Dữ liệu không hợp lệ, mời nhập lại.')
      res.redirect('/login')
      return
    }

    const user = await User.findOne({ 'email': result.value.email })
    if (user) {
      req.flash('error', 'Email đã được sử dụng.')
      res.redirect('/login')
      return
    }

    const hash = await User.hashPassword(result.value.password)

    delete result.value.confirmationPassword
    result.value.password = hash

    const newUser = await new User(result.value)
    await newUser.save()

    req.flash('success', 'Đăng ký thành công, hãy đăng nhập')
    res.redirect('/login', { option: 2 })

  } catch (error) {
    next(error)
  }
});
module.exports = router