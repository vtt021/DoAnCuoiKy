//const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');

// const require = require('../models/db')
const product = require('../models/products')
const productController = {}

productController.getIndex = async(req, res) => {
    try {
        const products = await product.getAll();
        res.render('index', { data: products });
    } catch (error) {
        console.log("Error in getIndex - " + error);
    }
}
productController.getName = async(req, res) => {
    try {
        const name = req.body.name.toUpperCase();
        const result = await product.getName(name);
        res.render('result', { data: result, name: req.body.name, price: "", Class: "" })
    } catch (error) {
        console.log("Error in search products - " + error);
    }
}
productController.getAdvance = async(req, res) => {
    try {
        const name = req.body.name.toUpperCase();
        const price = req.body.price;
        const Class = req.body.class;
        const result = await product.getAdvance(name, price, Class);
        res.render('result', { data: result, name: req.body.name, price: req.body.price, Class: req.body.class })
    } catch (error) {
        console.log("Error in search products - " + error);
    }
}
productController.getSingle = async(req, res) => {
    try {
        const id = req.body.id;
        const result = await product.getSingle(id);
        res.render('single', { data: result })
    } catch (error) {
        console.log("Error in search products - " + error);
    }
}
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
        console.log("Error in get Bread  " + error)
    }
}
productController.getVegetable = async(req, res) => {
    try {
        const Vegetables = await product.getVegetable();
        res.render('vegetables', {
            data: Vegetables
        });
    } catch (error) {
        console.log("Error in get vegetable  " + error)
    }
}
productController.getPet = async(req, res) => {
    try {
        const Pets = await product.getPet();
        res.render('pet', {
            data: Pets
        });
    } catch (error) {
        console.log("Error in get Pet  " + error)
    }
}
productController.getDrinks = async(req, res) => {
    try {
        const Drinks = await product.getDrinks();
        res.render('drinks', {
            data: Drinks
        });
    } catch (error) {
        console.log("Error in get Drinks  " + error)
    }
}
productController.getFrozen = async(req, res) => {
    try {
        const Frozens = await product.getFrozen();
        res.render('frozen', {
            data: Frozens
        });
    } catch (error) {
        console.log("Error in get Frozen  " + error)
    }
}
productController.getHousehold = async(req, res) => {
    try {
        const Households = await product.getHousehold();
        res.render('household', {
            data: Households
        });
    } catch (error) {
        console.log("Error in get Household  " + error)
    }
}
module.exports = productController;