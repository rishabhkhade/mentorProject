const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const mentorSchema = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    },
}, {timestamps: true})//timestamps manage createdAt & updated fields 

const Mentor = mongoose.model('Mentor', mentorSchema)
module.exports = Mentor