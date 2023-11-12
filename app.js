const express = require('express')
const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')
const routes = require('./routes/routes')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(helmet())


app.use('/v1/dummy_user_data',routes)

// handle undefined routes
app.use('*',(req,res,next)=>{
    const err = new AppError(404,'fail','undefined route')
    next(err,req,res,next)
})

app.use(globalErrorHandler)

module.exports = app