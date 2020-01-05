var mongoose = require('mongoose')
const Schema = mongoose.Schema

const sanphamSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    class: { type: String, required: true }
});
const sanpham = mongoose.model('SanPham', sanphamSchema, 'Products')

sanpham.getAll = async() => {
    var query = await sanpham.find({});
    console.log(query)
    return query;
}

module.exports = sanpham