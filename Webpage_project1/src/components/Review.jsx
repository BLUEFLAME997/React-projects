import React from 'react'

const Review = ({obj}) => {
  const {review,profileImage,name,role}=obj;
  return (
    <div className='review-element'>
      <div className="review-description">
        <p>{review}</p>
      </div>
      <div className="profile-data">
        <div className="profile-image">
          <img src={profileImage} alt="" />
        </div>
        <div className="profile-data-container">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
