import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import RatingCompo from '../Components/RatingCompo';
import { useContext } from 'react';
import { productDataContext } from '../Context/ProductData';
import CartButton from '../Components/CartButton';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  const data = useContext(productDataContext);
  const elem=data.products.filter((elem)=>{
    if(elem.topSale===true) return elem;
  })
  const [topSales,setTopSales]=useState([...elem]);
  
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
      <section className="top-sales">
        <div className="top-sales-heading">
          <h1><i class="ri-star-fill"></i>Top Sales</h1>
          <p>Our most popular products loved by thousands of customers</p>
        </div>
        <div className="top-sales-card-items">
          {topSales.map((elem,idx)=>{
            return <ProductCard key={idx} element={elem}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
