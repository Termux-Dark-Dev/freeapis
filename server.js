const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.MONGO_URI)
.then((conn)=>{
    console.log("Successfully connected to db!!")
})
.catch((err)=>{
    console.log("A error occured while connecting to mongodb")
    console.log(err)
})

const port = process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`started server on ${port}`)
})
