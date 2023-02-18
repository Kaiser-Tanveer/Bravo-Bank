import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa'
import {  HiOutlineHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';


const SideMenu = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <div>
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
            <div className={` lg:block   ${open?"  dark:bg-gray-800   block":" left-0 bottom-0  top-0 hidden "}`}>
                <div className="flex lg:fixed static h-[100vh]  bg-gray-800 flex-col  p-3 w-60 dark:text-gray-100">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setOpen(!open)}  className="p-2 lg:hidden">
                               X
                            </button>
                        </div>
                        
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">

                                <li className="rounded-sm">
                                    <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
                                    <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>

                                <li className="rounded-sm">
                                    <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
                                        <FaCreditCard />
                                        <span>Cards</span>
                                    </NavLink>
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