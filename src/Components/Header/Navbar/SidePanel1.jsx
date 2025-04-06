import React from 'react';
import SidePanel1Content from './SidePanel1Content';

const SidePanel1 = ({ sideMenu, setSideMenu }) => {
    return (
        <>
            <div onClick={() => setSideMenu(!sideMenu)} className={`absolute top-0 transition-all duration-1000 ${sideMenu ? 'left-0' : '-left-300'} text-white bg-black opacity-45 p-4 w-2/3 h-screen cursor-no-drop`}>
                <div className='cursor-pointer text-5xl'>
                    X
                </div>
            </div>
            <div className={`absolute top-0 transition-all duration-1000 ${sideMenu ? '-right-0' : '-right-200'} text-white bg-black p-4 w-1/3 h-screen `}>
                <div>
                    <SidePanel1Content sideMenu={sideMenu} setSideMenu={setSideMenu} />
                </div>
            </div>
        </>
    );
};

export default SidePanel1;