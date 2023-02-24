import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <article className='container mx-auto min-h-screen'>
            <h1 className='text-center text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-primary font-semibold'>You're Out of Bravo Bank server</h1>
            <h1 className="glitch">
                <span aria-hidden="true">404</span>
                404
                <span aria-hidden="true">404</span>
            </h1>
            <div className='text-center mx-auto'>
                <h3 className='text-4xl text-gray-100 font-bold animate-pulse'>Page Not Found</h3>
                <p>
                    Back to <Link to='/'><button className='p-2 border-2 hover:border-gray-100 bg-gradient-to-r from-primary to-pink-500 rounded-md px-4 text-xl hover:scale-110 text-gray-100 hover:shadow-lg hover:shadow-primary border-sky-500 duration-500'>Home</button></Link>
                </p>
            </div>
        </article>
    );
};

export default NotFound;