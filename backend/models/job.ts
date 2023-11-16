//const mongoose = require('mongoose')
const Schema = mongoose.Schema

//job Schema//
const JobSchema = new Schema ({
    business: String, 
    title: String,
    location: String,
    description: String,
    isAvailable:{
        type: Boolean,
        default: true 
    }
})

const Job = mongoose.model('jobs', JobSchema)

module.exports = Job