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
        <div className='container mx-auto py-20 bg-gradient-to-r from-gray-300 to-gray-100'>
            <form onSubmit={handleSubmit}
                className='w-full border border-primary shadow-lg shadow-gray-500 lg:grid lg:grid-cols-2 gap-6 p-6 rounded-lg'
            >
                <div>
                    <input onChange={handleUsd} className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500' type="text" placeholder='USD' />
                </div>
                <div>
                    <input onChange={handleBdt} className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500' type="text" placeholder='Dollar Rate' />
                </div>
                <div>
                    <button type='submit' className='rounded-lg w-full mx-auto uppercase text-xl border-primary bg-gradient-to-r from-pink-500 to-sky-500 text-gray-100 py-2'>Calculate</button>
                </div>
                <div>
                    <input value={newValue} readOnly className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500' type="number" />
                </div>
            </form>
        </div>
    )
}

export default TaxCalculation