import React from 'react';

const SidePanel1 = ({sideMenu, setSideMenu}) => {
    return (
        <div className='w-full h-full absolute top-0 right-0 overflow-hidden flex justify-between'>
            <div onClick={() => setSideMenu(!sideMenu)} className='w-2/3 bg-[#06021d] opacity-70'>
            </div>
            <div className='side-panel-1 w-1/3 bg-[#06021d] fixed top-0 right-0'>
                <h1>Hellos</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque officiis est illo reiciendis labore nobis ex consequuntur! Magnam facilis unde laboriosam, architecto voluptatum sed veritatis ipsa ipsam necessitatibus! Cum tempore iure praesentium optio iusto ex, nobis facilis tenetur doloremque unde inventore, velit harum labore saepe, totam dolorum neque dignissimos nostrum pariatur? Odit animi itaque fugit illum laboriosam ratione qui, mollitia sapiente nemo magni? Dolorum dignissimos, nobis aliquam quidem assumenda voluptatem neque a reiciendis ad officiis ipsa iusto officia necessitatibus tempore omnis perferendis! Quo magnam autem suscipit. Non sequi esse, quas quis maxime alias laborum aperiam, nostrum odio deserunt sapiente iste.</p>
            </div>
        </div>
    );
};

export default SidePanel1;