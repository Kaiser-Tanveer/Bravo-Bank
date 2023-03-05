import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom'


type cardInfo = {
  user: string,
  transfer: string,
  phone: string,
  nid: string,
  accNum: string,
  sendAmount: number,
  img: string,
  company: string,
  evidence: string,
  lAmount: number,
  lDuration: string,
  amount: string
}
const MoneyTrans = () => {

  const { id } = useParams();

  const { isLoading, refetch, data: usersInfo = {} } = useQuery({
    queryKey: ['/singleAccDetails', id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/singleAccDetails/${id}`)
      const data = await res.json()
      return data
    }
  })

  const { register, handleSubmit, formState: { errors }, } = useForm<cardInfo>();

  const onSubmit = (data: any) => {
    const userData = {
      id,
      transfer: data.transfer,
      user: data.user,
      sendAmount: data.sendAmount,
      accNum: data.accNum,
      userAmount: usersInfo.amount

  }
  if(userData.sendAmount < usersInfo.amount){
    fetch(`http://localhost:5000/userMoneyTrans`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
  })
      .then(res => res.json())
      .then(data => {
          if (data.acknowledged) {
              toast.success('Money Transfer successfully')
              // refetch()
          }
      })
      .catch(error =>{
        toast.error("Please Provide Valid Information")
      })
  }
  else{
    toast.error('You Dont have enough money in your account please deposite then transfer');
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
        <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Reciver Money Transfer Information</h1>
        <div>
          <label>Choose Account type</label>
          <select
            {...register("transfer", {
              required: "Please select the Account Type",
            })}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
          >
            <option value="Student">Student Account</option>
            <option value="Savings">Savings Account</option>
            <option value="Current">Current Account</option>
            <option value="Fixed-Deposit">Fixed Deposit Acount</option>
          </select>
          {errors?.transfer && (
            <p className="text-red-700 text-center">{errors.transfer.message}</p>
          )}
        </div>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              {...register("user")}
              className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
              placeholder="ex: Kaiser Tanveer"
            // value={usersInfo?.user}
            />
            {errors.user && (
              <p className="text-red-700 text-center">
                {errors.user.message}
              </p>
            )}
          </div>
        </div>
        {/* <div>
          <label>Phone</label>
          <input
            type="text"
            {...register("phone")}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
            // value={usersInfo?.phone}
          />
          {errors.phone && (
            <p className="text-red-700 text-center">{errors.phone.message}</p>
          )}
        </div> */}
        {/* <div>
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
        </div> */}
        <div>
          <label>Account Number</label>
          <input
            placeholder="65h18d2cg"
            type='text'
            {...register("accNum")}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
          // value={usersInfo?._id}
          />
          {errors.accNum && (
            <p className="text-red-700 text-center">{errors.accNum.message}</p>
          )}
        </div>
        <div>
          <label>Send Amount</label>
          <input
            type='number'
            {...register("sendAmount")}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
            placeholder='ex: 50000 BDT'
          />
          {errors.sendAmount && (
            <p className="text-red-700 text-center">{errors.sendAmount.message}</p>
          )}
        </div>
        {/* <div>
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
        </div> */}
        {/* <div>
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
        </div> */}
        {/* <div>
          <label>Choose Loan Duration</label>
          <select
            {...register("lDuration", {
              required: "Please select the Account Type",
            })}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
          >
            <option value="12">12 Months (interest 3%)</option>
            <option value="18">18 Months (interest 5%)</option>
            <option value="24">24 Months(interest 7%)</option>
          </select>
          {errors?.lDuration && (
            <p className="text-red-700 text-center">{errors.lDuration.message}</p>
          )}
        </div> */}
        {/* <div>
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
        </div> */}
        {/* <div>
          <label>Valid Evidence of Company & Residential</label>
          <textarea
            {...register("evidence")}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
            placeholder='Attach Your Pdf links here..'
          />
          {errors.evidence && (
            <p className="text-red-700 text-center">{errors.evidence.message}</p>
          )}
        </div> */}
        <input
          type="submit"
          value="Request"
          className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
        />
      </form>
    </section>

  )
}

export default MoneyTrans