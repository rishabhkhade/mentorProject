const { response } = require('express')
const Mentor = require('../../models/Mentor')

//show the list of Mentor from db
const index = (req, res, next) => {
    Mentor.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error Occured!'
        })
    })
}

//show single mentor by id
const showMentor = (req, res ,next) => {
    let mentorId = req.body.mentorId
    Mentor.findById(mentorId)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : 'An error Occured!'
        })
    })
}

//add new mentor
const addMentor = (req, res, next) => {
    let mentor = new Mentor({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    mentor.save()
    .then(response => {
        res.json({
            message: 'Mentor Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//update an mentor 
const updateMentor = (req, res, next) => {
    let mentorId = req.body.mentorId

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Mentor.findByIdAndUpdate(mentorId, {$set: updateData})
    .then(response => {
        res.json({
            message: 'Mentor Updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//delete an mentor
const deleteMentor = (req, res ,next) =>{
    let mentorId = req.body.mentorId

    Mentor.findByIdAndRemove(mentorId)
    .then(() => {
        res.json({
            message: 'Mentor deleted successfully'
        })
    })
    .catch(errror => {
        res.json({
            message: 'An Error Occured!'
        })
    })

}

module.exports = {
    index, showMentor, addMentor, updateMentor, deleteMentor
}