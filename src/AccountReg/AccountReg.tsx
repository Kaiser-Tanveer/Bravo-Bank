import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    fName: string,
    lName: string,
};

const AccountReg = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='container mx-auto'
            >
                <label htmlFor="fName">First Name</label>
                <input
                    placeholder="First Name"
                    {...register("lName", { required: "Name is required" })}
                    className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4'
                />
                {errors.fName &&
                    <p className='text-red-700 text-center' >{errors.fName.message}</p>}
                <input
                    placeholder="Last Name"
                    {...register("lName", { required: "This is required" })}
                    className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4' />
                {errors.lName &&
                    <p className='text-red-700 text-center' >{errors.lName.message}</p>}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AccountReg;