import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import { productDataContext } from './Context/ProductData';
import { useContext } from 'react';
import CartItem from './Components/CartItem';

const App = () => {
  const data = useContext(productDataContext);
  let itemsArray = [];
  const [cartItem, setCartItem] = useState([]);
  const cartItemIterate = () => {
    if (!data.currentItem) return; // same guard check but simplified

    // ✅ Using functional state update (important change)
    setCartItem((prevCart) => {

      // ✅ Instead of forEach, we use find() to check once
      const existingItem = prevCart.find(
        (item) => item.id === data.currentItem
      );

      if (existingItem) {

        // ✅ Instead of mutating state (elem.count++),
        // we return a NEW updated array using map()
        return prevCart.map((item) =>
          item.id === data.currentItem
            ? { ...item, count: item.count + 1 } // new object, no mutation
            : item
        );

      } else {

        // ✅ Only add new item if it doesn't already exist
        const obj = data.products.find(
          (elem) => elem.id === data.currentItem
        );

        if (!obj) return prevCart; // safety check

        // ✅ Add new item once (not inside a loop)
        return [...prevCart, { ...obj, count: 1 }];
      }
    });
  };
  useEffect(() => {
    if (data.currentItem === undefined) return;
    cartItemIterate();
  }, [data.currentItem])

  return (
    <div className='app'>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        <section className={`cart-section ${data.cart ? "cart-section-open" : ""}`}>
          <div className="cart-top">
            <p>Shopping Cart</p>
            <button
              onClick={() => {
                data.setCart(false)
              }}><i className="ri-close-line"></i></button>
          </div>
          <div className="cart-items-section">
            {cartItem.map((elem) => {
              return <CartItem element={elem} />
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
