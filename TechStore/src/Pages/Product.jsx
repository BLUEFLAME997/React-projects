import React, { useState } from 'react'
import '../PageCss/Product.css'
import { productDataContext } from '../Context/ProductData'
import { useContext } from 'react'
import ProductCradSection from '../Components/ProductCradSection'

const Product = () => {
  const data = useContext(productDataContext);
  const [totalItems,setTotalItems]=useState(data.products.length);
  let productsArr=[];
  const changeHandler=(e)=>{
    productsArr=[];
    data.setSearch(e.target.value);
    console.log(data.search);
    productsArr=data.products.filter((elem)=>{
      return elem.category.includes(data.search);
    })
    console.log(productsArr)
    data.setSearchItems([...productsArr]);
  }

  return (
    <div className='product-page'>
      <div className="product-inner-page">
        <div className="product-top-section">
        <h1>All products</h1>
        <p>Explore our complete collection of tech products</p>
      </div>
      <div className="search-section">
        <i class="ri-search-line"></i>
        <input type="text" placeholder='Search Products...'
        onChange={changeHandler}/>
      </div>
      <div className="product-search-buttons">
        <button
        onClick={()=>{
          data.setSearchButton("All Products")
        }}>All Products</button>
        <button
        onClick={()=>{
          data.setSearchButton("Audio")
        }}>Audio</button>
        <button
        onClick={()=>{
          data.setSearchButton("Wearables")
        }}>Wearables</button>
        <button
        onClick={()=>{
          data.setSearchButton("Computers")
        }}>Computers</button>
        <button
        onClick={()=>{
          data.setSearchButton("Photography")
        }}>Photography</button>
        <button
        onClick={()=>{
          data.setSearchButton("Mobile")
        }}>Mobile</button>
        <button
        onClick={()=>{
          data.setSearchButton("Tablets")
        }}>Tablets</button>
      </div>
      <div className="product-items-section">
        <p className='topP'>Showing {totalItems} products</p>
        <ProductCradSection setTotalItems={setTotalItems}/>
      </div>
      </div>
    </div>
  )
}

export default Product
