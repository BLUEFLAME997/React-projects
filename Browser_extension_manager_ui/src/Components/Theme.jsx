import React from 'react';
import { useContext } from 'react';
import { extentionData } from '../Context/Element_data';
import browserExtention from '../assets/image.png';
import sunLogo from '../assets/icon-sun.svg';
import moonLogo from '../assets/icon-moon.svg';

const Theme = () => {
  const data = useContext(extentionData);
  let themeChangeLogo;
  if(data.gradient===true){
    themeChangeLogo=sunLogo;
  }else{
    themeChangeLogo=moonLogo;
  }
  return (
    <div className={`theme-section ${data.gradient? "theme-background-color1":"theme-background-color2"}`}>
      <div className="theme-left-section">
        <div className="theme-logo">
        <img src={browserExtention} alt="" />
      </div>
      <h1>Extensions</h1>
      </div>
      <div className="theme-right-section">
        <button className={`theme-change-button ${data.gradient?"theme-button-background1":"theme-button-background2"}`} onClick={()=>{
          data.setGradient(!data.gradient);
        }}>
          <img src={themeChangeLogo} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Theme
