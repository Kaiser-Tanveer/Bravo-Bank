import React from 'react';

const TaxCalculation = () => {
    const taxHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const amount = form.amount.value;
        const tax = form.tax.value;
        let result = form.result.value;
        result = parseInt(2)(amount * tax);

        console.log(amount, tax, result);
    }
    return (
        <div className='pb-20'>
            <h2 className='text-center font-bold text-gray-700 text-4xl md:text-6xl pb-10 required'>Tax Calculator</h2>
            <form onSubmit={taxHandler} className='w-4/5 mx-auto grid md:grid-cols-2 gap-4 items-center'>
                <input name='amount' type="number" placeholder='your amount' min='0' className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary border-x-0 border-t-0 border-b-2' />
                <input name='tax' type="number" placeholder='tax percentage' className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary border-x-0 border-t-0 border-b-2' />
                <input name='result' type="submit" value='Calculate' className='w-2/3 ml-auto bg-gradient-to-r from-sky-500 to-gray-100 border-2 border-gray-500 rounded-md py-3 text-xl font-bold text-gray-700 hover:from-gray-100 hover:to-pink-500 hover:text-sky-500 hover:border-sky-500 hover:scale-110 duration-700' />
                <input name='result' type="number" className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary text-sky-500' readOnly />
            </form>
        </div>
    );
};

export default TaxCalculation;  