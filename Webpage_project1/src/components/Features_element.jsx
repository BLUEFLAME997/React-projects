import React from 'react'

const Features_element = ({data}) => {
  const {image,header,description}=data;
  return (
    <div className='feature-element'>
      <div className="feature-image">
        <img src={image} alt="" />
      </div>
      <div className="feature-header">
        <h1>{header}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Features_element
