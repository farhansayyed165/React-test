// import logo from './logo.svg';
import './App.css';
// import Productitem from './components/product_item';
import Product from './components/product'
import NewProduct from './newproduct/newproduct';
import React, { useState } from 'react';

const DUMMY_DATA = [
  {name: 'Beginner to Advanced: React', type: 'Book', price: 1860},
  {name: 'Rework', type: 'Book', price: 595},
  {name: 'iPhone 12 Mini', type: 'Electronics', price: 69990},
  {name: 'Teapoy', type: 'Furniture', price: 6000},
]
function App() {
  const [products, setProducts] = useState(DUMMY_DATA)

  function addProductHandler(newproductdata){
    setProducts((prevState)=>{
      return [newproductdata, ...prevState]})
  }


  

  return (
    <div>
    <h1>Hello World</h1>
    <NewProduct onaddproduct={addProductHandler}/>
    <Product product={products} />
    
    </div>

  );
}

export default App;
