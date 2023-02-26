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
                        <input onChange={handleUsd} className='rounded-lg lg:text-4xl py-4 focus:ring-2 ' type="text" defaultValue={usd} />
                    </div>
                    <div>
                        <input onChange={handleBdt} className='rounded-lg lg:text-4xl mt-4 lg:mt-0 py-4 focus:ring-2 ' type="text" defaultValue={bdt}/>
                    </div>
                </div>
                <div className='lg:flex lg:gap-4 mt-4'>
                    <button type='submit' className='rounded-lg btn lg:text-4xl py-4 focus:ring-2  mx-auto'>Calculate</button>
                    <div>
                        <input value={newValue} readOnly className='rounded-lg lg:text-4xl mt-4 lg:mt-0 py-4 focus:ring-2 ' type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TaxCalculation