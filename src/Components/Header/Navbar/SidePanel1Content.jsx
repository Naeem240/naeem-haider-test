import React from 'react';

const SidePanel1Content = ({ sideMenu, setSideMenu }) => {
    return (
        <>
            <div className='flex justify-between'>
                <a href='#' className='flex items-end'>
                    <figure className='w-10'>
                        <img className='relative right-2' src="logo.png" alt="Naeem Haider" />
                    </figure>
                    <figcaption className='-ml-3 text-xl logo-text'>aeem</figcaption>
                </a>
                <button onClick={() => setSideMenu(!sideMenu)}>Close</button>
            </div>
            <figure>
                <img className='w-2/3 mx-auto' src="naeem-haider.png" alt="" />
            </figure>
        </>
    );
};

export default SidePanel1Content;