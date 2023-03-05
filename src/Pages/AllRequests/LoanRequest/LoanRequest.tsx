import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

type cardInfo = {
    user: string,
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

const LoanRequest = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const { id } = useParams()

    const { isLoading, refetch, data: usersInfo = {} } = useQuery({
        queryKey: ['/singleAccDetails', id],
        queryFn: async () => {
            const res = await fetch(`https://bravo-bank-server.vercel.app/singleAccDetails/${id}`)
            const data = await res.json()
            return data
        }
    })

    const imageHostKey = '14f1e107e329b44a04c4481b2e76451e';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<cardInfo>();

    const onSubmit: SubmitHandler<cardInfo> = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())

            .then(imgData => {
                if (imgData.status === 200) {
                    const loanData = {
                        name: usersInfo.user,
                        email: usersInfo?.email,
                        loan: data.loan,
                        passport: imgData.data.display_url,
                        income: data.income,
                        company: data.company,
                        evidence: data.evidence,
                        phone: usersInfo.phone,
                        nid: usersInfo.nid,
                        accNum: usersInfo._id,
                        accountType: usersInfo.role,
                        status: 'pending',
                        lAmount: data.lAmount,
                        lDuration: data.lDuration
                    }

                    console.log(loanData);

                    fetch("http://localhost:5000/loanReq", {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(loanData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success("Requested for the Loan Successfully!!!");
                                navigate('/myAccounts')
                            }
                        })
                }
            })
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
                <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Request Loan</h1>
                <div>
                    <label>Choose Loan type</label>
                    <select
                        {...register("loan", {
                            required: "Please select the Account Type",
                        })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="car">Car Loan</option>
                        <option value="student">Student Loan</option>
                        <option value="home">Home Loan</option>
                        <option value="personal">Personal Loan</option>
                    </select>
                    {errors?.loan && (
                        <p className="text-red-700 text-center">{errors.loan.message}</p>
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
                <div>
                    <label>Monthly Income(Minimum 50000 BDT)</label>
                    <input
                        type='number'
                        {...register("income")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: 50000 BDT'
                    />
                    {errors.income && (
                        <p className="text-red-700 text-center">{errors.income.message}</p>
                    )}
                </div>
                <div>
                    <label>Company Name</label>
                    <input
                        type='text'
                        {...register("company")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: XYZ Co. Ltd'
                    />
                    {errors.company && (
                        <p className="text-red-700 text-center">{errors.company.message}</p>
                    )}
                </div>
                <div>
                    <label>Loan Amount</label>
                    <input
                        type='number'
                        {...register("lAmount")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='ex: XYZ Co. Ltd'
                    />
                    {errors.lAmount && (
                        <p className="text-red-700 text-center">{errors.lAmount.message}</p>
                    )}
                </div>
                <div>
                    <label>Choose Loan Duration</label>
                    <select
                        {...register("lDuration", {
                            required: "Please select the Account Type",
                        })}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                    >
                        <option value="12">12 Months</option>
                        <option value="18">18 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                    {errors?.lDuration && (
                        <p className="text-red-700 text-center">{errors.lDuration.message}</p>
                    )}
                </div>
                <div>
                    <label>Passport Image</label>
                    <input
                        type="file"
                        {...register("img")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='Your passport pdf link'
                    />
                    {errors.img && (
                        <p className="text-red-700 text-center">{errors.img.message}</p>
                    )}
                </div>
                <div>
                    <label>Valid Evidence of Company & Residential</label>
                    <textarea
                        {...register("evidence")}
                        className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        placeholder='Attach Your Pdf links here..'
                    />
                    {errors.evidence && (
                        <p className="text-red-700 text-center">{errors.evidence.message}</p>
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

export default LoanRequest;