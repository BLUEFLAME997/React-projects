import React from 'react'

const FeaturesCard = ({element}) => {
  const iconArray=[<i class="ri-shield-line"></i>,<i class="ri-truck-line"></i>,<i class="ri-customer-service-line"></i>,<i class="ri-flashlight-line"></i>];
  return (
    <div className='feature-card'>
      <div className="card-icon">
        {iconArray[element.id-1]}
      </div>
      <h3>Secure payment</h3>
      <p>100% secure payment with SSL encryption</p>
    </div>
  )
}

export default FeaturesCard
