import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css';
const Header = () => {
    return (
        <header className='main-header backdrop-blur-2xl px-4 md:px-8'>
            <Navbar/>
            <Banner/>  
            <Banner/>  
            <Banner/>               
                  
                  
        </header>
    );
};

export default Header;