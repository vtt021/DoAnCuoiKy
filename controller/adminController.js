const assert = require('assert');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
//admin model
let User = require('../models/user');

let admin = require('../models/admin');
const product = require('../models/products')

const adminController = {};


adminController.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/adminprofile',
        failureRedirect: '/adminregister',
        failureFlash: true
    })(req, res, next);
}
adminController.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/loginadmin');
}
adminController.getUpdate = (req, res) => {
    const { id, name, email, oldpass, password, password2, phone, address, job } = req.body;
    let errors = [];
    User.findOne({ _id: id })
        .then(admin => {
            User.findOne({ email: email })
                .then(admin2 => {
                    if (admin2) {
                        //Mail đã được đăng ký
                        errors.push({ msg: 'Email is already registered' });
                    }
                });
            // if (admin.password !== oldpass) {
            //     errors.push({ msg: 'OldPasswords do not match' });
            // }
            if (password !== password2) {
                errors.push({ msg: 'Passwords do not match' });
            }
            if (password.length < 6) {
                errors.push({ msg: 'Password should be at least 6 characters' });
            }
            if (errors.length > 0) {
                console.log(errors)
                res.render('adminprofile', {
                    errors,
                    id,
                    name: admin.name,
                    email: admin.email,
                    address: admin.address,
                    phone: admin.phone,
                    job: admin.job
                });
            } else {
                if (name) {
                    admin.name = name;
                }
                if (email) {
                    admin.email = email;
                }
                if (password.length > 6) {
                    admin.password = password;
                }
                if (phone) {
                    admin.phone = phone;
                }
                if (address) {
                    admin.address = address;
                }
                if (job) {
                    admin.job = job;
                }
                admin.save();
                console.log("DONE UPDATE");
                res.render('adminprofile', {
                    errors,
                    id,
                    name: admin.name,
                    email: admin.email,
                    address: admin.address,
                    phone: admin.phone,
                    job: admin.job
                });
            }
        })
}
adminController.register = (req, res) => {
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
        console.log(errors)
        res.render('adminregister', {
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
            .then(admin => {
                if (admin) {
                    //admin đã có
                    errors.push({ msg: 'Email is already registered' });
                    console.log(errors)
                    res.render('adminregister', {
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
                    const newadmin = new User({
                        name,
                        email,
                        password,
                        address,
                        phone,
                        job
                    });

                    //Hash Password
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newadmin.password, salt, (err, hash) => {
                        if (err) throw err;
                        //Set password to hashed
                        newadmin.password = hash;
                        //Save admin
                        newadmin.save()
                            .then(admin => {
                                req.flash('success_msg', 'You are now registered and can login');
                                res.redirect('/loginadmin');
                            })
                            .catch(err => console.log(err));
                    }))

                }

            });
    }

};
adminController.getAll = async(req, res) => {
    try {
        const admins = await admin.getAll();
        res.render('adminusers', { data: admins });
    } catch (error) {
        console.log("Error in getAll admins - " + error);
    }
}
adminController.getAllProducts = async(req, res) => {
    try {
        const products = await product.getAll();
        res.render('adminproducts', { data: products });
    } catch (error) {
        console.log("Error in getAll products - " + error);
    }
}
module.exports = adminController;