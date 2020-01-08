const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

//Passport
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const admin = mongoose.model('admin', adminSchema, 'users');
admin.getAll = async() => {
    var query = await admin.find({});
    return query;
}
module.exports = admin;