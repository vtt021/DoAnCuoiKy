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
productController.getBread = async(req, res) => {
    try {
        const breads = await product.getBread();
        res.render('bread', {
            data: breads
        });
    } catch (error) {
        console.log("Erroo in get Bread  " + error)
    }
}
productController.getVegetable = async(req, res) => {
    try {
        const Vegetables = await product.getVegetable();
        res.render('vegetables', {
            data: Vegetables
        });
    } catch (error) {
        console.log("Erroo in get vegetable  " + error)
    }
}
productController.getPet = async(req, res) => {
    try {
        const Pets = await product.getPet();
        res.render('pet', {
            data: Pets
        });
    } catch (error) {
        console.log("Erroo in get Pet  " + error)
    }
}
module.exports = productController;