const DummyUserModel = require('../models/dummyUserModel')

exports.getUserData = async (req,res,next)=>{
    try {
        const result = await DummyUserModel.find()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

exports.insertData = async (req,res,next)=>{
    try {
        const result = await DummyUserModel.create({name:"villan",email:"villan@gmail.com",pass:"testpassvilla111",dob:new Date(2008,10,19,0,0,0)})
        res.send(result)
    } catch (error) {
        next(error)
    }
}