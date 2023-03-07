import React from 'react';
import Spinner from '../../Spinner/Spinner';
import { toast } from 'react-hot-toast';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

type depositInfo = {
    user: string,
    depositAmount: string,
    phone: string,
    nid: string,
    accNum: string,
    img: string,
    amount: string
}

const Deposit = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const { id } = useParams();

    const { isLoading: any, refetch, data: userInfo = {} } = useQuery({
        queryKey: ['/singleAccDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bravo-bank-server.vercel.app/singleAccDetails/${id}`)
            const data = await res.json()
            return data;
        }
    })

    const { register, handleSubmit, formState: { errors }, } = useForm<depositInfo>();

    const onSubmit = (data: any) => {
        const userData = {
            accNum: userInfo._id,
            depositAmount: data.depositAmount,
            userAmount: userInfo.amount,
            depStatus: "pending",
            email: userInfo.email
        }

        fetch(`http://localhost:5000/depositReq`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Requested for the Deposit successfully');
                    navigate('/myAccounts');
                    refetch();
                }
            })
            .catch(error => {
                toast.error("Please Provide Valid Information")
            })

    }

    if (navigation.state === "loading") {
        return <Spinner />
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
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Request for a Deposit</h1>
                <div>
                    <label>Account Number</label>
                    <input
                        readOnly
                        defaultValue={userInfo._id}
                        type='text'
                        {...register("accNum")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    />
                    {errors.accNum && (
                        <p className="text-red-700 text-center">{errors.accNum.message}</p>
                    )}
                </div>
                <div>
                    <label>Deposit Amount</label>
                    <input
                        placeholder='ex: 10000 BDT'
                        type='number'
                        {...register("depositAmount")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    />
                    {errors.depositAmount && (
                        <p className="text-red-700 text-center">{errors.depositAmount.message}</p>
                    )}
                </div>
                <input
                    type="submit"
                    value="Request"
                    className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                />
            </form>
        </section>
    );
};

export default Deposit;