import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom'


type cardInfo = {
    amount: number,
    loan: string,
    phone: string,
    nid: string,
    accNum: string,
    income: number,
    img: string,
    company: string,
    evidence: string,
    lAmount: number,
    lDuration: string
}
const DepRePay = () => {

    const { id } = useParams();

    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleLoanDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bravo-bank-server.vercel.app/singleLoanDetails/${id}`)
            const data = await res.json()
            return data
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cardInfo>();

    const onSubmit = (data: any) => {
        if (usersInfo?.tLAmount > data.amount) {
            const userInfo = {
                email: usersInfo?.email,
                lAmount: usersInfo?.lAmount,
                tLAmount: usersInfo?.tLAmount,
                id: usersInfo?._id,
                accNum: data.accNum,
                amount: data.amount,
                nid: usersInfo?.nid
            }

            fetch(`https://bravo-bank-server.vercel.app/lInfoUpdate`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success('Loan Status updated successfully')
                        refetch()
                    }
                })

        }
        else {
        }
    }

    return (
        <section
            style={{
                backgroundImage:
                    "linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(https://i.ibb.co/yQFGV86/loanBg.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='py-16 min-h-screen lg:py-10'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='container max-w-[450px] mx-auto text-gray-100 border-2 border-gray-100 p-6 rounded-lg shadow-lg shadow-pink-500'>
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Loan Repay</h1>
                <div>
                    <label>Your Loan Type</label>
                    <input
                        type="text"
                        {...register("loan")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder="ex: Kaiser Tanveer"
                        defaultValue={usersInfo?.loan}
                        readOnly
                    />
                    {errors.loan && (
                        <p className="text-red-700 text-center">
                            {errors.loan.message}
                        </p>
                    )}
                </div>
                <div>
                    <label>Loan Repay Account Number</label>
                    <input
                        type='text'
                        {...register("accNum")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder="26th6ty22hy"
                    />
                    {errors.accNum && (
                        <p className="text-red-700 text-center">{errors.accNum.message}</p>
                    )}
                </div>
                <div>
                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            {...register("amount")}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="00000"
                        />
                        {errors.amount && (
                            <p className="text-red-700 text-center">
                                {errors.amount.message}
                            </p>
                        )}
                    </div>
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

export default DepRePay