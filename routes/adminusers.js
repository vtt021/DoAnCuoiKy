var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/ahth2');

const adminController = require('../controller/adminController')

router.get('/', ensureAuthenticated, adminController.getAll);

module.exports = router;