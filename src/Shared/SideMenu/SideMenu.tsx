import React, { useState } from 'react';
import { HiChevronDown, HiOutlineHome, HiOutlineUserAdd } from 'react-icons/hi';
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
                <div className="flex min-h-screen flex-col p-3 w-60 text-primary shadow-primary shadow-inner">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <button onClick={() => setOpen(!open)} className="p-2 lg:hidden">
                                X
                            </button>
                        </div>

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm relative">

                                <li className="rounded-sm font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700">
                                    <NavLink to='/' className="flex items-center p-2 space-x-3 rounded-md">
                                        <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li
                                    className={`rounded-sm font-semibold text-primary hover:scale-110 py-2 hover:bg-primary hover:text-white hover:pl-4 w-full duration-700`}>
                                    <NavLink to='/' className="flex items-center justify-between p-2 space-x-3 rounded-md">
                                        <div className='flex items-center'>
                                            <HiOutlineUserAdd className='mr-2' />
                                            <span>Accounts</span>
                                        </div>
                                        <HiChevronDown
                                            onClick={() => setOpen(!open)}
                                            className='text-xl w-full' />
                                    </NavLink>
                                    {
                                        open &&
                                        <ul className='group ease-linear duration-700 absolute rounded-lg shadow-sm shadow-primary p-2 bg-gray-100 w-full text-primary border-t-0 pl-4'>
                                            <li className="group-hover:blur-sm hover:!blur-0 group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 rounded-r-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="p-2 space-x-3 hover:ml-2 duration-300 rounded-md">Student Account</NavLink>
                                            </li>
                                            <li className="group-hover:blur-sm hover:!blur-0 group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 rounded-r-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="p-2 space-x-3 hover:ml-2 duration-300 rounded-md">Savings Account</NavLink>
                                            </li>
                                            <li className="group-hover:blur-sm hover:!blur-0 group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 rounded-r-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="p-2 space-x-3 hover:ml-2 duration-300 rounded-md">Current Account</NavLink>
                                            </li>
                                            <li className="group-hover:blur-sm hover:!blur-0 group-hover:scale-90 hover:!scale-125 hover:shadow-lg hover:shadow-gray-700 rounded-r-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="p-2 space-x-3 hover:ml-2 duration-300 rounded-md">Fixed Deposit Account</NavLink>
                                            </li>
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