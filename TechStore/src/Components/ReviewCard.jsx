import React from 'react'

const ReviewCard = ({element}) => {
  return (
    <div className='review-card'>
      <div className="review-icon">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
      </div>
      <h1>"{element.review}"</h1>
      <div className="review-name">
        <p id='p1'>{element.name}</p>
        <p id='p2'>{element.type}</p>
      </div>
    </div>
  )
}

export default ReviewCard
