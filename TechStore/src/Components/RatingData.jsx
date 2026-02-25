import React from 'react'

const RatingData = ({element}) => {
  return (
    <div className='rating-data'>
      <h1>{element.top}</h1>
      <p>{element.bottom}</p>
    </div>
  )
}

export default RatingData
