import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

type taxInput = {
    salary: number
}

const TaxCalculation = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<taxInput>();

    const [result, setResult] = useState(0)

    const onSubmit: SubmitHandler<taxInput> = (data) => {
        console.log(data);
        let salary = data.salary;
        if (salary <= 100000) {
            return setResult(salary * result)
        }
        else if (salary >= 100000 && salary <= 300000) {
            return setResult(salary * 0.05)
        }
        else if (salary >= 300000 && salary <= 400000) {
            return setResult(salary * 0.1)
        }
        else if (salary >= 400000 && salary <= 500000) {
            return setResult(salary * 0.15)
        }
        else if (salary >= 500000 && salary <= 600000) {
            return setResult(salary * 0.20)
        }
        else if (salary >= 600000) {
            return setResult(salary * 0.25)
        }
    }

    return (
        <div className='container mx-auto p-10'>
            <h1 className='text-4xl text-center font-bold text-gray-700 pb-6'>Tax Calculation</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='grid md:grid-cols-2 gap-6'
            >
                <div>
                    <input
                        {...register("salary", { required: "Salary is required" })}
                        className='rounded-lg w-full text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 ' type="number" placeholder='Enter Your Salary' />
                    {errors.salary && (
                        <p className="text-red-700 text-center">
                            {errors.salary.message}
                        </p>
                    )}
                </div>
                <button type='submit' className='rounded-lg w-full btn btn-primary text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 mx-auto bg-gradient-to-r from-sky-500 to-pink-500 hover:scale-110 duration-500 hover:text-gray-100 font-semibold'>Calculate</button>
                <div>
                    <input value={`${result} BDT`} readOnly placeholder='Your Result' className='rounded-lg w-full text-xl p-4 focus:ring-pink-500 focus:outline-none focus:border-sky-500 border-2 text-sky-500 font-semibold' />
                </div>
            </form>
        </div>
    )
}

export default TaxCalculation