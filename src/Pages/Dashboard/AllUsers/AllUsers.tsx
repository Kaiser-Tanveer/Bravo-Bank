import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import Spinner from '../../Spinner/Spinner';
import { useNavigation } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';

const AllUsers = () => {
    const navigation = useNavigation();

    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ['/allUsers'],
        queryFn: async () => {
            const res = await fetch('https://bravo-bank-server.vercel.app/allUsers')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id: string) => {
        fetch(`https://bravo-bank-server.vercel.app/allUsers/${id}`, {
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

    if (navigation.state === "loading") {
        return <Spinner />
    }

    return (
        <div>
            <div className='my-16 lg:my-0'>.
                <h1 className='text-center text-3xl font-bold underline text-gray-700'>All User of Your Bank is Here</h1>
                <div className="overflow-x-auto mt-8">
                    <Table className="min-w-full text-xs">
                        <Thead>
                            <Tr className="text-left">
                                <Th className="p-3">User Photo</Th>
                                <Th className="p-3">User Name</Th>
                                <Th className="p-3">User E-mail</Th>
                                <Th className="p-3">Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                users?.map((user: { email: string, image: string, fullName: string, _id: string }, i: number) => <Tr className="border-b border-opacity-20">
                                    <Td className="p-3"><img src={user?.image} alt="me"
                                        className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                    /></Td>
                                    <Td className="p-3">{user?.fullName}</Td>
                                    <Td className="p-3">{user?.email}</Td>
                                    <Td><button onClick={() => handleDelete(user?._id)} className="hover:border-[2px] border-gray-700 hover:bg-pink-500 hover:text-gray-700 text-pink-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700"><FaTrashAlt /></button></Td>
                                </Tr>)
                            }
                        </Tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AllUsers