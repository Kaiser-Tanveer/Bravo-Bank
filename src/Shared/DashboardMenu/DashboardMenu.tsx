import React, { useState } from 'react';
import { HiMenu, HiOutlineHome, HiOutlineX, HiUserAdd, HiCreditCard } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const DashboardMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <aside className="z-40">
            <div onClick={() => setOpen(!open)} className="fixed z-50 lg:hidden">
                {open ? (
                    <div className="fixed right-0 top-0 mr-4 mt-2 p-[3px] rounded-md bg-gradient-to-r from-sky-500 to-pink-500 hover:scale-125 duration-700">
                        <HiOutlineX className="text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary" />
                    </div>
                ) : (
                    <div className="fixed left-0 top-0 ml-4 mt-2 p-[3px] rounded-md bg-gradient-to-r from-pink-500 to-sky-500 duration-700">
                        <HiMenu className="text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary" />
                    </div>
                )}
            </div>
            <div
                className={`fixed top-0 bg-gray-100 lg:w-[25%] lg:block py-8 rounded-sm z-40 overflow-y-scroll ${open
                    ? "block -mt-2 fixed w-full h-full duration-700 overflow-y-scroll"
                    : "left-0 bottom-0 top-0 hidden z-40"
                    }`}
            >
                <div className="flex flex-col px-3 text-primary">
                    <div className="space-y-3">
                        <h2 className="font-extrabold text-4xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 uppercase">
                            Dashboard
                        </h2>
                        <hr className="w-full border border-sky-500" />
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm pr-4">
                                <li className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => setOpen(!open)}
                                    className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/dashboard"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiUserAdd />
                                        <span>Accounts Info</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => setOpen(!open)}
                                    className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/dashboard/cardRequest"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiCreditCard />
                                        <span>Card Request</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => setOpen(!open)}
                                    className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/dashboard/loanRequest"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiCreditCard />
                                        <span>Loan Request</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => setOpen(!open)}
                                    className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/dashboard/DepositRequest"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiCreditCard />
                                        <span>Deposit Request</span>
                                    </NavLink>
                                </li>
                                <li
                                    onClick={() => setOpen(!open)}
                                    className="rounded-lg font-semibold text-sky-500 px-4 w-full duration-700">
                                    <NavLink
                                        to="/dashboard/allUsers"
                                        className="flex items-center hover:bg-gradient-to-r from-pink-500 to-sky-500 hover:text-white hover:scale-105 duration-500 p-2 space-x-3 rounded-md"
                                    >
                                        <HiUserAdd />
                                        <span>All Users</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashboardMenu;