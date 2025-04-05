import React from 'react';
const menus = [
    {
        label: 'Services',
        items: [
            { label: 'Service', href: '#' },
            { label: 'Service Details', href: '#' },
        ]
    },
    {
        label: 'Projects',
        items: [
            { label: 'Project', href: '#' },
            { label: 'Project Details', href: '#' },
        ]
    },
    {
        label: 'Blogs',
        items: [
            { label: 'Blog Classic', href: '#' },
            { label: 'Blog Details', href: '#' },
        ]
    }
]
const Dropdowns = () => {
    return (
        <>
            {
                menus.map((menu, index) => {
                    return (
                        <li key={index} className="dropdown dropdown-hover cursor-pointer">
                            <div tabIndex={0} role="button" className="inline-flex items-center gap-0.5 dropdown">
                                <div>{menu.label}</div>
                                <div className='flex'>
                                    <div className='icon w-2 h-0.5 bg-white text-white rotate-45 opacity-50'></div>
                                    <div className='icon w-2 h-0.5 bg-white text-white -rotate-45 opacity-50 -ml-1'></div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-[#10263f] mt-2 rounded-box z-1 w-52 p-2 shadow-lg text-white sub-menu">
                                {
                                    menu.items.map((item, index) => {
                                        return (
                                            <li className='sub-menu-list' key={index}>
                                                <div className='flex justify-between'>
                                                    <a href={item.href}>{item.label}</a>
                                                    <div className='hidden go-icon'>&gt;</div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </>
    );
};

export default Dropdowns;