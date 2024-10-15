import React from 'react'

function Contact() {
  return (
    <div className='container my-3'>
      <div className="form-floating mb-3 my-3">
  <input type="email" className="form-control col-sm-5" id="floatingInput" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3 my-3">
  <input type="password" className="form-control col-sm-5" id="floatingPassword" placeholder="Password" />
  <label htmlFor="floatingPassword">Password</label>
</div>
<div className="col-auto my-3">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
    </div>
    
  )
}

export default Contact
