//const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');

// const require = require('../models/db')
const sanpham = require('../models/sanpham')

const controller = {}

controller.getAll = async(req, res) => {
    try {
        const sanphams = await sanpham.getAll();
        console.log(sanphams)
        res.render(sanphams);
    } catch (error) {
        console.log("Error in getAll sanpham - " + error);
    }
}

module.exports = controller;