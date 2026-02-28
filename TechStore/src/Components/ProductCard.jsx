import React, { useContext } from 'react'
import CartButton from './CartButton'

const ProductCard = ({element}) => {
  return (
    <div className="product-card">
      <h3 className={`${element.topSale?"h3-open":"h3-hide"}`}><i class="ri-star-fill"></i>Top sale</h3>
      <div className="product-image">
        <img src={element.image} alt="" />
      </div>
      <div className="product-detail">
        <p className='product-category'>{element.category}</p>
        <p className='product-name'>{element.name}</p>
        <p className='product-description '>{element.productDescription}</p>
        <div className="product-price-cart">
          <h2>${element.price}</h2>
          <CartButton />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
