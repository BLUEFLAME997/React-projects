import React from 'react'
import '../PageCss/About.css'
import AboutMission from '../Components/AboutMission'
import SiteValuesSection from '../Components/SiteValuesSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import GetInTouchSection from '../Components/GetInTouchSection'

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-top-section">
        <h1>About TechStore</h1>
        <p>Bringing you the best in technology since 2020</p>
      </div>
      <AboutMission/>
      <SiteValuesSection/>
      <WhyChooseUs/>
      <GetInTouchSection/>
    </div>
  )
}

export default About
