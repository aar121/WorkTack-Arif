const React = require('react')
const NavBar = require('../NavBar.jsx')

function AddJob () {
    return (

          <main>
            <h1>Add a Job Listing</h1>
            <form method="POST" action="/places">
  <div className="form-group">
    <label htmlFor="name">Business Name</label>
    <input className="form-control" 
            id="name"
            name="name"
            type= "text" required />
  </div>
  <div className="form-group">
    <label htmlFor="title">Job Title</label>
    <input className="form-control"
           id="title" 
           name="title"
           type="text" required />
  </div>
  <div className="form-group">
    <label htmlFor="location">Location</label>
    <input className="form-control"
           id="location" 
           name="location" required />
  </div>
  <div className="form-group">
    <label htmlFor="contact">Contact Info</label>
    <input className="form-control" 
            id="contact" 
            name="contact"
            type= "number" required />
  </div>
  <input className="btn btn-primary" type="submit" value="Add Job" />
</form>
          </main>
    )
}

export default AddJob;
