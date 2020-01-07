var express = require('express');
var router = express.Router();

const productController = require('../controller/productController')

router.get('/', productController.getHousehold);

module.exports = router;