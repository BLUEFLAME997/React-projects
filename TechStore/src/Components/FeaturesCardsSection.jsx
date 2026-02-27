import React from 'react'
import FeaturesCard from './FeaturesCard';

const FeaturesCardsSection = () => {
  const featuresData = [
  {
    id: 1,
    type: "Secure Payment",
    typeDescription: "100% secure payment with SSL encryption."
  },
  {
    id: 2,
    type: "Fast Shipping",
    typeDescription: "Free shipping on orders over $100."
  },
  {
    id: 3,
    type: "24/7 Support",
    typeDescription: "Dedicated support team always ready."
  },
  {
    id: 4,
    type: "Easy Returns",
    typeDescription: "30-day return policy, no questions asked."
  }
];

  return (
    <div className='feature-cards-section'>
      {featuresData.map((elem,idx)=>{
        return <FeaturesCard key={idx} element={elem}/>
      })}
    </div>
  )
}

export default FeaturesCardsSection
