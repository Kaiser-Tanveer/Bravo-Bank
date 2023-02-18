import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa'
import { HiChevronDown, HiOutlineHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';


const SideMenu = () => {
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(false);
    return (
        <div className='bg-gray-100'>
            {/* small device button  */}
            {/* <div className='lg:hidden bg-black block'>
                <button onClick={() => setOpen(!open)} className={`p-2 ${open?"hidden":"block"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-100">
                        <rect width="352" height="32" x="80" y="96"></rect>
                        <rect width="352" height="32" x="80" y="240"></rect>
                        <rect width="352" height="32" x="80" y="384"></rect>
                    </svg>
                </button>
            </div> */}
            <div className={` lg:block   ${open ? "block" : " left-0 bottom-0 top-0 hidden"}`}>
                <div className="flex h-[100vh] flex-col p-3 w-60 text-primary shadow-primary shadow-inner">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setOpen(!open)} className="p-2 lg:hidden">
                                X
                            </button>
                        </div>

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">

                                <li className="rounded-sm font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700">
                                    <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
                                        <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li
                                    className={`p-2 rounded-sm font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700`}>
                                    <NavLink to='/' className="flex items-center justify-between p-2 space-x-3 rounded-md">
                                        <div className='flex items-center'>
                                            <FaCreditCard className='mr-2' />
                                            <span>Cards</span>
                                        </div>
                                        <HiChevronDown
                                            onClick={() => setOpen(!open)}
                                            className='text-right text-xl' />
                                    </NavLink>
                                    {
                                        open &&
                                        <ul className='ease-linear duration-700 bg-gray-100 w-full text-primary text-right pr-10'>
                                            <li className="rounded-sm font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700">
                                                <NavLink to='/' className="p-2 space-x-3 rounded-md">Submenu1</NavLink>
                                            </li>
                                            <li>Submenu2</li>
                                            <li>Submenu3</li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;