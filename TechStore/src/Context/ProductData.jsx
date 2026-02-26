import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const productDataContext = createContext();
const ProductData = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "ASUS ROG Strix G16",
      category: "Computers",
      productDescription: "16-inch gaming laptop with Intel i7 processor, 16GB RAM, and RTX 4060 graphics.",
      price: 1499,
      topSale: true,
      image: "https://i.pinimg.com/736x/d3/65/94/d36594c885aa022886376ec20bc8728d.jpg"
    },
    {
      id: 2,
      name: "Apple MacBook Air M2",
      category: "Computers",
      productDescription: "Lightweight laptop with Apple M2 chip, 8GB RAM, and 256GB SSD.",
      price: 1099,
      topSale: false,
      image: "https://i.pinimg.com/736x/38/65/94/386594135756b1c8572b20991e9dd963.jpg"
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Audio",
      productDescription: "Premium noise-canceling wireless headphones with 30-hour battery life.",
      price: false,
      topSale: true,
      image: "https://i.pinimg.com/736x/55/c8/46/55c846c5959f53cb951de7324419c62c.jpg"
    },
    {
      id: 4,
      name: "JBL Flip 6",
      category: "Audio",
      productDescription: "Portable waterproof Bluetooth speaker with powerful bass and 12-hour playtime.",
      price: 129,
      topSale: false,
      image: "https://i.pinimg.com/1200x/ce/8f/98/ce8f98445c7e7ef35f6aa17a5de17c50.jpg"
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      category: "Wearables",
      productDescription: "Smartwatch with advanced health tracking, ECG, and Always-On Retina display.",
      price: 399,
      topSale: true,
      image: "https://i.pinimg.com/1200x/22/7c/b7/227cb70fafcf903e973fa20732ab1b79.jpg"
    },
    {
      id: 6,
      name: "Samsung Galaxy Watch 6",
      category: "Wearables",
      productDescription: "Fitness-focused smartwatch with AMOLED display and sleep tracking features.",
      price: 349,
      topSale: false,
      image: "https://i.pinimg.com/1200x/4c/c8/99/4cc899cb0857e1331207a6d8037bd242.jpg"
    },
    {
      id: 7,
      name: "Dell UltraSharp U2720Q",
      category: "Monitors",
      productDescription: "27-inch 4K UHD monitor with IPS panel and USB-C connectivity.",
      price: 699,
      topSale: false,
      image: "https://i.pinimg.com/1200x/a3/82/e8/a382e8c26850e0aa7801f0cb9ed2bd07.jpg"
    },
    {
      id: 8,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      productDescription: "Advanced wireless mouse with ultra-fast scrolling and ergonomic design.",
      price: 99,
      topSale: true,
      image: "https://i.pinimg.com/736x/ee/f2/74/eef274ed6edd234344df8339af0d5eb7.jpg"
    },
    {
      id: 9,
      name: "Bose QuietComfort Earbuds II",
      category: "Audio",
      productDescription: "True wireless earbuds with world-class noise cancellation and rich sound.",
      price: 299,
      topSale: true,
      image: "https://i.pinimg.com/736x/2e/cf/0d/2ecf0d4ed922a738d5b8f01473d031f0.jpg"
    },
    {
      id: 10,
      name: "HP Pavilion 14",
      category: "Computers",
      productDescription: "15.6-inch laptop with AMD Ryzen 5 processor and 512GB SSD.",
      price: 799,
      topSale: false,
      image: "https://i.pinimg.com/1200x/37/a5/d9/37a5d9176469c76a0ab1453235488c55.jpg"
    }
  ];

  const [isOpen, setIsOpen] = useState(true);
  return (
    <productDataContext.Provider value={{ isOpen, setIsOpen, products }}>
      {children}
    </productDataContext.Provider>
  )
}

export default ProductData
