const express  = require('express')
const router = express.Router()
const {getAllUserData, getRandomSortedParticularLengthOfUser} = require('../controllers/dummyUserData')


router.get('/getUser',getAllUserData)
router.get('/getUser/:usersCount',getRandomSortedParticularLengthOfUser)

module.exports = router


/*
--------------------------------------------------------------COMMENTS HERE-------------------------------------------------------------------------

This route was used for inserting data in local env.

const {insertData} = require('../controllers/dummyUserData')
router.post('/addUser',insertData)
*/