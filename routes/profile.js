var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

/* GET About page */
router.get('/', ensureAuthenticated, (req, res) =>
    res.render('profile', {
        userdata: req.user

    }));
module.exports = router;