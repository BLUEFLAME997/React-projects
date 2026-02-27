import React from 'react'

const SiteCards = ({element}) => {
  const siteIconArray=[<i class="ri-award-line"></i>,<i class="ri-group-line"></i>,<i class="ri-donut-chart-line"></i>,<i class="ri-heart-2-line"></i>]
  return (
    <div className='site-card'>
      <div className="site-card-icon">
        {siteIconArray[element.id-1]}
      </div>
      <h4>{element.type}</h4>
      <p>{element.description}</p>
    </div>
  )
}

export default SiteCards
