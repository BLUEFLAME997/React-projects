import React from 'react'
import TechStoreLogo from './TechStoreLogo'
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from '../Pages/Home'

const Footer = () => {
  return (
    <footer>
      <div className="footer-upper-content">
        <div className="footer-logo">
          <TechStoreLogo />
          <h2>Your one-stop shop for the latest tech products. Quality, affordability, and excellent service.</h2>
          <div className="footer-logo-icons">
            <div className="footer-icon">
              <i className="ri-facebook-circle-fill"></i>
            </div>
            <div className="footer-icon">
              <i className="ri-twitter-fill"></i>
            </div>
            <div className="footer-icon">
              <i className="ri-instagram-line"></i>
            </div>
          </div>
        </div>
        <div className="page-links">
          <h1>Quick Links</h1>
          <div className="links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/'>Contact</NavLink>
          </div>
        </div>
        <div className="page-contact">
          <h1>Contact</h1>
          <div className="page-contact-content">
            <p>Email: info@techstore.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Mon-Fri:9AM - 6PM</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-lower-content">
        <p>©2026 TechStore. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
