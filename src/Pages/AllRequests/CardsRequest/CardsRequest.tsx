import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

type cardInfo = {
    name: string,
    email: string,
    card: string,
    phone: number,
    nid: number,
    accNum: number,
}

const CardRequest = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, refetch, data: usersInfo = [] } = useQuery({
        queryKey: ['/userAccInfo'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/userAccounts?email=${user?.email}`)
            const data = await res.json()
            console.log(data);
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cardInfo>();

    const onSubmit: SubmitHandler<cardInfo> = (data) => {
        const cardData = {
            name: user?.displayName,
            email: user?.email,
            card: data.card,
            phone: data.phone,
            nid: data.nid,
            accNum: data.accNum
        }


        // fetch("http://localhost:5000/cardsReq", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(cardData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        // console.log(data);
        //     })
    }
    return (
        <section
            style={{
                backgroundImage:
                    "linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(https://i.ibb.co/BBqf4jP/cards-Req-Bg.webp)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='py-16 min-h-screen lg:py-10'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-pink-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Request a card</h1>
                <div>
                    <label>Choose a Card</label>
                    <select
                        {...register("card", {
                            required: "Please select the Account Type",
                        })}
                        onChange={(e) => console.log(e.target.value)}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                    </select>
                    {errors.card && (
                        <p className="text-red-700 text-center">{errors.card.message}</p>
                    )}
                </div>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Kaiser Tanveer"
                        />
                        {errors.name && (
                            <p className="text-red-700 text-center">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email" readOnly
                        {...register("email", { required: "Name is required" })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        defaultValue={user?.email}
                    />
                    {errors.email && (
                        <p className="text-red-700 text-center">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="tel"
                        {...register("phone", { required: "Phone No. is required" })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        defaultValue="+880"
                    />
                    {errors.phone && (
                        <p className="text-red-700 text-center">{errors.phone.message}</p>
                    )}
                </div>
                <div>
                    <label>NID</label>
                    <input
                        type="tel"
                        {...register("nid", { required: "NID No. is required" })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    />
                    {errors.nid && (
                        <p className="text-red-700 text-center">{errors.nid.message}</p>
                    )}
                </div>
                <div>
                    <label>Account Number</label>
                    <input
                        type="number"
                        {...register("accNum", { required: "Account No. is required" })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    />
                    {errors.accNum && (
                        <p className="text-red-700 text-center">{errors.accNum.message}</p>
                    )}
                </div>
                <input
                    type="submit"
                    value="Request"
                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                />
            </form>
        </section>
    )
}

export default CardRequest