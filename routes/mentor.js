const express = require('express')
const router = express.Router()

const MentorController = require('../controllers/mentor/MentorController')
const authenticate = require('../middleware/authenticate')

router.get('/', MentorController.index)
router.post('/show', MentorController.showMentor)
router.post('/add', MentorController.addMentor)
router.post('/update', MentorController.updateMentor)
router.post('/delete', MentorController.deleteMentor)

module.exports = router
