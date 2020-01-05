var mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    class: { type: String, required: true }
});
const product = mongoose.model('Product', productSchema, 'Products')

product.getAll = async() => {
    var query = await product.find({});
    return query;
}
product.getName = async function(err, docs) {
    let query = await product.find({ name: docs })
    return query;
}
module.exports = product