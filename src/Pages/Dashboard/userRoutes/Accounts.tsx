import React from 'react';

const Accounts = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center text-3xl font-bold underline text-primary'>All User Account In Your Bank Is Here</h1>
            <div className="overflow-x-auto">
                <table className="table w-4/5 mx-auto my-16">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Photo</th>
                            <th>User Name</th>
                            <th>User E-mail</th>
                            <th>Account Type</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>

                                {
                                    user.role === 'admin' ?
                                        <td><button onClick={() => handleAdmin(user._id)} className="btn btn-accent text-white hover:bg-primary border-0" disabled>Make Admin</button></td>
                                        :
                                        <td><button onClick={() => handleAdmin(user._id)} className="btn btn-accent text-white hover:bg-primary border-0">Make Admin</button></td>
                                }

                                <td><button onClick={() => handleDelete(user._id)} className="btn btn-error hover:bg-orange-500 text-white">Delete</button></td>
                            </tr>)
                        } */}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Accounts;