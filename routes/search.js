var express = require('express');
var router = express.Router();

const productController = require('../controller/productController')

router.get('/', (req, res, next) => {
    res.render('search');
})
router.post('/', productController.getName);
router.post('/2', productController.getAdvance);

module.exports = router;