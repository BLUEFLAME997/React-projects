import React, { useState } from 'react'
import '../style/LanguageSelector.scss'
import { LANGUAGE_VERSIONS } from '../contants';
import { CODE_SNIPPETS } from '../contants';

const LanguageSelector = ({language,onSelect}) => {
  const [open,setOpen]=useState(false);
  const languages=Object.entries(LANGUAGE_VERSIONS);

  return (
    <div className='main-language-selector'>
      <p>Languages:</p>
      <button className='language-selector-button'
      onClick={()=>{
        setOpen(!open)
      }}>{language}</button>
      <div className={`languages ${open?"open":"close"}`}>
        <ul>
          {languages.map((elem,idx)=>{
            return <li onClick={()=>{
              onSelect(elem[0])
              setOpen(!open)
            }}>{elem[0]}<span>{elem[1]}</span></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default LanguageSelector
