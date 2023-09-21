const express = require("express");
const router = require("express").Router();
require("dotenv").config();
const db = require('../models');
const Job = require("../models/data");

router.get('/', (req, res) => {
    db.Job.find()
    .then((job) => {
      res.render('places/more', { job })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
    console.log('test')
  })

router.post('/', async (req, res) => {
  const post = await Job.create(req.body)  
  res.json(post)
  })

router.delete('/:jobId', async (req, res) => {
  let jobId = Number(req.params.jobId)
  if (isNaN(jobId)) {
    res.status(404).json({ message: 'The job id you have requested is invalid'})
  } else {
    const remove = await job.findOne({
      where: { jobId: jobId }
    })
    if (!remove) {
      res.status(404).json({ message: 'The job id you have entered cannot be found'})
    } else {
      await remove.destroy()
      res.json(remove)
    }
  }
})

router.put('/:jobId', async (req, res) => {
  let jobId = Number(req.params.jobId)
  if (isNaN(jobId)) {
    res.status(404).json({ message: 'The job id you have requested is invalid'})
  } else {
    const change = await Job.findOne({
      where: { jobId: jobId },
    })
    if (!change) {
      res.status(404).json({ message: 'The job id you have entered cannot be found'})
    } else {
      Object.assign(change, req.body)
      await change.save()
      res.json(change)
    }
  }
})
