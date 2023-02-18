import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiOutlineHome, HiLogin } from 'react-icons/hi';
import { FaCreditCard } from 'react-icons/fa';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="lg:p-4 bg-primary text-white">
            <div className="container flex justify-between items-center h-16 mx-auto">
                <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className='font-bold md:text-3xl uppercase text-2xl lg:ml-0 ml-4'>Bravo Bank</h2>
                </Link>
                <ul className="items-stretch hidden lg:flex space-x-3 ">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to='/' className="flex text-xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Login</Link>
                    </li>
                </ul>

                <div className="dropdown lg:hidden relative">
                    <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={() => setOpen(!open)}>
                        <HiMenu size={30} className='lg:mr-0 mr-4'></HiMenu>
                    </label>
                    {
                        open &&
                        <div className='bg-black bg-opacity-70 w-[100vw] h-[100vh] z-50 absolute right-0 top-[47px] duration-700 ease-in'>

                            <ul tabIndex={0} className="dropdown-content menu rounded-box absolute bg-secondary  p-3 rounded-lg text-primary w-52 -right-4 border border-l-primary h-[100vh] ease-in-out">
                                <li className='text-primary text-xl py-4 hover:bg-primary hover:text-white hover:pl-4 duration-700 rounded-xl'><Link to='/' className='flex items-center'><HiOutlineHome className='text-xl mr-1' /><span>Home</span></Link></li>
                                <li className='text-primary text-xl py-4 hover:bg-primary hover:text-white hover:pl-4 duration-700 rounded-xl mt-2'><Link to='/' className='flex items-center'><FaCreditCard className='text-xl mr-1' /><span>Cards</span></Link></li>
                                <li className='text-primary mt-2 text-xl py-4 hover:bg-primary hover:text-white hover:pl-4 duration-700 rounded-xl'><Link to='/' className='flex items-center'><HiLogin className='text-xl mr-1' /> <span>Login</span></Link></li>
                            </ul>

                        </div>
                    }
                </div>

            </div>

        </header>
    );
};

export default Navbar;