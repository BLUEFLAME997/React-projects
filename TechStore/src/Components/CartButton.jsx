import React from 'react'
import { productDataContext } from '../Context/ProductData'
import { useContext } from 'react'

const CardButton = ({id}) => {
  const data = useContext(productDataContext);
  return (
    <button className='cart-button'
    onClick={()=>{
      data.setCurrentItem(id);
    }}>
      <i class="ri-shopping-cart-line"></i>
      <h4>Add</h4>
    </button>
  )
}

export default CardButton
