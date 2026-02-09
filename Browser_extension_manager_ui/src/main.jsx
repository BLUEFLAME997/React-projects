import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Element_data from './Context/Element_data.jsx'

createRoot(document.getElementById('root')).render(
  <Element_data>
    <App/>
  </Element_data>
)
