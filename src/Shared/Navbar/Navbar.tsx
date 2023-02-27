import React from 'react';
import logo from '../../Assets/logo/favicon.png';

const Navbar = () => {

    let navPrevScrollPos = window.pageYOffset;
    window.onscroll = function () {
        const navCurrentScrollPos = window.pageYOffset;
        if (navPrevScrollPos > navCurrentScrollPos) {
            (document.getElementById('navbar') as HTMLFormElement).style.top = "0";
        } else {
            (document.getElementById('navbar') as HTMLFormElement).style.top = "-100px";
        }
        navPrevScrollPos = navCurrentScrollPos;
    }

    return (
        <header id="navbar" className="lg:p-4 bg-opacity-95 bg-primary top-0 glass mx-auto fixed w-full z-40 text-white px-6 duration-500">
            <div className="container flex justify-end py-2 items-center mx-auto">
                <img src={logo} alt="logo" className='px-4 h-10 bg-gray-200 shadow-md shadow-gray-700 rounded-md' />
            </div>

        </header>
    );
};

export default Navbar;