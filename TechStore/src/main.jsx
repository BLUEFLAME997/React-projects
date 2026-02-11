import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductData from './Context/ProductData.jsx'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductData>
      <App />
    </ProductData>
  </BrowserRouter>
)
