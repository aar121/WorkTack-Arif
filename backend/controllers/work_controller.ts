import express, { Request, Response } from "express";
import { Router } from "express";
import dotenv from "dotenv";
import db from '../models/data';
import Job  from "../models/data";

dotenv.config();
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    db.Job.find()
    .then((job: Job[]) => {
      res.render('places/more', { job })
    })
    .catch((err: any) => {
      console.log(err)
      res.render('error404')
    })
    console.log('test')
  })

router.post('/', async (req: { body: any; }, res: { json: (arg0: any) => void; }) => {
  const post = await Job.create(req.body)  
  res.json(post)
  })

router.delete('/:jobId', async (req: { params: { jobId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; json: (arg0: any) => void; }) => {
  let jobId = Number(req.params.jobId)
  if (isNaN(jobId)) {
    res.status(404).json({ message: 'The job id you have requested is invalid'})
  } else {
    const remove = await Job.findOne({
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

router.put('/:jobId', async (req: { params: { jobId: any; }; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; json: (arg0: any) => void; }) => {
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