//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MIDDLEWARE

//MONGOOSE CONNECT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res => console.log("connected at:", process.env.MONGO_URI))
.catch(err => console.log(err))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to WorkTack')
  })

//LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})