import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { NavLink, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

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
                <h1 className='text-center text-3xl font-bold underline text-gray-700'>All User Accounts of Your Bank is Here</h1>
                <div className="overflow-x-auto mt-8">
                    <Table className="min-w-full text-xs">
                        <Thead>
                            <Tr className="text-left">
                                <Th className="p-3">User Photo</Th>
                                <Th className="p-3">User Name</Th>
                                <Th className="p-3">User E-mail</Th>
                                <Th className="p-3">Account Type</Th>
                                <Th className="p-3">Status</Th>
                                <Th className="p-3">Details</Th>
                                <Th className="p-3">Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                usersInfo?.map((user: { email: string, img: string, user: string, role: string, phone: string, _id: string, status: string }, i: number) => <Tr className="border-b border-opacity-20">
                                    <Td className="p-3"><img src={user?.img} alt="me"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                    /></Td>
                                    <Td className="p-3">{user?.user}</Td>
                                    <Td className="p-3">{user?.email}</Td>
                                    <Td className="p-3">{user?.role}</Td>
                                    <Td className="p-3">
                                        {
                                            user?.status === 'pending' ?
                                                <button onClick={() => handStatus(user?._id)} className=" text-pink-500 font-bold border-[2px] border-pink-500 py-1 px-2 rounded-md hover:scale-110">{user?.status}..</button>
                                                :
                                                <button className="text-sky-500 font-bold p-3">{user?.status}</button>
                                        }
                                    </Td>
                                    <Td className="p-3">
                                        <NavLink to={`/dashboard/singleAccDetails/${user?._id}`}>
                                            <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                <FaInfoCircle />
                                            </button>
                                        </NavLink>
                                    </Td>
                                    <Td><button onClick={() => handleDelete(user?._id)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Accounts;