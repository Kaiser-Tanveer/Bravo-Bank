import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyLoans = () => {

    const { user } = useContext(AuthContext)

    const {
        isLoading,
        refetch,
        data: loans = [],
    } = useQuery({
        queryKey: ["/userLoans", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/userLoans?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(loans);

    return (
        <div>
            <h1 className='text-4xl text-center py-10'>Your Loan goes here...</h1>
            {
                // eslint-disable-next-line array-callback-return
                loans?.map((loan: { status: string, accNum: string }, i: number) =>
                    <div>
                        {
                            loan.status === 'success' &&
                            <div>
                                <h1>{loan?.accNum}</h1>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default MyLoans;