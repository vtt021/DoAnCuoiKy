var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
/* GET household page */

const uri = 'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority' || 'mongodb://localhost:27017';
//'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority' ||
//'mongodb://localhost:27017'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'QuanLySanPham';
var data = Array;
router.get('/', function(req, res, next) {
    client.connect(err => {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        var collection = db.collection('Household');
        collection.find({}).toArray(function(e, docs) {
            data = docs;
        });
        // perform actions on the collection object
        client.close();
    });

    res.render('household', { data: data });
});
router.get('/', function(req, res, next) {
  res.render('household', { title: '' });
});

module.exports = router;
