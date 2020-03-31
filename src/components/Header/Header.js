import React from 'react';
import Logo from '../../images/logo.png';


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
               
            </div>
        </div>
    );
};

export default Header;