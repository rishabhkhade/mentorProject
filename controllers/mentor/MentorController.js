const { response } = require('express')
const Employee = require('../../models/Employee')

//show the list of Employee from db
const index = (req, res, next) => {
    Employee.find()
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

//show single employee by id
const showEmployee = (req, res ,next) => {
    let employeeId = req.body.employeeId
    Employee.findById(employeeId)
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

//add new employee
const addEmployee = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//update an employee 
const updateEmployee = (req, res, next) => {
    let employeeId = req.body.employeeId

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(employeeId, {$set: updateData})
    .then(response => {
        res.json({
            message: 'Employee Updated Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured!'
        })
    })
}

//delete an employee
const deleteEmployee = (req, res ,next) =>{
    let employeeId = req.body.employeeId

    Employee.findByIdAndRemove(employeeId)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(errror => {
        res.json({
            message: 'An Error Occured!'
        })
    })

}

module.exports = {
    index, showEmployee, addEmployee, updateEmployee, deleteEmployee
}