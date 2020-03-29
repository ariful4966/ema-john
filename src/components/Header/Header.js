import React from 'react';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
                <nav className="menu">
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manege">Manege Inventory</a>
                </nav>
                <div className="search_area">
                    <input type="text" placeholder="Type Here to Search"/>
                    <div className="cartCount">
                        <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                        <input type="text" value="0"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;