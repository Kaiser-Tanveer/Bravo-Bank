import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { HiCreditCard, HiUserAdd } from 'react-icons/hi';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className='min-h-screen'>
      {
        user ?
          <header className='container mx-auto mb-10 px-6 bg-gradient-to-r from-pink-500 to-sky-500 flex justify-between items-center border-b-2 border-sky-500'>
            <div className='py-3'>
              <img src={user?.photoURL} alt="ProfilePhoto" className='w-24 h-24 rounded-full border-2 border-sky-500 mx-auto p-1' />
              <h5 className='font-bold text-xl text-gray-100'>{user?.displayName}</h5>
            </div>
            <div>
              <p className='text-gray-100'>
                {user.email}
              </p>
            </div>
          </header>
          :
          <h2 className='text-4xl font-semibold text-pink-500 text-center py-10'>Please, Login to view your profile!!</h2>
      }
      <main className='w-5/6 mx-auto md:w-full grid md:grid-cols-3 gap-6 group'>
        <Link to="/myAccounts" className='border-4 border-gray-700 rounded-lg hover:border-sky-500 group-hover:scale-90 hover:!scale-100 duration-500'>
          <HiUserAdd className='text-8xl text-gray-700 mx-auto group-hover:text-sky-500 duration-500' />
          <h2 className='text-3xl font-extrabold text-center text-gray-700 group-hover:text-sky-500 duration-500'>Your Accounts</h2>
        </Link>
        <Link to="/myCards" className='border-4 border-gray-700 rounded-lg hover:border-sky-500 group-hover:scale-90 hover:!scale-100 duration-500'>
          <HiCreditCard className='text-8xl text-gray-700 mx-auto group-hover:text-sky-500 duration-500' />
          <h2 className='text-3xl font-extrabold text-center text-gray-700 group-hover:text-sky-500 duration-500'>Your Cards</h2>
        </Link>
        <Link to="/myLoans" className='border-4 border-gray-700 rounded-lg hover:border-sky-500 group-hover:scale-90 hover:!scale-100 duration-500'>
          <FaHandHoldingUsd className='text-8xl text-gray-700 mx-auto group-hover:text-sky-500 duration-500' />
          <h2 className='text-3xl font-extrabold text-center text-gray-700 group-hover:text-sky-500 duration-500'>Loans</h2>
        </Link>
      </main>
    </section>
  )
}

export default UserProfile