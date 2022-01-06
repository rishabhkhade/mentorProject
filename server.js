const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./routes/employee')
const MentorRoute = require('./routes/mentor')
const AuthRoute = require('./routes/auth')

mongoose.connect('mongodb://localhost:27017/projectdb', {useNewUrlParser: true, useUnifiedTopology: true})//projectdb - database name ; 27017 - default port
const db = mongoose.connection


//while connecting db err found it will give this err
db.on('error', (err) => {
    console.log(err)
})

//otherwise it will connect
db.once('open', () => {
    console.log('Database Connection Established!');
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//if req url comes in encoded or json format we can work with it

const PORT = process.env.PORT || 3000

//any port is declared on env file it will take that port or it will
//take 3000 as a port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use('/employee', EmployeeRoute)
app.use('/admin/mentor', MentorRoute)
app.use('/api', AuthRoute)