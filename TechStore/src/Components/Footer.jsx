import React from 'react'
import TechStoreLogo from './TechStoreLogo'

const Footer = () => {
  const link1Arr=["Home","Products","About","Contact"];
  const link2Arr=["Email:info@techstore.com","Phone:(555) 123-4567","Mon-Fri:9AM"]
  return (
    <footer>
      <div className="footer-upper-content">
        <div className="footer-logo">
          <TechStoreLogo/>
          <h2>Your one-stop shop for the latest tech products. Quality, affordability, and excellent service.</h2>
          <div className="footer-logo-icons">
            <div className="footer-icon">
              <i class="ri-facebook-circle-fill"></i>
            </div>
            <div className="footer-icon">
              <i class="ri-twitter-fill"></i>
            </div>
            <div className="footer-icon">
              <i class="ri-instagram-line"></i>
            </div>
          </div>
        </div>
        <div className="page-links">
          <h1>Quick Links</h1>
          <div className="links">
            
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-lower-content">
        <p>© 2026 TechStore. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
