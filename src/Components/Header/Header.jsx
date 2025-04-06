import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import './Header.css';
import SidePanel1 from './Navbar/SidePanel1';
const Header = () => {
    // const [sideMenu, setSideMenu] = useState(false);
    return (
        <header className='main-header'>
            <Navbar/>
            {/* <SidePanel1 sideMenu = {sideMenu} setSideMenu={setSideMenu}/> */}
            <Banner/>  
            <Banner/>  
            <Banner/>               
                  
                  
        </header>
    );
};

export default Header;