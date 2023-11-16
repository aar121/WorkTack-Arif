import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
// @ts-ignore
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Job {
  name: string;
  title: string;
  location: string;
  contact: string;
}

const states: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
  'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [job, setJob] = useState<Job>({
    name: "",
    title: "",
    location: "",
    contact: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/jobs/${jobId}`)
      const resData = await response.json()
      setJob(resData)
    }
    fetchData()
  }, [jobId])

  return (
    <Form>
      <Row className="form">
        <Form.Group as={Col} controlId="formBusinessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            value={job.name}
            type="name"
            placeholder="Business name"
            required
            onChange={(e: { target: { value: any; }; }) => setJob({ ...job, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            value={job.title}
            type="title"
            placeholder="Job title"
            required
            onChange={(e: { target: { value: any; }; }) => setJob({ ...job, title: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Form.Group className="form" as={Col} controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          value={job.contact}
          type="number"
          placeholder="Phone number"
          required
          onChange={(e: { target: { value: any; }; }) => setJob({ ...job, contact: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="form" controlId="formAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          value={job.location}
          name="Address"
          placeholder="Business Address"
          required
          onChange={(e: { target: { value: any; }; }) => setJob({ ...job, location: e.target.value })}
        />
      </Form.Group>

      <Row className="form">
        <Form.Group as={Col} controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={job.location}
            name="city"
            placeholder="New York"
            required
            onChange={(e: { target: { value: any; }; }) => setJob({ ...job, location: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            {states.map((state, index) => (
              <option key={index}>{state}</option>
            ))}
          </Form.Select>
          <Form.Control
            value={job.location}
            name="state"
            required
            onChange={(e: { target: { value: any; }; }) => setJob({ ...job, location: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            value={job.location}
            name="zip"
            placeholder="12345"
            required
            onChange={(e: { target: { value: any; }; }) => setJob({ ...job, location: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Button className='submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Edit;