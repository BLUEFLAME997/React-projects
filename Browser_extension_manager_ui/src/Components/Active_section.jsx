import React from 'react'
import { useContext } from 'react'
import { extentionData } from '../Context/Element_data'

const Active_section = () => {
  const data = useContext(extentionData);
  return (
    <div className='active-section'>
      <h1>Extensions List</h1>
      <div className="active-section-buttons">
        <button className={`btns ${data.filter==="all"?"red":""}`} id='1' 
        onClick={()=>{
          data.setFilter("all")
        }}>All</button>
        <button className={`btns ${data.filter==="active"?"red":""}`} id='2'
        onClick={()=>{
          data.setFilter("active")
        }}>Active</button>
        <button className={`btns ${data.filter==="inactive"?"red":""}`} id='3'
        onClick={()=>{
          data.setFilter("inactive")
        }}>Inactive</button>
      </div>
    </div>
  )
}

export default Active_section
