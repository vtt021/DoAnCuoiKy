var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/ahth2');
const adminController = require('../controller/adminController')

/* GET About page */
router.get('/', ensureAuthenticated, (req, res) =>
    res.render('adminprofile', {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        address: req.user.address,
        phone: req.user.phone,
        job: req.user.job

    }));
router.post('/', adminController.getUpdate);

module.exports = router;