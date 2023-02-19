import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import SideMenu from '../Shared/SideMenu/SideMenu';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='grid lg:grid-cols-12 pt-7 lg:pt-20'>
                <div className='lg:col-span-2 hidden lg:block border-r-8 bg-gray-200 border-primary shadow-md shadow-primary'>
                    <SideMenu />
                </div>
                <div className='col-span-12 lg:col-span-10 ml-auto w-full'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;