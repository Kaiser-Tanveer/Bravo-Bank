import React, { useState } from 'react'


const TaxCalculation = () => {

    const [usd, setUsd] = useState(1)
    const [bdt, setBdt] = useState(1)
    const [newValue, setNewValue] = useState(1)

    const handleUsd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsd(Number(event.target.value))
    }
    const handleBdt = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBdt(Number(event.target.value))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let result
        result = Number((usd * bdt).toFixed(2))
        setNewValue(result)
    }

    return (
        <div className='container mx-auto p-10'>
            <h1 className='text-4xl text-center font-bold text-gray-700 pb-6'>Dollar to BDT Converter</h1>
            <form onSubmit={handleSubmit}
                className='grid md:grid-cols-2 gap-6'
            >
                <div>
                    <input onChange={handleUsd} className='rounded-lg w-full text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 ' type="text" placeholder='Enter Your USD' />
                </div>
                <div>
                    <input onChange={handleBdt} className='rounded-lg w-full text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 ' type="text" placeholder='Rate per dollar' />
                </div>
                <button type='submit' className='rounded-lg w-full btn btn-primary text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 mx-auto bg-gradient-to-r from-sky-500 to-pink-500 hover:scale-110 duration-500 hover:text-gray-100 font-semibold'>Calculate</button>
                <div>
                    <input value={`${newValue} BDT`} readOnly placeholder='00' className='rounded-lg w-full text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 text-sky-500 font-semibold' type="text" />
                </div>
            </form>
        </div>
    )
}

export default TaxCalculation