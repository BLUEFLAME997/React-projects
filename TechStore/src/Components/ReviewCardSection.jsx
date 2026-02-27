import React from 'react'
import ReviewCard from './ReviewCard';

const ReviewCardSection = () => {
  const testimonialsData = [
  {
    id: 1,
    review: "Amazing quality and fast shipping! The customer service is outstanding.",
    name: "Sarah Johnson",
    type: "Verified Buyer"
  },
  {
    id: 2,
    review: "Best prices I found anywhere. The products are authentic and work perfectly.",
    name: "Michael Chen",
    type: "Tech Enthusiast"
  },
  {
    id: 3,
    review: "Love shopping here! Great selection and the website is so easy to use.",
    name: "Emily Rodriguez",
    type: "Satisfied Customer"
  }
];

  return (
    <div className='review-card-section'>
      {testimonialsData.map((elem,idx)=>{
        return <ReviewCard key={idx} element={elem}/>
      })}
    </div>
  )
}

export default ReviewCardSection
