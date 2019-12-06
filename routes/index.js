var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
/*
// Connection URL
const url = 'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority'||'mongodb://localhost:27017';
// Database Name
const dbName = 'QuanLySanPham';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  router.get('/', function (req, res, next) {
    var collection = db.collection('Products');
    var data2 = Array;
    collection.find({}).toArray(function (e, docs) {
      console.log(docs);
      data2 = docs;
    });
    collection.find({}).toArray(function (e, docs) {
      router.get('/', function (req, res, next) {
        res.render('index', {
          "data": docs,
          "data2": data2
        });
      });
    });
  });
});

*/


const uri = 'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority';
//'mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority' ||
//'mongodb://localhost:27017'
const client = new MongoClient(uri, { useNewUrlParser: true });
const dbName = 'QuanLySanPham';
client.connect(err => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  var collection = db.collection('Products');
  var data2 = Array;
  collection.find({}).toArray(function (e, docs) {
    data2 = docs;
    console.log(docs);
    console.log("done");
    router.get('/', function (req, res, next) {
      res.render('index', {
        "data": data2
      });
    });
  });
  // perform actions on the collection object
  client.close();
});

/* GET home page. */
module.exports = router;
