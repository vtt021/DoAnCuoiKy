const assert = require('assert');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
//User model
let User = require('../models/user');
const userController = {};
userController.register = (req, res) => {
    const { name, email, password, password2, address, phone, job } = req.body;

    let errors = [];
    //Check require fields
    if (!name || !email || !password || !password2 || !address || !phone || !job) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    //Check password match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }


    //Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2,
            address,
            phone,
            job
        });

    } else {
        //Validation passed
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    //User đã có
                    errors.push({ msg: 'Email is already registered' });
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2,
                        address,
                        phone,
                        job
                    });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password,
                        address,
                        phone,
                        job
                    });

                    //Hash Password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        //Set password to hashed
                        newUser.password = hash;
                        //Save user
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can login');
                                res.redirect('/login');
                            })
                            .catch(err => console.log(err));
                    }))

                }

            });
    }

};

userController.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

userController.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login');
}
module.exports = userController;