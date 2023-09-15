const mongoose = require('mongoose')
const {Schema } = mongoose

const jobSchema = new Schema ( {
    //business name: { type: String, required: true },
    //contact info: { type: String},
    //job title: { type: String},
    location: { type: String}
})

const Job = mongoose.model('Job', jobSchema)

module.exports = Job