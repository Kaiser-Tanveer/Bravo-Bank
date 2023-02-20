

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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
        fetch(`http://localhost:5000/accounts/${accountType}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [accountType])

    return (
        <div className='bg-gradient-to-br from-gray-300 to-gray-100'>
            <div className='relative'>
                <img src={details?.img} alt="" className='w-full h-full' />
                <div className='bg-gradient-to-r from-primary via-gray-500 to-sky-500 p-1 absolute bottom-1/2 left-6 rounded-lg'>
                    <h1 className='text-gray-100 font-bold lg:text-7xl md:text-5xl text-2xl text-left bg-gray-700 rounded-lg p-8'>{details?.name}  <br />Information</h1>
                </div>
            </div>
            <div className='bg-gradient-to-r from-primary to-sky-500 p-1 rounded-lg shadow-lg shadow-gray-700 hover:from-sky-500 hover:to-primary duration-500 w-2/3 mx-auto my-8'>
                <p className='text-xl text-gray-700 bg-gray-200 p-6'>{details?.Description}</p>
            </div>
            <hr className='border-2 border-primary w-1/2 mx-auto mb-4'/>
            <div className='grid md:grid-cols-3 gap-6 m-6'>
                {
                    details?.facilities?.map((facility: { title: string, details: string }) => <div className='bg-gradient-to-r from-primary to-sky-500 p-1 rounded-lg shadow-lg shadow-gray-700 hover:from-sky-500 hover:to-primary duration-500 '>
                        <div className='text-gray-100 text-3xl md:font-bold font-semibold'>
                            <h1 className='p-10'>{facility?.title}</h1>
                        </div>
                        <p className='-mb-52 overflow-hidden'>{facility?.details}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default AccountDetails