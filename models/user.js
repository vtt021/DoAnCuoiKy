const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

// 2
const userSchema = new Schema({
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true}
}, {

    // 3
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})
module.exports.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password, salt)
    } catch (error) {
        throw new Error('Hashing failed', error)
    }
}
// 4
const User = mongoose.model('user', userSchema)
module.exports = User