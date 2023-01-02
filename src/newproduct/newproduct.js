import React from 'react';
import Productform from './product_form';
import './newproduct.css'

function NewProduct(props){
  
  function saveproductdatahandle(eneterProductData){
    props.onaddproduct(eneterProductData)
	
  }
  return (  
    <div className='new-product'>
        <Productform onSaveProductData={saveproductdatahandle}></Productform>    
    </div>    
  );
}

export default NewProduct;