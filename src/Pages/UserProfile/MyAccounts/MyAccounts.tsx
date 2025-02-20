import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { AuthContext } from "../../../context/AuthProvider";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";

const MyAccounts = () => {
    const { user } = useContext(AuthContext);

    // Loading Accounts data from usersAcc collection
    const {
        isLoading,
        refetch,
        data: accounts = [],
    } = useQuery({
        queryKey: ["/userAccount", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `https://bravo-bank-server.vercel.app/userAccount?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });


    return (
        <section className="py-10 lg:py-0">
            {accounts.length >= 1 ? (
                <div>
                    <h1 className="text-4xl text-center font-bold text-transparent bg-gradient-to-r bg-clip-text from-pink-500 bg-gray-100 to-sky-500 py-10">
                        My Accounts
                    </h1>
                    <main className="">
                        {accounts?.map((account: any) => (
                            <div
                                key={account._id}
                                className="border border-primary shadow-lg shadow-gray-700 bg-gray-100 rounded-md mb-10 text-center pb-10"
                            >
                                <h2 className="text-3xl font-bold text-center py-6 uppercase">
                                    {account.role} Account
                                </h2>
                                <Table className="bg-gray-50">
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Amount</Th>
                                            {account.depositReq && <Th>Deposit Status</Th>}

                                            <Th>Account Status</Th>
                                            {account.status === "success" && <Th>Card Status</Th>}
                                            {account.status === "success" && <Th>Loan Status</Th>}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>{account.user}</Td>
                                            <Td>{account.amount} BDT</Td>
                                            {account.depositReq && <Td>{account.depositReq}</Td>}

                                            <Td>
                                                {account.status === "pending" ? (
                                                    <p className="text-pink-500 font-bold">
                                                        {account.status}..
                                                    </p>
                                                ) : (
                                                    <NavLink to={`/singleDetails/${account._id}`}>
                                                        <button className="hover:border-[2px] border-gray-700 hover:bg-sky-500 hover:text-gray-700 text-sky-500 py-1 px-2 font-bold rounded-md text-xl hover:scale-110 duration-700">
                                                            <FaInfoCircle />
                                                        </button>
                                                    </NavLink>
                                                )}
                                            </Td>
                                            {account.status === "success" && (
                                                <Td>
                                                    {
                                                        account?.cards === "pending" ?
                                                            <h3 className="text-pink-500 font-bold">Pending...</h3>
                                                            :
                                                            <>
                                                                {
                                                                    account?.cardStatus === 'success' ?
                                                                        <h3 className="text-sky-500 font-bold">Success</h3>
                                                                        :
                                                                        <NavLink to={`/cardsReq/${account?._id}`}>
                                                                            <button className="text-sky-500 border-2 border-sky-500 font-extrabold hover:bg-sky-500 hover:text-gray-100 hover:scale-110 rounded-md px-1 duration-500">
                                                                                Request
                                                                            </button>
                                                                        </NavLink>
                                                                }
                                                            </>
                                                    }
                                                </Td>
                                            )}
                                            {account.status === "success" && (
                                                <Td>
                                                    {
                                                        account?.loanStatus === "pending" ?
                                                            <h3 className="text-pink-500 font-bold">Pending...</h3>
                                                            :
                                                            <>
                                                                {
                                                                    account?.loanStatus === 'success' ?
                                                                        <h3 className="text-sky-500 font-bold">Success</h3>
                                                                        :
                                                                        <NavLink to={`/loanReq/${account?._id}`}>
                                                                            <button className="text-sky-500 border-2 border-sky-500 font-extrabold hover:bg-sky-500 hover:text-gray-100 hover:scale-110 rounded-md px-1 duration-500">
                                                                                Request
                                                                            </button>
                                                                        </NavLink>
                                                                }
                                                            </>
                                                    }
                                                </Td>
                                            )}
                                        </Tr>
                                    </Tbody>
                                </Table>
                                <div className="grid md:grid-cols-2 gap-6 mt-6 mx-10">
                                    <NavLink to={`/deposit/${account._id}`}>
                                        <button className="text-3xl w-full p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-700 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-500 to-sky-500 hover:from-primary hover:to-sky-500 duration-500"><FaPlusCircle className="mr-2" /><span>Deposit</span></button>
                                    </NavLink>
                                    <NavLink to={`/moneyTrans/${account._id}`}>
                                        <button className="text-3xl w-full p-3 flex items-center justify-center mx-auto rounded-lg shadow-lg shadow-gray-700 font-bold text-center text-gray-700 border-2 border-gray-500 hover:text-gray-200 bg-gradient-to-r from-pink-500 to-sky-500 hover:from-primary hover:to-sky-500 duration-500"><HiCurrencyDollar className="mr-2" /><span>Transfer</span></button>
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            )
                :
                (
                    <h1 className="text-4xl text-center font-semibold text-pink-500 py-10">
                        Sorry!! You have no account. Please
                        <Link to="/openAcc" className="text-sky-500 hover:underline ml-1">
                            create one
                        </Link>
                    </h1>
                )}
        </section>
    );
};

export default MyAccounts;