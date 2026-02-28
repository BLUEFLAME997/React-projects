import React from 'react'

const GetInTouchSection = () => {
  return (
    <div className='get-in-touch-section'>
      <div className="get-in-touch-heading">
        <h3>Get in touch</h3>
        <p>Have questions? We'd love to hear from you. Reach out to us at:</p>
      </div>
      <div className="get-in-touch-card">
        <div className="card">
          <h3>Email</h3>
        <p>info@techstore.com</p>
        </div>
        <div className="card">
          <h3>Phone</h3>
          <p>(555) 123-4567</p>
        </div>
        <div className="card">
          <h3>Address</h3>
          <p>123 Tech Street, Silicon Valley, CA</p>
        </div>
      </div>
    </div>
  )
}

export default GetInTouchSection
