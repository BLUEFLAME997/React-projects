import React from 'react'
import RatingData from './RatingData'

const RatingCompo = ({arr}) => {
  return (
    <div className='ratings'>
      {arr.map((element,idx) => {
        return <RatingData key={idx} element={element}/>
      })}
    </div>
  )
}

export default RatingCompo
