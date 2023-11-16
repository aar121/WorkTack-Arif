import mongoose, { Schema, Document } from 'mongoose';

interface Job extends Document {
  name: string;
  title?: string;
  location?: string;
  contact?: string;
}

const jobSchema: Schema = new Schema({
  name: { type: String, required: true },
  title: { type: String },
  location: { type: String },
  contact: { type: String }
});

const Job = mongoose.model<Job>('Job', jobSchema);

export default Job;