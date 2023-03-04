import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { NavLink, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const Accounts = () => {
    const navigation = useNavigation();

    const { isLoading, refetch, data: usersInfo = [] } = useQuery({
        queryKey: ['/userAccounts'],
        queryFn: async () => {
            const res = await fetch('https://bravo-bank-server.vercel.app/userAccounts')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id: string) => {
        fetch(`https://bravo-bank-server.vercel.app/requestedUsersDelete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('User Delete Successfully')
                    refetch()
                }
            })
    }

    const handStatus = (id: string) => {
        fetch(`https://bravo-bank-server.vercel.app/userStatusUpdate/${id}`, {
            method: 'PUT',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Status updated successfully')
                    refetch()
                }
            })
    }

    if (navigation.state === "loading") {
        return <Spinner />
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
                                <th className="p-3">User Photo</th>
                                <th className="p-3">User Name</th>
                                <th className="p-3">User E-mail</th>
                                <th className="p-3">Account Type</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Details</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                usersInfo?.map((user: { email: string, img: string, user: string, role: string, phone: string, _id: string, status: string }, i: number) => <tr className="border-b border-opacity-20">
                                    <td className="p-3">{i + 1}</td>
                                    <td className="p-3"><img src={user?.img} alt="me"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                    /></td>
                                    <td className="p-3">{user?.user}</td>
                                    <td className="p-3">{user?.email}</td>
                                    <td className="p-3">{user?.role}</td>
                                    <td className="p-3">
                                        {
                                            user?.status === 'pending' ?
                                                <button onClick={() => handStatus(user?._id)} className=" text-pink-500 font-bold border-[2px] border-pink-500 py-1 px-2 rounded-md hover:scale-110">{user?.status}..</button>
                                                :
                                                <button className="text-sky-500 font-bold p-3">{user?.status}</button>
                                        }
                                    </td>
                                    <td className="p-3">
                                        <NavLink to={`/dashboard/singleAccDetails/${user?._id}`}>
                                            <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                <FaInfoCircle />
                                            </button>
                                        </NavLink>
                                    </td>
                                    <td><button onClick={() => handleDelete(user?._id)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Accounts;