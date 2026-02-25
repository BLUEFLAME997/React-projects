import React from 'react'
import { NavLink } from 'react-router-dom'
import RatingCompo from '../Components/RatingCompo';

const Home = () => {
  const ratingData1=[{top:"10K+",bottom:"Happy Customers"},{top:"500+",bottom:"Products"}];
  const ratingData2=[{top:"50+",bottom:"Brands"},{top:"4.9★",bottom:"Rating"}];
  return (
    <div className='home-page'>
      <section className='top-layer-section'>
        <div className="top-layer-section-content1">
          <div className="new-arrivals">
            ⚡ New arrivals every week
          </div>
          <h1>Welcome to <span>TechStore</span></h1>
          <p>Discover the latest and greatest in technology. From smartphones to laptops, we have everything you need to stay connected and productive.</p>
          <div className="section-content1-buttons">
              <NavLink to='/product' id='btn1'>Show Now <i className="ri-arrow-right-long-line"></i></NavLink>
              <NavLink to='/about' id='btn2'>Learn more</NavLink>
          </div>
        </div>
        <div className="top-layer-section-content2">
          <img src="https://i.pinimg.com/736x/0c/9e/d4/0c9ed4627fca6ee7c0f47d724dbfb9ca.jpg" alt="" />
          <div className="section-content2-price">
            <p>Starting from</p>
            <h2>$79.99</h2>
          </div>
        </div>
      </section>
      <section className="rating-section">
        <RatingCompo arr={ratingData1}/>
        <RatingCompo arr={ratingData2}/>
      </section>
    </div>
  )
}

export default Home
