import './product_item.css'
import React, { useState } from 'react'

function Productitem(props){
    // const [changetxt, settxt] = useState(props.type)
    // // let changetxt = props.type;
    // const added = ()=>{
    //     settxt('Added to Cart')
    //     console.log(added);
    //     console.log(changetxt);}
    return (<div>

        <div className="product-item">
            <div>{props.name}</div>
            <div className="product-item__type">
                <p>{props.type}</p>
            </div>
            <div className="product-item__price">{props.price}</div>
            {/* <button onClick={added}>Add to Cart</button> */}
        </div>
    
    </div>
    )}

export default Productitem;