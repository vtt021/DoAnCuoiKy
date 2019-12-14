var mongoose = require('mongoose')

var sanphamSchema = new mongoose.Schema({
    name: String,
    price: String,
    class: String
});

module.exports = mongoose.model('Pet', sanphamSchema);