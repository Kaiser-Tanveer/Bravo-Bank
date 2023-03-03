import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-hot-toast'
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const UserCardRequest = () => {

  const { isLoading, refetch, data: usersInfo = [] } = useQuery({
    queryKey: ['/dashCardReq'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/dashCardReq`)
      const data = await res.json()
      return data
    }
  })

  const handStatus = (id: string, accNum: string, card: string) => {
    if (card === 'debit') {
      const userData = {
        id: id,
        accNum: accNum,
        card: card
      }
      fetch("http://localhost:5000/dashCardDebit", {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success("Card Request Decline")
            refetch()
          }
        })
    }
    else {
      const userData = {
        id: id,
        accNum: accNum,
        card: card
      }
      fetch("http://localhost:5000/dashCardCredit", {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success("Card Request Decline")
            refetch()
          }
        })
    }
  }

  const handleDelete = (id: string, accNum: string) => {
    const userData = {
      id: id,
      accNum: accNum
    }
    fetch("http://localhost:5000/dashCardDelete", {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success("Card Request Decline")
          refetch()
        }
      })
  }

  return (
    <div>
      <div className='my-16 lg:my-0'>.
        <h1 className='text-center text-3xl font-bold underline text-gray-700'>All User Account In Your Bank Is Here</h1>
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full text-xs">
            <thead>
              <tr className="text-left">
                <th className="p-3"></th>
                <th className="p-3">Account Type</th>
                <th className="p-3">User Name</th>
                <th className="p-3">User E-mail</th>
                <th className="p-3">Card Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Details</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                usersInfo?.map((user: { email: string, accNum: string, accountType: string, name: string, phone: string, _id: string, card: string, nid: string, status: string }, i: number) => <tr className="border-b border-opacity-20">
                  <td className="p-3">{i + 1}</td>
                  <td className="p-3">{user?.accountType}</td>
                  <td className="p-3">{user?.name}</td>
                  <td className="p-3">{user?.email}</td>
                  <td className="p-3">{user?.card}</td>
                  <td className="p-3">
                    {
                      user?.status === 'pending' ?
                        <button onClick={() => handStatus(user?._id, user?.accNum, user?.card)} className="btn bg-orange-500 text-white p-2">{user?.status}</button>
                        :
                        <button className="p-3 text-sky-500 font-bold">{user?.status}</button>
                    }
                  </td>
                  <td className="p-3">
                    <NavLink to={`/dashboard/singleAccDetails/${user?.accNum}`}>
                      <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                        <FaInfoCircle />
                      </button>
                    </NavLink>
                  </td>
                  <td><button onClick={() => handleDelete(user?._id, user?.accNum)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserCardRequest;