import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const productDataContext=createContext();
const ProductData = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <productDataContext.Provider value={{isOpen,setIsOpen}}>
      {children}
    </productDataContext.Provider>
  )
}

export default ProductData
