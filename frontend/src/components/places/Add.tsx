import React, { useState } from 'react';
// @ts-ignore
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Job {
  name: string;
  title: string;
  location: string;
  contact: string;
}

const AddJob: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();

  const [job, setJob] = useState<Job>({
    name: "",
    title: "",
    location: "",
    contact: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });

    navigate('/jobs');
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

  return (
    <div className='form-container'>
      <Form onSubmit={handleSubmit}>
        <Row className="form">
          <Form.Group as={Col} controlId="formBusinessName">
            <Form.Label>Business Name</Form.Label>
            <Form.Control type="name" placeholder="Business name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formJobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="title" placeholder="Job Title" />
          </Form.Group>
        </Row>

        <Form.Group className="form" as={Col} controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="form" controlId="formAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="123 Main St" />
        </Form.Group>

        <Row className="form">
          <Form.Group as={Col} controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              {states.map((state, index) => (
                <option key={index}>{state}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button className='submit' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddJob;