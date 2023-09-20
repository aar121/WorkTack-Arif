// import {useState} from "react"
// import {useHistory} from "react-router"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridBusinessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control type="name" placeholder="Business name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridJobTitle">
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="title" placeholder="Job Title" />
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="123 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;

// const React = require('react')
// //const NavBar = require('../NavBar.jsx')

// function AddJob () {

//     // const history = useHistory()

//     // const [place, setPlace] = useState({
//     //   name: '',
//     //   title: '',
//     //   location: '',
//     //   contact: '',
//     // })

//     // async function handleSubmit(e) {
//     //   e.preventDefault()

//     //     await fetch (``, {
//     //       method: 'POST',
//     //       headers: {
//     //           'Content-Type': 'application/json'
//     //       },
//     //       body: JSON.stringify(place)
//     //     })

//     //     history.push(`/places`)
//     // }
//     return (
//           <main>
//             <h1>Add a Job Listing</h1>
//             <form method="POST" action="/places">
//   <div className="form-group">
//     <label htmlFor="name">Business Name</label>
//     <input className="form-control" 
//             id="name"
//             name="name"
//             type= "text" required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="title">Job Title</label>
//     <input className="form-control"
//            id="title" 
//            name="title"
//            type="text" required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="location">Location</label>
//     <input className="form-control"
//            id="location" 
//            name="location" required />
//   </div>
//   <div className="form-group">
//     <label htmlFor="contact">Contact Info</label>
//     <input className="form-control" 
//             id="contact" 
//             name="contact"
//              />
//   </div>
//   <input className="btn btn-primary" type="submit" value="Add Job" />
// </form>
//           </main>
//     )
// }

//export default AddJob;
