var express = require('express');
var router = express.Router();

const mongodb = require('../models/db')
    //let db = mongodb.collection('Drinks');
router.get('/', function(req, res) {
    var collection = db.collection('Drinks');
    collection.find({}).toArray(function(e, docs, next) {
        res.render('drinks', { data: docs });
    });
    // perform actions on the collection object
    //client.close();
});
module.exports = router;