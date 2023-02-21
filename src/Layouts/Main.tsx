import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import SideMenu from '../Shared/SideMenu/SideMenu';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='lg:grid lg:grid-cols-12 lg:pt-20'>
                <div className='lg:col-span-3 border border-r-primary hidden lg:block'>
                    <SideMenu />
                </div>
                <div className='col-span-12 lg:col-span-9 ml-auto w-full container mx-auto'>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;