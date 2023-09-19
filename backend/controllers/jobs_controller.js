const express = require ('express')
const router = express.Router()
const Job = require('../models/job')

//get all jobs
router.get('/', function (req, res, next) {
    Job.find( {}).then(function (jobs) {
        res.send(jobs)
    }).catch(next)
})

//get one job
router.get('/:id', function (req, res, next) {
    Job.findOne({_id: req.params.id })
        .then(function (job) {
        res.send(job)
    }).catch(next)
})

//Create
router.post('/', function (req, res, next) {
    console.log (req.body)
    Job.create(req.body)
        .then(function (job) {
            res.send(job)
    }).catch(next)
})

//update job
router.put('/:id', function (req, res, next) {
    Job.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function () {
            Job.findOne({_id: req.params.id}).then(function (job) {
                res.send(job)
            })
        }).catch(next)
})

//delete job
router.delete('/:id', function (req, res, next) {
    Job.findByIDandRemove({_id: req.params.id })
        .then(function (job) {
        res.send(job)
    }).catch(next)
})

module.exports = router