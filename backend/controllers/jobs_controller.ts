//const express = require ('express')
const router = express.Router()
//const Job = require('../models/job')

// INDEX
router.get('/', function (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }, next: any) {
    Job.find( {}).then(function (jobs: any) {
        res.status(200).json(jobs)
    }).catch(next)
})

//Show all jobs
router.get('/', function (req: any, res: { send: (arg0: any) => void }, next: any) {
    Job.find( {}).then(function (jobs: any) {
        res.send(jobs)
    }).catch(next)
})

//get one job
router.get('/:id', function (req: { params: { id: any } }, res: { send: (arg0: any) => void }, next: any) {
    Job.findOne({_id: req.params.id })
        .then(function (job: any) {
        res.send(job)
    }).catch(next)
})

//Create
router.post('/', function (req: { body: any }, res: { send: (arg0: any) => void }, next: any) {
    console.log (req.body)
    Job.create(req.body)
        .then(function (job: any) {
            res.send(job)
    }).catch(next)
})

//update job
router.put('/:id', function (req: { params: { id: any }; body: any }, res: { send: (arg0: any) => void }, next: any) {
    Job.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function () {
            Job.findOne({_id: req.params.id}).then(function (job: any) {
                res.send(job)
            })
        }).catch(next)
})

//delete job
router.delete('/:id', function (req: { params: { id: any } }, res: { send: (arg0: any) => void }, next: any) {
    Job.findByIDandRemove({_id: req.params.id })
        .then(function (job: any) {
        res.send(job)
    }).catch(next)
})

module.exports = router