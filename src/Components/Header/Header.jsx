import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css';
const Header = () => {
    return (
        <header className='main-header backdrop-blur-2xl'>
            <Navbar/>
            <Banner/>                    
        </header>
    );
};

export default Header;