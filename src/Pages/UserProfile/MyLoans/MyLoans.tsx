import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { NavLink } from 'react-router-dom';

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
                `https://bravo-bank-server.vercel.app/userLoans?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(loans);

    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 bg-gray-100 to-sky-500 pt-10 pb-5'>My Loan</h1>
            <main className='bg-sky-200 mx-10 pt-4 pb-16 rounded-lg shadow-lg relative'>
                {
                    // eslint-disable-next-line array-callback-return
                    loans?.map((loan: { status: string, accNum: string, lAmount: string, lDuration: string, loan: string, _id: string }, i: number) =>
                        <div
                            key={loan.accNum}
                        >
                            {
                                loan.status === 'success' &&
                                <>
                                    <Table className="text-center">
                                        <Thead>
                                            <Tr>
                                                <Th>Loan Type</Th>
                                                <Th>Loan Duration</Th>
                                                <Th>Loan Amount</Th>
                                                <Th>Loan Interest</Th>
                                                <Th>Loan Status</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>{loan.loan}</Td>
                                                <Td>{loan.lDuration} Months</Td>
                                                <Td>{loan.lAmount} BDT</Td>
                                                <Td>0.03 percent</Td>
                                                <Td>{loan.status}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                    <NavLink to={`/debtRepay/${loan?._id}`}>
                                        <button className="text-sky-500 py-2 w-full border-2 border-sky-500 font-extrabold hover:bg-sky-500 hover:text-gray-100 absolute bottom-0 rounded-b-lg px-1 duration-500">
                                            Debt Repayment
                                        </button>
                                    </NavLink>
                                </>
                            }
                        </div>
                    )
                }
            </main>
        </div>
    );
};

export default MyLoans;