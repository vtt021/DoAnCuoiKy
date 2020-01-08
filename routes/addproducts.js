var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/ahth2');
const productController = require('../controller/productController')
router.get('/', ensureAuthenticated, function(req, res, next) {
    res.render('addproducts', { title: '' });
});
router.post('/', productController.New);

module.exports = router;