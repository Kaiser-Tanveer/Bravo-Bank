import React, { useEffect, useState } from 'react';
import { FaUnlock } from 'react-icons/fa';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

type detail = {
    Description: string,
    name: string,
    img: string,
    facilities: []
}

const AccountDetails = () => {
    const { accountType } = useParams();
    const [details, setDetails] = useState<detail>();

    useEffect(() => {
        fetch(`https://bravo-bank-server.vercel.app/accounts/${accountType}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [accountType]);
    return (
        <div className='bg-gradient-to-br from-gray-300 to-gray-100 pt-12 lg:pt-0 pb-20'>
            <div className='relative'>
                <img src={details?.img} alt="" className='w-full h-full' />
                <div className='bg-gradient-to-r bg-opacity-30 from-primary via-gray-500 to-sky-500 py-1 pr-1 w-1/2 absolute top-0 -left-0 rounded-lg'>
                    <h1 className='text-gray-100 font-bold lg:text-5xl md:text-5xl text-2xl text-left bg-gray-700 rounded-lg p-8'>{details?.name} <br />Information</h1>
                </div>
            </div>
            <div className='bg-gradient-to-r from-primary to-sky-500 p-1 rounded-lg shadow-lg shadow-gray-700 hover:from-sky-500 hover:to-pink-500 duration-500 w-2/3 mx-auto my-8'>
                <p className='text-xl text-gray-700 bg-gray-200 p-6'>{details?.Description}</p>
            </div>
            <hr className='border-2 border-sky-500 w-1/2 mx-auto mb-8' />
            <hr className='border-2 border-sky-500 w-1/3 mx-auto mb-8' />
            <hr className='border-2 border-sky-500 w-1/4 mx-auto mb-8' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-6 group'>
                {
                    details?.facilities?.map((facility: { title: string, details: string }) => <div className='bg-gradient-to-r  group-hover:h-full hover:overflow-y-scroll h-40 from-primary to-sky-500 p-1 rounded-lg shadow-lg shadow-gray-700 hover:from-sky-500 hover:to-primary duration-700 overflow-hidden group-hover:blur-sm group-hover:scale-[80%] hover:!blur-0 hover:!scale-110'>
                        <div className='py-10 items-center'>
                            <h1 className='text-gray-100 px-2 pb-16 group-hover:pb-6 group-hover:w-full duration-700 group-hover:text-center text-3xl md:font-bold font-semibold'>{facility?.title}</h1>
                            <p className='-mb-96 hover:bg-gray-200 p-6 rounded-lg group-hover:mb-0 ease-in-out duration-1000'>{facility?.details}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className='w-full p-8 rounded-lg bg-gradient-to-r from-gray-100 to-gray-300'>
                <Link
                    to="/openAcc"
                    className='py-4 px-10 text-xl font-bold text-gray-100 bg-pink-500 rounded-md flex items-center justify-center mx-5 hover:scale-110 duration-700'
                >
                    <FaUnlock className='mr-2' />
                    <span>Open Account</span>
                </Link>
            </div>
        </div>
    )
}

export default AccountDetails