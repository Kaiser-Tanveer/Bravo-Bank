import React from 'react';
import Slider from 'react-slick';

const CardSlider = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className='w-5/6 mx-auto my-16 py-2 shadow-lg shadow-gray-700 min-h-40 bg-gray-100 rounded-lg'>
            <Slider {...settings}>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/hCjcy0N/card-Sample-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/w6qBJg7/express-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/XC8y7T9/samsung-Pay-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/qC9yBP8/GPay-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/vJVTqMS/transfer-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/P9SDmVY/apple-Pay-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/B6MTvxZ/card-Mechine-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/St0P31V/visa-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/QDvS57s/MCard-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
                <div className="mx-4 p-2">
                    <img src="https://i.ibb.co/PjH4W1n/c-Card-1.png" alt="" className='shadow-inner shadow-gray-700 rounded-xl  bg-gray-100 p-4' />
                </div>
            </Slider>
        </div>
    );
};

export default CardSlider;