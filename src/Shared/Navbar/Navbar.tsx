import React from 'react';
import { Link } from 'react-router-dom';

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
    // const [open, setOpen] = useState(false);

    return (
        <header id="navbar" className="lg:p-4 bg-opacity-100 bg-primary mx-auto fixed w-full z-50 text-white">
            <div className="container flex justify-between items-center mx-auto">
                <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className='font-bold md:text-3xl uppercase text-2xl lg:ml-0 ml-12 text-transparent bg-gradient-to-b bg-clip-text from-gray-100 to-sky-300'>Bravo Bank</h2>
                </Link>
                <ul className="items-stretch flex space-x-3 ">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to='/' className="flex text-xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Login</Link>
                    </li>
                </ul>

            </div>

        </header>
    );
};

export default Navbar;