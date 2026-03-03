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
      price: 250,
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
    }, {
      id: 11,
      name: "Lenovo Legion 5 Pro",
      category: "Computers",
      productDescription: "High-performance gaming laptop with Ryzen 7 processor.",
      price: 1399,
      topSale: false,
      image: "https://i.pinimg.com/736x/45/ca/f8/45caf82b1e200dfdd25652860a4cd5f7.jpg"
    },
    {
      id: 12,
      name: "Acer Predator Helios 300",
      category: "Computers",
      productDescription: "Gaming laptop with RTX graphics and 144Hz display.",
      price: 1299,
      topSale: false,
      image: "https://i.pinimg.com/1200x/75/9b/b5/759bb5d1a4324cebc4140451d8e45da6.jpg"
    },
    {
      id: 13,
      name: "MSI Modern 14",
      category: "Computers",
      productDescription: "Slim business laptop with Intel i5 processor.",
      price: 699,
      topSale: false,
      image: "https://i.pinimg.com/1200x/5b/2c/31/5b2c31bf2bbe1fc8d890ad534acd20c0.jpg"
    },
    {
      id: 14,
      name: "HP Envy x360",
      category: "Computers",
      productDescription: "Convertible touchscreen laptop with Ryzen 5.",
      price: 899,
      topSale: false,
      image: "https://i.pinimg.com/736x/58/94/89/5894893f14b2ff0e115c5b877d7c4bac.jpg"
    },
    {
      id: 15,
      name: "Apple iMac 24-inch",
      category: "Computers",
      productDescription: "All-in-one desktop with M1 chip.",
      price: 1499,
      topSale: false,
      image: "https://i.pinimg.com/1200x/6b/60/7b/6b607b7172663a51997252447380f02e.jpg"
    },

    // -------- AUDIO (Currently 3 → add 5) --------
    {
      id: 16,
      name: "Sony SRS-XE200",
      category: "Audio",
      productDescription: "Portable Bluetooth speaker with clear sound.",
      price: 199,
      topSale: false,
      image: "https://i.pinimg.com/736x/3f/a0/84/3fa08476e3a453206563464b881d6a0d.jpg"
    },
    {
      id: 17,
      name: "Marshall Emberton",
      category: "Audio",
      productDescription: "Compact speaker with signature Marshall sound.",
      price: 179,
      topSale: false,
      image: "https://i.pinimg.com/1200x/96/47/a1/9647a12fc4e0b60616c6bbf77051d033.jpg"
    },
    {
      id: 18,
      name: "Beats Studio3",
      category: "Audio",
      productDescription: "Wireless noise-canceling headphones.",
      price: 249,
      topSale: false,
      image: "https://i.pinimg.com/736x/3c/a2/4d/3ca24ddbb7d9ea634be6d8ff822a03e9.jpg"
    },
    {
      id: 19,
      name: "Samsung Galaxy Buds 2",
      category: "Audio",
      productDescription: "True wireless earbuds with ANC.",
      price: 149,
      topSale: false,
      image: "https://i.pinimg.com/736x/0d/fb/01/0dfb01cc9ff816461b377ae16a211b2a.jpg"
    },
    {
      id: 20,
      name: "Boat Rockerz 550",
      category: "Audio",
      productDescription: "Affordable wireless headphones with bass boost.",
      price: 59,
      topSale: false,
      image: "https://i.pinimg.com/736x/eb/18/78/eb187840d84eb8960614a979d2905274.jpg"
    },

    // -------- WEARABLES (Currently 2 → add 6) --------
    {
      id: 21,
      name: "Fitbit Charge 6",
      category: "Wearables",
      productDescription: "Advanced fitness tracker with heart rate monitor.",
      price: 199,
      topSale: false,
      image: "https://i.pinimg.com/736x/75/d7/47/75d747d57579966d1862cc34dde85263.jpg"
    },
    {
      id: 22,
      name: "Garmin Forerunner 265",
      category: "Wearables",
      productDescription: "GPS smartwatch for athletes.",
      price: 449,
      topSale: false,
      image: "https://i.pinimg.com/736x/58/83/f6/5883f6a67354dcb8415c2f99191a0560.jpg"
    },
    {
      id: 23,
      name: "Noise ColorFit Pro",
      category: "Wearables",
      productDescription: "Budget smartwatch with AMOLED display.",
      price: 79,
      topSale: false,
      image: "https://i.pinimg.com/736x/a2/0f/0b/a20f0bb218f0f8eb8d8b38effb2da09c.jpg"
    },
    {
      id: 24,
      name: "Amazfit GTR 4",
      category: "Wearables",
      productDescription: "Stylish smartwatch with long battery life.",
      price: 229,
      topSale: false,
      image: "https://i.pinimg.com/1200x/aa/8c/ed/aa8ced3f89d7f8ea1d762fda214c9a18.jpg"
    },
    {
      id: 25,
      name: "Huawei Watch GT 3",
      category: "Wearables",
      productDescription: "Premium smartwatch with fitness tracking.",
      price: 249,
      topSale: false,
      image: "https://i.pinimg.com/1200x/05/b0/06/05b0068ed242682f8357861db53e8afc.jpg"
    },
    {
      id: 26,
      name: "Realme Watch 3",
      category: "Wearables",
      productDescription: "Affordable smartwatch with Bluetooth calling.",
      price: 69,
      topSale: false,
      image: "https://i.pinimg.com/1200x/92/8a/b0/928ab0afdcdd12a90f7f7cfa927c1317.jpg"
    },

    // -------- PHOTOGRAPHY (Add 8 new) --------
    {
      id: 27,
      name: "Canon EOS R50",
      category: "Photography",
      productDescription: "Mirrorless camera with 24MP sensor.",
      price: 899,
      topSale: false,
      image: "https://i.pinimg.com/1200x/b9/f8/8e/b9f88ebe96f9d4342548dd6638a2129f.jpg"
    },
    {
      id: 28,
      name: "Nikon Z30",
      category: "Photography",
      productDescription: "Compact mirrorless camera for creators.",
      price: 799,
      topSale: false,
      image: "https://i.pinimg.com/736x/43/e6/df/43e6dff18db975f10f479c97cb353f52.jpg"
    },
    {
      id: 29,
      name: "Sony Alpha A7 III",
      category: "Photography",
      productDescription: "Full-frame professional mirrorless camera.",
      price: 1999,
      topSale: false,
      image: "https://i.pinimg.com/736x/08/1d/1a/081d1ab8945db8a7c0b3aca82d4098b6.jpg"
    },
    {
      id: 30,
      name: "Fujifilm X-T5",
      category: "Photography",
      productDescription: "High-resolution APS-C mirrorless camera.",
      price: 1699,
      topSale: false,
      image: "https://i.pinimg.com/1200x/ab/1c/bf/ab1cbf26d9562ba8ffd4330b0baaa921.jpg"
    },
    {
      id: 31,
      name: "DJI Osmo Pocket 3",
      category: "Photography",
      productDescription: "Compact handheld camera with gimbal.",
      price: 519,
      topSale: false,
      image: "https://i.pinimg.com/1200x/52/9f/f7/529ff7ed31d0ec808359d9ede0ad6644.jpg"
    },
    {
      id: 32,
      name: "GoPro Hero 12",
      category: "Photography",
      productDescription: "Waterproof action camera with 5K recording.",
      price: 399,
      topSale: false,
      image: "https://i.pinimg.com/736x/d8/58/36/d858362d6f9fa0b4a98bdade864f8cb5.jpg"
    },
    {
      id: 33,
      name: "Canon RF 50mm Lens",
      category: "Photography",
      productDescription: "Prime lens for portrait photography.",
      price: 299,
      topSale: false,
      image: "https://i.pinimg.com/1200x/9a/a5/de/9aa5deeef2fff76c07023f861d0f132a.jpg"
    },
    {
      id: 34,
      name: "Sony 24-70mm Lens",
      category: "Photography",
      productDescription: "Professional zoom lens.",
      price: 1299,
      topSale: false,
      image: "https://i.pinimg.com/736x/25/d5/37/25d537378579e4ad14fb4064a552087c.jpg"
    },

    // -------- MOBILE (Add 8) --------
    {
      id: 35,
      name: "iPhone 15",
      category: "Mobile",
      productDescription: "Latest Apple smartphone with A17 chip.",
      price: 999,
      topSale: false,
      image: "https://i.pinimg.com/736x/8e/1c/37/8e1c3744a4f11b8a6d5d053c59e9a75c.jpg"
    },
    {
      id: 36,
      name: "Samsung Galaxy S24",
      category: "Mobile",
      productDescription: "Flagship Android phone with Snapdragon processor.",
      price: 1099,
      topSale: false,
      image: "https://i.pinimg.com/736x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg"
    },
    {
      id: 37,
      name: "Google Pixel 8",
      category: "Mobile",
      productDescription: "AI-powered smartphone with great camera.",
      price: 799,
      topSale: false,
      image: "https://i.pinimg.com/1200x/ed/93/e5/ed93e514854b5aac82409189a813db4e.jpg"
    },
    {
      id: 38,
      name: "OnePlus 12",
      category: "Mobile",
      productDescription: "Fast and smooth smartphone experience.",
      price: 749,
      topSale: false,
      image: "https://i.pinimg.com/1200x/50/3f/28/503f28e77810b365cf101cc241e04975.jpg"
    },
    {
      id: 39,
      name: "Xiaomi 14",
      category: "Mobile",
      productDescription: "High-performance smartphone with Leica camera.",
      price: 699,
      topSale: false,
      image: "https://i.pinimg.com/1200x/5d/d7/2a/5dd72a5695c77afdd551c2b12067322a.jpg"
    },
    {
      id: 40,
      name: "Realme GT 5",
      category: "Mobile",
      productDescription: "Gaming-focused smartphone.",
      price: 599,
      topSale: false,
      image: "https://i.pinimg.com/736x/0b/09/90/0b0990528d2b2b6e6157c2185be94433.jpg"
    },
    {
      id: 41,
      name: "Vivo X100",
      category: "Mobile",
      productDescription: "Premium smartphone with ZEISS optics.",
      price: 899,
      topSale: false,
      image: "https://i.pinimg.com/736x/64/75/83/647583d0ee41e095f3518fa4326d62f3.jpg"
    },
    {
      id: 42,
      name: "Nothing Phone 2",
      category: "Mobile",
      productDescription: "Unique transparent design smartphone.",
      price: 699,
      topSale: false,
      image: "https://i.pinimg.com/1200x/a9/58/bd/a958bd084c81699289acc9ba3529ccc1.jpg"
    },

    // -------- TABLETS (Add 8) --------
    {
      id: 43,
      name: "iPad Pro M2",
      category: "Tablets",
      productDescription: "Powerful tablet with M2 chip.",
      price: 1099,
      topSale: false,
      image: "https://i.pinimg.com/1200x/bd/50/2a/bd502aa3c055759e86537d804ad37f07.jpg"
    },
    {
      id: 44,
      name: "Samsung Galaxy Tab S9",
      category: "Tablets",
      productDescription: "Premium Android tablet.",
      price: 899,
      topSale: false,
      image: "https://i.pinimg.com/736x/8e/54/b8/8e54b81cad1eca4d35e4889f19a6fa44.jpg"
    },
    {
      id: 45,
      name: "Lenovo Tab P12",
      category: "Tablets",
      productDescription: "Entertainment-focused tablet.",
      price: 399,
      topSale: false,
      image: "https://i.pinimg.com/736x/e3/aa/ea/e3aaeab7a55b8be59f2e6becd7534b10.jpg"
    },
    {
      id: 46,
      name: "Microsoft Surface Pro 9",
      category: "Tablets",
      productDescription: "2-in-1 tablet with Windows OS.",
      price: 1199,
      topSale: false,
      image: "https://i.pinimg.com/1200x/76/68/74/766874b0cfd10f19274a4c6bb9884f13.jpg"
    },
    {
      id: 47,
      name: "iPad Mini",
      category: "Tablets",
      productDescription: "Compact and powerful tablet.",
      price: 499,
      topSale: false,
      image: "https://i.pinimg.com/736x/eb/4f/8b/eb4f8bd3bae137954dca91f6fb8d2e77.jpg"
    },
    {
      id: 48,
      name: "Realme Pad X",
      category: "Tablets",
      productDescription: "Affordable Android tablet.",
      price: 299,
      topSale: false,
      image: "https://i.pinimg.com/736x/11/b0/ba/11b0baa1dacf8847e1fdaf549018ddc0.jpg"
    },
    {
      id: 49,
      name: "Xiaomi Pad 6",
      category: "Tablets",
      productDescription: "High refresh-rate display tablet.",
      price: 349,
      topSale: false,
      image: "https://i.pinimg.com/736x/79/a0/ac/79a0ac365480375436f30aae54b3d416.jpg"
    },
    {
      id: 50,
      name: "Huawei MatePad 11",
      category: "Tablets",
      productDescription: "Slim tablet with stylus support.",
      price: 429,
      topSale: false,
      image: "https://i.pinimg.com/736x/f8/75/e6/f875e6ea2357a09b23631a47c064bcd2.jpg"
    },
    {
      id: 51,
      name: "Samsung Galaxy Tab A9+",
      category: "Tablets",
      productDescription: "Affordable Android tablet with 11-inch display and long battery life.",
      price: 279,
      topSale: false,
      image: "https://i.pinimg.com/736x/8e/54/b8/8e54b81cad1eca4d35e4889f19a6fa44.jpg"
    },
    {
      id: 52,
      name: "Apple iPad 10th Gen",
      category: "Tablets",
      productDescription: "Versatile tablet with A14 Bionic chip and 10.9-inch Retina display.",
      price: 449,
      topSale: false,
      image: "https://i.pinimg.com/736x/eb/52/a8/eb52a8b77db5d7f7ee4aa6c51aa7091b.jpg"
    },
    {
      id: 53,
      name: "OnePlus Pad",
      category: "Tablets",
      productDescription: "Premium Android tablet with 144Hz display and MediaTek Dimensity processor.",
      price: 479,
      topSale: false,
      image: "https://i.pinimg.com/736x/43/f1/7d/43f17dd57f4437d83c719de0097e4ffe.jpg"
    },
    {
      id: 54,
      name: "Lenovo Yoga Tab 13",
      category: "Tablets",
      productDescription: "Large 13-inch entertainment tablet with built-in kickstand.",
      price: 679,
      topSale: false,
      image: "https://i.pinimg.com/736x/27/39/17/2739171d0c9d068c42c1270f81d9b400.jpg"
    }
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [searchButton, setSearchButton] = useState("All Products");
  const [cart, setCart] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); 
  const [search,setSearch]=useState('');
  const [searchItems,setSearchItems]=useState([]);
  const [valTrue,setValTrue]=useState(false);

  return (
    <productDataContext.Provider value={{ isOpen, setIsOpen, products, searchButton, setSearchButton, cart, setCart, currentItem, setCurrentItem,search,setSearch,searchItems,setSearchItems }}>
      {children}
    </productDataContext.Provider>
  )
}

export default ProductData
