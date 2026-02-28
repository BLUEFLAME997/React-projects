import React from 'react'

const WhyChooseUsCard = ({element}) => {
  return (
    <div className='why-choose-us-card'>
      <div className="complete-icon">
        <i class="ri-checkbox-circle-line"></i>
      </div>
      <div className="card-description">
        <h3>{element.name}</h3>
        <p>{element.detail}</p>
      </div>
    </div>
  )
}

export default WhyChooseUsCard
