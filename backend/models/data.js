const mongoose = require('mongoose')
const {Schema } = mongoose

const jobSchema = new Schema ( {
    name: { type: String, required: true },
    title: { type: String},
    location: { type: String},
    contact: { type: String}
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job