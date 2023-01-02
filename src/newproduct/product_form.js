import React, { useState } from 'react'
import './product_form.css'


function Productform(props){
    const [enterName, setenteredname] = useState('');
    const [entertype, setenteredtype] = useState('');
    const [enterprice, setenteredprice] = useState('');

    function titlechanged(event){
        setenteredname(event.target.value);
    }
    function typechanged(event){
        setenteredtype(event.target.value);
    }
    function pricechanged(event){
        setenteredprice(event.target.value);
     
    }

    function submithandler(event){
        event.preventDefault()
        
        if(enterName.trim().length === 0) {
          return;
      }
          
      if(entertype.trim().length === 0) {
          return;
      }
          
      if(enterprice.trim().length === 0) {    
          return;
      }

        const productData = {
            name: enterName,
            type: entertype,
            price: enterprice  
          }

          console.log(productData)
        
          props.onSaveProductData(productData)
          setenteredname('');
          setenteredtype('');
          setenteredtype('');

        
    }
    

      


    return <form onSubmit={submithandler}>
        <div className="new-product__controls">
    <div className="new-product__controls">
      <label >Name</label>
      <input type='text' onChange={titlechanged} value={enterName}/>
    </div>
    <div className="new-product__controls">
      <label>Type</label>
      <input type='text' onChange={typechanged} value={entertype}/>
    </div>
    <div className="new-product__controls">
      <label>Price</label>
      <input type='number' onChange={pricechanged} value={enterprice}/>
    </div>
  </div>
  <div className="new-product__actions">
    <button type='submit'>Add Product</button>
  </div>
    </form>
}

export default Productform;