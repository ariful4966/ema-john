import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);

    const { name, seller, stock, img, price, key } = props.product;
    return (
        <div className="product_item">
            <div className="productPic">
                <img src={img} alt="" />
            </div>
            <div className="productDetails">
                <h3><Link to={"/product/" + key}>{name}</Link></h3>
                <p>By: {seller}</p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock --order soon</p>
                {
                    props.showAddToCart &&
                    <button className="btnProduct" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;