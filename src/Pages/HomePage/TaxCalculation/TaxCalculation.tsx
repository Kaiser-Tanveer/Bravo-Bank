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
        <div className='w-3/5 mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='lg:flex lg:gap-4'>
                    <div>
                        <input onChange={handleUsd} className='lg:text-4xl text-white font-bold text-center text-transparent bg-gray-500 bg-gradient-to-r from-sky-500 to-pink-500 py-4' type="text" defaultValue={usd} />
                    </div>
                    <div>
                        <input onChange={handleBdt} className='lg:text-4xl mt-4 lg:mt-0 text-white font-bold text-center text-transparent bg-gray-500 bg-gradient-to-r from-sky-500 to-pink-500 py-4' type="text" defaultValue={bdt}/>
                    </div>
                </div>
                <div className='lg:flex lg:gap-4 mt-4'>
                    <button type='submit' className='btn lg:text-4xl text-white font-bold text-center text-transparent bg-gray-500 bg-gradient-to-r from-sky-500 to-pink-500 py-4 mx-auto'>Calculate</button>
                    <div>
                        <input value={newValue} readOnly className='lg:text-4xl mt-4 lg:mt-0 text-white font-bold text-center text-transparent bg-gray-500 bg-gradient-to-r from-sky-500 to-pink-500 py-4' type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TaxCalculation