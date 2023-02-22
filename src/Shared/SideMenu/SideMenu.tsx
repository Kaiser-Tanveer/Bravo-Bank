import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp, HiMenu, HiOutlineCreditCard, HiOutlineHome, HiOutlineUserAdd, HiOutlineX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import Spinner from '../../Pages/Spinner/Spinner';


const SideMenu = () => {
    const [open, setOpen] = useState(false);
    const [accOpen, setAccOpen] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);
    const [loanOpen, setLoanOpen] = useState(false);

    const { isLoading, refetch, data: types = [] } = useQuery({
        queryKey: ['/accountsTypes'],
        queryFn: async () => {
            const res = await fetch('https://bravo-bank-server.vercel.app/accountsTypes')
            const data = await res.json()
            return data
        }
    })


    if (isLoading) {
        <Spinner />
    }

    return (
        <aside className='z-40'>
            <div
                onClick={() => setOpen(!open)}
                className='fixed z-50 w-full lg:w-fit lg:hidden rounded-md ml-4 mt-2 p-[3px] top-0 left-0 bg-gradient-to-r from-pink-500 to-sky-500 duration-500'>
                {
                    open ?
                        <HiOutlineX
                            className='text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary'
                        />
                        :
                        <HiMenu
                            className='text-3xl font-bold bg-gray-100 rounded-sm duration-500 ease-in-out text-primary'
                        />
                }
            </div>
            <div className={`lg:block fixed py-8 bg-gray-100 rounded-sm shadow-lg shadow-gray-700 z-40 overflow-y-scroll ${open ? "block" : "left-0 bottom-0 top-0 hidden duration-700 h-full z-40"}`} >
                <div className="flex flex-col px-3 text-primary">
                    <div className="space-y-3">
                        <h2 className='font-extrabold text-4xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500'>Bravo Bank</h2>
                        <hr className='w-full border border-sky-500' />
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm pr-4">

                                <li className="rounded-lg font-semibold text-primary px-4 w-full duration-700">
                                    <NavLink to='/' className="flex items-center hover:bg-primary hover:text-white hover:scale-110 duration-500 hover:py-4 p-2 space-x-3 rounded-md">
                                        <HiOutlineHome />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}>
                                    <button
                                        onClick={() => setAccOpen(!accOpen)}
                                        className="flex items-center hover:bg-primary hover:text-white hover:scale-110 duration-500 hover:py-4 justify-between p-2 space-x-3  w-full rounded-md">
                                        <div className='flex items-center'>
                                            <HiOutlineUserAdd className='mr-2' />
                                            <span>Accounts</span>
                                        </div>
                                        {
                                            accOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </button>
                                    {
                                        accOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-100 w-full text-primary'>
                                            {
                                                types?.map((type: { _id: React.Key | null | undefined; accountType: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | ((props: { isActive: boolean; isPending: boolean; }) => React.ReactNode) | null | undefined; }) =>
                                                    <li key={type._id} className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                        <NavLink to={`/accountDetail/${type.accountType}`} className="space-x-3 hover:ml-2 duration-300 rounded-md">{type?.name}</NavLink>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    }
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}>
                                    <button
                                        onClick={() => setCardOpen(!cardOpen)}
                                        className="flex items-center hover:bg-primary hover:text-white hover:scale-110 duration-500 hover:py-4 justify-between p-2 space-x-3 rounded-md w-full">
                                        <div className='flex items-center'>
                                            <HiOutlineCreditCard className='mr-2' />
                                            <span>Cards</span>
                                        </div>
                                        {
                                            cardOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </button>
                                    {
                                        cardOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-50 w-full text-primary'>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Debit Card</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Credit Card</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </li>
                                <li
                                    className={`rounded-lg font-semibold text-primary px-4 w-full duration-700`}>
                                    <button
                                        onClick={() => setLoanOpen(!loanOpen)}
                                        className="flex items-center hover:bg-primary hover:text-white hover:scale-110 duration-500 hover:py-4 justify-between p-2 space-x-3 rounded-md w-full">
                                        <div className='flex items-center'>
                                            <FaHandHoldingUsd className='text-xl pr-2' />
                                            <span>Loans</span>
                                        </div>
                                        {
                                            loanOpen ?
                                                <HiChevronUp className='text-xl' />
                                                :
                                                <HiChevronDown className='text-xl' />
                                        }
                                    </button>
                                    {
                                        loanOpen &&
                                        <ul className='group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-gray-50 w-full text-primary'>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full  duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Personal Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Home Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Student Loan</NavLink>
                                            </li>
                                            <li className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-primary py-2 hover:bg-primary hover:text-white  w-full duration-700">
                                                <NavLink to='/' className="space-x-3 hover:ml-2 duration-300 rounded-md">Car Loan</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideMenu;