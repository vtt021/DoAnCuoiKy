var mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    class: { type: String, required: true },
    image: { type: String, required: true },
    sold: { type: Number, required: false }
});
const product = mongoose.model('ALL', productSchema, 'All')

product.getAll = async() => {
    var query = await product.find({});
    return query;
}
product.getSingle = function(id) {
    let query = product.findOne({ _id: id })

    return query;
}
product.getName = function(name) {
    let query = product.find({ name: name })

    return query;
}
product.getAdvance = async function(name, price, Class) {
    let query = await product.find({
        $or: [
            { name: name },
            { price: price },
            { class: Class }
        ]
    })

    return query;
}
product.getBread = async function(err, docs) {
    let query = await product.find({
        class: "Bread & Bakery"
    })

    return query;
}

product.getPet = async function(err, docs) {
    let query = await product.find({ class: "Pet Food" })

    return query;
}
product.getVegetable = async function(err, docs) {
    let query = await product.find({ class: "Vegetables & fruits" })

    return query;
}
product.getFrozen = async function(err, docs) {
    let query = await product.find({ class: "Frozen" })

    return query;
}
product.getDrinks = async function(err, docs) {
    let query = await product.find({
        $or: [
            { class: "Soft Drinks" },
            { class: "Juices" },
            { class: "Energy Drinks" }
        ]
    })

    return query;
}
product.getHousehold = async function(err, docs) {
    let query = await product.find({
        $or: [
            { class: "Cleaning" },
            { class: "Utensils" },
            { class: "Pet Food" }
        ]
    })

    return query;
}
module.exports = product