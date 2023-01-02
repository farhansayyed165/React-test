import './product.css'
import Productitem from './product_item'; 

function Product(props){
    return <div className="products">
        {
            props.product.map((products)=> (
                <Productitem 
                    name={products.name}
                    type={products.type}
                    price={products.price}/>
            ))
        }
    </div>
}

export default Product;