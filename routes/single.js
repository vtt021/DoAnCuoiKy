var express = require('express');
var router = express.Router();

const productController = require('../controller/productController')

router.post('/', productController.getSingle);

module.exports = router;