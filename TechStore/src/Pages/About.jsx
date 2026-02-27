import React from 'react'
import '../PageCss/About.css'
import AboutMission from '../Components/AboutMission'
import SiteValuesSection from '../Components/SiteValuesSection'

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-top-section">
        <h1>About TechStore</h1>
        <p>Bringing you the best in technology since 2020</p>
      </div>
      <AboutMission/>
      <SiteValuesSection/>
    </div>
  )
}

export default About
