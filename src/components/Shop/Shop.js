import React from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { useState } from 'react';
import './Shop.css';




const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log("Click korse", product );
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop_container">
            <div className="product_container">

                {
                    products.map(prd => <Product
                        handleAddProduct={handleAddProduct}
                        product={prd}
                    ></Product>)
                }

            </div>
            <div className="cart_container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;