import React from 'react'
import SiteCards from './SiteCards';

const SiteValuesCardHolder = () => {
  const featuresData = [
  {
    id: 1,
    type: "Quality First",
    description: "We never compromise on product quality and authenticity"
  },
  {
    id: 2,
    type: "Customer Focus",
    description: "Your satisfaction is our top priority"
  },
  {
    id: 3,
    type: "Innovation",
    description: "Always bringing you the latest tech innovations"
  },
  {
    id: 4,
    type: "Passion",
    description: "We love what we do and it shows in our service"
  }
];

  return (
    <div className='site-card-holder'>
      {featuresData.map((elem,idx)=>{
        return <SiteCards element={elem}/>
      })}
    </div>
  )
}

export default SiteValuesCardHolder
