import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Route ,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
