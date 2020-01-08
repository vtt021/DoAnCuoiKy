var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const userController = require('../controller/userController')

/* GET About page */
router.get('/', ensureAuthenticated, (req, res) =>
    res.render('profile', {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        address: req.user.address,
        phone: req.user.phone,
        job: req.user.job

    }));
router.post('/', userController.getUpdate);

module.exports = router;