import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="head-links">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </div>
    </nav>
  )
}

export default Navbar
