import React, { useEffect, useState } from 'react'
import { productDataContext } from '../Context/ProductData'
import { useContext } from 'react'
import ProductCard from './ProductCard';

const ProductCradSection = ({ setTotalItems }) => {
  const data = useContext(productDataContext);
  let count = 0;
  let elemArray = [];
  const [elemRender, setElemRender] = useState([...data.products]);

  const productDataCardItems = () => {
    if(data.search!=='') data.valTrue=true;
    if (data.searchButton === "All Products") {
      for (let i = 0; i < data.products.length; i++) {
        elemArray[i] = data.products[i];
      }
    } else {
      elemArray = data.products.filter((elem) => {
        return data.searchButton === elem.category
      })
    }
    count=elemArray.length;
    setElemRender([...elemArray]);
    setTotalItems(count);
  }
  useEffect(() => {
    productDataCardItems();
  }, [data.searchButton,data.search])

  return (
    <div className='product-card-section'>
      {data.valTrue?data.searchItems.map((elem)=>{
        return <ProductCard element={elem}/>
      }):elemRender.map((elem) => {
        return <ProductCard element={elem} />
      })}
    </div>
  )
}

export default ProductCradSection


// elemRender.map((elem) => {
//         return <ProductCard element={elem} />
//       })