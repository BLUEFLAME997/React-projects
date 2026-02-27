import React from 'react'
import SiteValuesCardHolder from './SiteValuesCardHolder'

const SiteValuesSection = () => {
  return (
    <div className='site-values'>
      <div className="site-values-heading">
        <h1>our values</h1>
        <p>What drives us every day</p>
      </div>
      <SiteValuesCardHolder/>
    </div>
  )
}

export default SiteValuesSection
