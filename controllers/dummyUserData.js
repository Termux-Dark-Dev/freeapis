const DummyUserModel = require('../models/dummyUserModel')

exports.getAllUserData = async (req,res,next)=>{
    try {
        const result = await DummyUserModel.find({},'-_id -__v')
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

exports.getRandomSortedParticularLengthOfUser = async (req,res,next)=>{
    try {
        let count = Math.floor(Math.random()* (20-10+1) + 10)
        let randomNumber = Math.floor(Math.random() * count)
        // The second argument to the find function tells it which fields to include and to which not
        const result = await DummyUserModel.find({},'-_id -__v').limit(Number.parseInt(req.params.usersCount)).skip(randomNumber)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}



/*
--------------------------------------------------------------COMMENTS HERE-------------------------------------------------------------------------
This function was used to generate the fake data

const { faker } = require('@faker-js/faker')
function createRandomUser(){
    return {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      pass: faker.internet.password(),
      dob: faker.date.birthdate(),
    };
  }
exports.insertData = async (req,res,next)=>{
    try {
        const usersArray = faker.helpers.multiple(createRandomUser, {
            count: 600,
          });
        const result = await DummyUserModel.insertMany(usersArray)
        res.send(result)
    } catch (error) {
        next(error)
    }
}
*/