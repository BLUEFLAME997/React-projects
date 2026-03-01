import React, { useState } from 'react'

const CartItem = ({element}) => {
  const [count,setCount]=useState(1);
  console.log(element)
  return (
    <div className='cart-item'>
      <div className="item-image">
        <img src={element.image} alt="" />
      </div>
      <div className="item-detail">
        <div className="item-detail-upper">
          <h3>{element.name}</h3>
          <p>{element.price}</p>
        </div>
        <div className="item-detail-lower">
          <div className="lower-left">
            <button
            onClick={()=>{
              setCount(count-1)
            }}><i className="ri-subtract-line"></i></button>
            <p>{element.count}</p>
            <button
            onClick={()=>{
              setCount(count+1)
            }}><i className="ri-add-line"></i></button>
          </div>
          <button><i className="ri-delete-bin-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
