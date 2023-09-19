//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/worktack')
mongoose.Promise = global.Promise

// ROUTES
app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.get('/', (req, res) => {
  res.send('Welcome to WorkTack')
  })

// ERROR HANDLING MIDDLEWARE
app.use(function (err, req, res, next) {
  res.status(422).send({error: err.message})
})

//LISTEN
app.listen(process.env.port || 5001, () => {
    console.log('listening on port', PORT)
})