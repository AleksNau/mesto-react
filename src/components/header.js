import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {    
        return (
            <header className="header">
                <img src={logo} alt="логотип" className="header__logo"></img>
            </header>
        )    
}

export default Header;