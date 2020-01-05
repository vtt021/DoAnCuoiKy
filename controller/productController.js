//const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');

// const require = require('../models/db')
const product = require('../models/products')

const productController = {}

productController.getAll = async(req, res) => {
    try {
        const products = await product.getAll();
        res.render('products', { data: products });
    } catch (error) {
        console.log("Error in getAll products - " + error);
    }
}

module.exports = productController;