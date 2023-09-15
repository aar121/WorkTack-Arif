const express = require("express");
const router = require("express").Router();
require("dotenv").config();
const db = require('../models')

router.get('/', (req, res) => {
    db.Job.find()
    .then((job) => {
      res.render('places/more', { job })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
  