import React, { useState } from 'react'
import { useContext } from 'react';
import { extentionData } from '../Context/Element_data';

const Extentions = ({img,name,description,id}) => {
  const data=useContext(extentionData);
  let elemDataArrya=[...data.allElements];
  let event = data.allElements.filter((elem,idx)=>{
    return elem.id===id;
  })
  const [action,setAction]=useState(event[0].active);
  const remove=(id)=>{
    elemDataArrya=[]
    let elemValues=data.allElements.filter((item)=>{
      return item.id!==id;
    })
    data.setAllElements([...elemValues]);
    elemDataArrya=[...elemValues];
  }
  return (
    <div className={`extentions ${data.gradient?"theme-background-color1":"theme-background-color2"}`}>
      <div className="extention-upper-section">
        <div className="extention-upper-logo">
          <img src={img} alt="" />
        </div>
        <div className="extention-upper-section-content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="extention-lower-section">
        <button className='btns'
        onClick={()=>{
          remove(id);
        }}>Remove</button>
        <div className={`extention-active-button ${action?"extention-active":""}`}
        onClick={()=>{
          elemDataArrya.forEach((elem)=>{
            if(elem.id===id){
              elem.active=!elem.active
              setAction(elem.active)
            }
          })
          data.setAllElements([...elemDataArrya])
        }}>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  )
}

export default Extentions
