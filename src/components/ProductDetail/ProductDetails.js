import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const prd = fakeData.find(pd => pd.key ===productKey);
    console.log(prd);
    return (
        
        <div>
            <h2>{productKey} Details comming soon...</h2>
            <Product showAddToCart={false} product={prd}></Product>


        </div>
    );
};

export default ProductDetails;