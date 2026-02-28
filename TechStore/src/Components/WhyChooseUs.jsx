import React from 'react'
import WhyChooseUsCard from './WhyChooseUsCard';

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      name: "Curated Selection",
      detail: "Every product is handpicked by our team of tech experts"
    },
    {
      name: "Competitive Prices",
      detail: "We offer the best prices without compromising on quality"
    },
    {
      name: "Fast & Free Shipping",
      detail: "Get free shipping on all orders over $100"
    },
    {
      name: "Customer Support",
      detail: "Our team is always ready to help with any questions or concerns"
    },
    {
      name: "Secure Shopping",
      detail: "100% secure payment processing with SSL encryption"
    }
  ];
  return (
    <div className='why-choose-us-section'>
      <div className="why-choose-us-heading">
        <h3>why choose us?</h3>
      </div>
      <div className="why-choose-us-card-section">
        {whyChooseUsData.map((elem,idx)=>{
          return <WhyChooseUsCard key={idx} element={elem}/>
        })}
      </div>
    </div>
  )
}

export default WhyChooseUs
