var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const uri ='mongodb+srv://thientin:12345679@cluster0-yf6sd.mongodb.net/test?retryWrites=true&w=majority'||'mongodb://localhost:27017';
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
   
  });
  // perform actions on the collection object
  client.close();
});


router.get('/', function (req, res, next) {
  res.render('index', {
  });
});
/* POST home page. */
router.post('/', function (req, res, next) {
  res.render('index', {  });
});
module.exports = router;
