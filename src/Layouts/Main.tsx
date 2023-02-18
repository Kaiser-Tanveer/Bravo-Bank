import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import SideMenu from '../Shared/SideMenu/SideMenu';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='flex  gap-3 p-0 m-0'>
                    <div className='z-20 w-[5%] lg:w-[20%] '>
                        <SideMenu />
                    </div>
                    <div className='lg:w-[80%] w-[95%] '>
                        <Outlet />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Main;