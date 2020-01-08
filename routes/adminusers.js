var express = require('express');
var router = express.Router();

const adminController = require('../controller/adminController')

router.get('/', adminController.getAll);

module.exports = router;