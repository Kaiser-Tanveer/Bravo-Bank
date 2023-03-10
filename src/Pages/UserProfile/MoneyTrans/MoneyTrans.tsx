import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, useNavigation, useParams } from 'react-router-dom'
import Spinner from '../../Spinner/Spinner';


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
  const navigate = useNavigate();
  const navigation = useNavigation();

  const { id } = useParams();

  const { isLoading: any, refetch, data: usersInfo = {} } = useQuery({
    queryKey: ['/singleAccDetails', id],
    queryFn: async () => {
      const res = await fetch(`https://bravo-bank-server.vercel.app/singleAccDetails/${id}`)
      const data = await res.json()
      return data;
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
      userAmount: usersInfo.amount,
    }
    if (userData.sendAmount < usersInfo.amount) {
      fetch(`https://bravo-bank-server.vercel.app/userMoneyTrans`, {
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
            navigate('/myAccounts')
            refetch()
          }
        })
        .catch(error => {
          toast.error("Please Provide Valid Information")
        })
    }
    else {
      toast.error('You Do not have enough money in your account please deposit then transfer');
    }
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
        <h1 className='text-4xl text-center font-extrabold text-gray-50 pb-6 underline'>Receiver Money Transfer Information</h1>
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
       
        <div>
          <label>Account Number</label>
          <input
            placeholder="65h18d2cg"
            type='text'
            {...register("accNum")}
            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
          
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