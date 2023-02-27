import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='py-28'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;