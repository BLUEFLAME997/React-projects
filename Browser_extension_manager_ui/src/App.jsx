import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { extentionData } from './Context/Element_data'
import Theme from './Components/Theme'
import Active_section from './Components/Active_section'
import Extentions from './Components/Extentions'

const App = () => {
  const data = useContext(extentionData);
  const [activeElement,setActiveElement]=useState([]);
  useEffect(()=>{
    if(data.filter==="all"){
    setActiveElement([...data.allElements]);
  }else if(data.filter==="active"){
    let elemArray=data.allElements.filter((elem)=>{
      return elem.active===true;
    })
    setActiveElement([...elemArray]);
  }else{
    let elemArray2=data.allElements.filter((elem)=>{
      return elem.active!==true;
    })
    setActiveElement([...elemArray2])
  }
  },[data.allElements,data.filter])
  return (
    <div className={`app ${data.gradient?"grad1":"grad2"}`}>
      <Theme/>
      <Active_section/>
      <div className="extentions-container">
        {
          activeElement.map((elem,idx)=>{
            return <Extentions key={elem.id} img={elem.image} name={elem.name} description={elem.description} id={elem.id}/>
          })
        }
      </div>
    </div>
  )
}

export default App
