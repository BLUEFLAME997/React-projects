import React, { useState } from 'react'
import { useContext } from 'react';
import { productDataContext } from '../Context/ProductData';
import TechStoreLogo from './TechStoreLogo';

const NavBar = () => {
  const data = useContext(productDataContext)

  return (
    <nav>
      <div className="upper-content">
        <TechStoreLogo/>
        <div className="nav-links">
          <button className="cart-link">
            <i className="ri-shopping-cart-2-line"></i>
          </button>
          <button className="nav-button"
            onClick={() => {
              data.setIsOpen(!data.isOpen)
            }}>
            {data.isOpen? <i className="ri-menu-line"></i> : <i className="ri-close-large-line"></i>}
          </button>
        </div>
      </div>
      <div className={`navigation-links ${data.isOpen?"navigation-close":"navigation-active"}`}>
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a>
      </div>
    </nav>
  )
}

export default NavBar