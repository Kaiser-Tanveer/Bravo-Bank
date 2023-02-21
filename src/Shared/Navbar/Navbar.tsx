import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/favicon.png';

const Navbar = () => {

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            (document.getElementById('navbar') as HTMLFormElement).style.top = "0";
        } else {
            (document.getElementById('navbar') as HTMLFormElement).style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <header id="navbar" className="lg:p-4 bg-opacity-95 bg-primary top-0 glass mx-auto fixed w-full z-40 text-white px-6">
            <div className="container flex justify-end py-2 items-center mx-auto">
                <img src={logo} alt="logo" className='px-4 h-10 bg-gray-200 shadow-md shadow-gray-700 rounded-md' />
            </div>

        </header>
    );
};

export default Navbar;