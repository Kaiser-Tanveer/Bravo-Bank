import React from 'react';
import { Audio } from 'react-loader-spinner';
import logo from '../../Assets/logo/favicon.png';

const Spinner = () => {
    return (
        <div className='w-full min-h-screen pt-[30vh]'>
            <div className='flex mx-auto justify-center'>
                <Audio
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                />
            </div>
            <img src={logo} alt="logo" className='flex mx-auto animate-pulse' />
        </div>
    );
};

export default Spinner;