const express  = require('express')
const router = express.Router()
const {getUserData,insertData} = require('../controllers/dummyUserData')

router.get('/getUser',getUserData)
router.post('/addUser',insertData)

module.exports = router