import React from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Links = ({link}) => {
  return (
    <NavLink>
      {link}
    </NavLink>
  )
}

export default Links
