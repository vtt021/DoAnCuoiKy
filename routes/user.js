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
    phone: Joi.number().required()
})
router.get('/register', function(req, res, next) {
    res.render('login', { title: ' ', option: 0 });
});
router.route('/register')
    .post(async(req, res, next) => {
        try {
            const result = Joi.validate(req.body, userSchema)
            if (result.error) {
                req.flash('error', 'Data entered is not valid. Please try again.')
                res.redirect('/register')
                return
            }

            const user = await User.findOne({ 'email': result.value.email })
            if (user) {
                req.flash('error', 'Email is already in use.')
                res.redirect('/register')
                return
            }

            const hash = await User.hashPassword(result.value.password)

            //           delete result.value.confirmationPassword
            result.value.password = hash

            const newUser = await new User(result.value)
            await newUser.save()

            req.flash('Thành công', 'Bạn đã đăng ký thành công, mời đăng nhập.')
            res.redirect('/login')

        } catch (error) {
            next(error)
        }
    })

module.exports = router