import React from 'react'
import RatingData from './RatingData'

const RatingCompo = ({arr}) => {
  return (
    <div className='ratings'>
      {arr.map(element => {
        return <RatingData element={element}/>
      })}
    </div>
  )
}

export default RatingCompo
