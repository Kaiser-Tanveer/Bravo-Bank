import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

const UserDepoReq = () => {

    const {
        isLoading,
        refetch,
        data: usersInfo = [],
    } = useQuery({
        queryKey: ["/userLoanReq"],
        queryFn: async () => {
            const res = await fetch(
                `https://bravo-bank-server.vercel.app/dashDepoShow`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(usersInfo);

    const handleDelete = (id: string, accNum: string) => {

        const userData = {
            id,
            accNum
        }

        fetch(`https://bravo-bank-server.vercel.app/userDepositDelete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Loan Delete Successfully')
                    refetch()
                }
            })
    }

    const handStatus = (id: string, accNum: string, depositAmount: string) => {
        const userData = {
            id,
            accNum,
            depositAmount
        }
        fetch(`https://bravo-bank-server.vercel.app/userDepositUpdate`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Deposit updated successfully')
                    refetch()
                }
            })
    }

    return (
        <div>
            <div className='my-16 lg:my-0'>.
                <h1 className='text-center text-3xl font-bold underline text-gray-700'>All User Loan In Your Bank Is Here</h1>
                <div className="overflow-x-auto mt-8">
                    <Table className="min-w-full text-xs">
                        <Thead>
                            <Tr className="text-left">
                                <Th className="p-3">User Email</Th>
                                <Th className="p-3">Account Number</Th>
                                <Th className="p-3">Deposit Amount</Th>
                                {/* <Th className="p-3">Status</Th> */}
                                <Th className="p-3">Details</Th>
                                <Th className="p-3">Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                usersInfo?.map((user: { email: string, accNum: string, depStatus: string, depositAmount: string, UserAmount: string, _id: string }, i: number) =>
                                    <Tr className="border-b border-opacity-20">
                                        <Td className="p-3">{user?.email}</Td>
                                        <Td className="p-3">{user?.accNum}</Td>
                                        <Td className="p-3">{user?.depositAmount}</Td>
                                        <Td className="p-3">
                                            {
                                                user?.depStatus === 'pending' ?
                                                    <button onClick={() => handStatus(user?._id, user?.accNum, user?.depositAmount)} className="text-pink-500 font-bold border-[2px] border-pink-500 py-1 px-2 rounded-md hover:scale-110">{user?.depStatus}</button>
                                                    :
                                                    <button className="p-3 text-sky-500 font-bold">{user?.depStatus}</button>
                                            }
                                        </Td>
                                        <Td className="p-3">
                                            <NavLink to={`/singleDetails/${user?.accNum}`}>
                                                <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                    <FaInfoCircle />
                                                </button>
                                            </NavLink>
                                        </Td>
                                        {
                                            user?.depStatus === 'pending' &&
                                            <Td><button onClick={() => handleDelete(user?._id, user?.accNum)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></Td>
                                        }
                                    </Tr>)
                            }
                        </Tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default UserDepoReq