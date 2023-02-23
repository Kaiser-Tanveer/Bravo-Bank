import React, { useState } from 'react'

const TaxCalculate = () => {


    const [USD, setUsd] = useState<0 | any>(null)
    const [BDT, setBdt] = useState<0 | any>(null)
    const [currency, setCurrency] = useState<0 | any>(null)

    const handleUsd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsd(event.target.value)
    }
    const handleBdt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBdt(event.target.value)
    }

    const taxHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = Number(USD * BDT).toFixed(2)
        setCurrency(result)
    }

    return (
        <div className='pb-20'>
            <h2 className='text-center font-bold text-gray-700 text-4xl md:text-6xl pb-10 required'>Tax Calculator</h2>
            <form onSubmit={taxHandler} className='w-4/5 mx-auto grid md:grid-cols-2 gap-4 items-center'>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                    <div className="flex">
                        <input  onChange={handleUsd} type="text" name="price" id="price" placeholder="your USD amount" className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary border-x-0 border-t-0 border-b-2 text-gray-700 mx-auto w-full' />
                    </div>
                </fieldset>
                <fieldset className="w-full space-y-1 dark:text-gray-100">
                    <div className="flex">
                        <input  onChange={handleBdt} type="text" name="price" id="price" placeholder="Current Turrent" className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary border-x-0 border-t-0 border-b-2 text-gray-700 w-full' />
                    </div>
                </fieldset>
                <input name='result' type="submit" value='Calculate' className='mx-auto w-full ml-auto bg-gradient-to-r from-sky-500 to-gray-100 border-2 border-gray-500 rounded-md py-3 text-xl font-bold text-gray-700 hover:from-gray-100 hover:to-pink-500 hover:text-sky-500 hover:border-sky-500 hover:scale-110 duration-700' />
                <input name='result' type="number" className='text-xl p-3 font-semibold bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-sky-500 rounded-md focus:from-sky-200 focus:to-gray-200 focus:outline-none outline-primary text-sky-500' value={currency} readOnly />
            </form>
        </div>
    )
}

export default TaxCalculate