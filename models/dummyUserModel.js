const  mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    email:String,
    pass:String,
    dob:Date,
})

const dummyUserModel = mongoose.model('DummyUserDB',userSchema)

module.exports = dummyUserModel