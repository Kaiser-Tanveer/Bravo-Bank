import React, { useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

type cardInfo = {
    user: string,
    email: string,
    card: string,
    phone: string,
    nid: string,
    accNum: string,
}

const CardsRequest = () => {
    const { user } = useContext(AuthContext);

    const { id } = useParams()

    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleAccDetails', id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/singleAccDetails/${id}`)
            const data = await res.json()
            return data
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cardInfo>();

    const onSubmit: SubmitHandler<cardInfo> = (data) => {
        const cardData = {
            name: usersInfo.user,
            email: usersInfo?.email,
            card: data.card,
            phone: usersInfo.phone,
            nid: usersInfo.nid,
            accNum: usersInfo._id,
            accountType: usersInfo.role,
            status: 'pending'
        }

        fetch("http://localhost:5000/cardsReq", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cardData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Cards Request Done")
                }
            })
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
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                    </select>
                    {errors?.card && (
                        <p className="text-red-700 text-center">{errors.card.message}</p>
                    )}
                </div>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input
                            type="text"
                            {...register("user")}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Kaiser Tanveer"
                            value={usersInfo?.user}
                        />
                        {errors.user && (
                            <p className="text-red-700 text-center">
                                {errors.user.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.email}
                    />
                    {errors.email && (
                        <p className="text-red-700 text-center">{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        {...register("phone")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.phone}
                    />
                    {errors.phone && (
                        <p className="text-red-700 text-center">{errors.phone.message}</p>
                    )}
                </div>
                <div>
                    <label>NID</label>
                    <input
                        type="text"
                        {...register("nid")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?.nid}
                    />
                    {errors.nid && (
                        <p className="text-red-700 text-center">{errors.nid.message}</p>
                    )}
                </div>
                <div>
                    <label>Account Number</label>
                    <input
                        type='text'
                        {...register("accNum")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        value={usersInfo?._id}
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

export default CardsRequest;