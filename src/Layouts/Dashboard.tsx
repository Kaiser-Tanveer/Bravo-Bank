import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import DashboardMenu from '../Shared/DashboardMenu/DashboardMenu';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:grid lg:grid-cols-12 lg:pt-20'>
                <div className='lg:col-span-3'>
                    <DashboardMenu />
                </div>
                <div className='col-span-12 lg:col-span-9 container mx-auto'>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;