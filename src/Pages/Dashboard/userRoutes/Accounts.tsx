import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Accounts = () => {

    const { isLoading, refetch, data: usersInfo = [] } = useQuery({
        queryKey: ['/requestedUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/requestedUsers')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (id: string) =>{
            fetch(`http://localhost:5000/requestedUsersDelete/${id}`, {
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

    return (
        <div>
            <div className='my-16'>.
                <h1 className='text-center text-3xl font-bold underline text-primary'>All User Account In Your Bank Is Here</h1>
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
                                    <td className="p-3"><button className="btn bg-orange-500 text-white">{user?.status}</button></td>
                                    <td><button onClick={() => handleDelete(user?._id)} className="btn bg-orange-500 p-3 text-white">Delete</button></td>
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