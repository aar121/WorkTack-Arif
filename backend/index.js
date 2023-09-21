//DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/worktack')
mongoose.Promise = global.Promise

//ROOT Index
app.get('/', (req, res) => {
  res.send('Welcome to WorkTack')
  })

//Jobs   
app.use(bodyParser.json())

app.use('/jobs', require('./controllers/jobs_controller'))


// ERROR HANDLING MIDDLEWARE
app.use(function (err, req, res, next) {
  res.status(422).send({error: err.message})
})

//LISTEN
app.listen(process.env.port || 5000, () => {
    console.log('listening on port', PORT)
})