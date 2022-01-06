const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamps: true})//timestamps manage createdAt & updated fields 

const User = mongoose.model('User', userSchema)

module.exports = User