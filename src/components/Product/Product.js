import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    
    const {name, seller, stock, img, price,} = props.product;
    return (
        <div className="product_item">
            <div className="productPic">
                <a href>
                    <img src={img} alt="" />
                </a>
            </div>
            <div className="productDetails">
                <h3>{name}</h3>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock --order soon</p>
                <button className="btnProduct" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;