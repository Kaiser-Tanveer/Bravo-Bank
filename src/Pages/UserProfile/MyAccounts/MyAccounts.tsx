import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { AuthContext } from "../../../context/AuthProvider";

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
                `http://localhost:5000/userAccount?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    console.log(accounts);


    return (
        <section className="py-10 lg:py-0">
            {accounts.length >= 0 ? (
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
                                            <Th>Email</Th>
                                            <Th>Phone</Th>

                                            <Th>Account Status</Th>
                                            {account.status === "success" && <Th>Card Status</Th>}
                                            {account.status === "success" && <Th>Loan Status</Th>}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>{account.user}</Td>
                                            <Td>{account.email}</Td>
                                            <Td>{account.phone}</Td>

                                            <Td>
                                                {account.status === "pending" ? (
                                                    <p className="text-pink-500 font-bold">
                                                        {account.status}..
                                                    </p>
                                                ) : (
                                                    <NavLink to={`/singleDetails/${account._id}`}>
                                                        <button className="text-sky-500 border-2 border-sky-500 bg-pink-500 hover:scale-110 rounded-md px-1 duration-500">
                                                            Details
                                                        </button>
                                                    </NavLink>
                                                )}
                                            </Td>
                                            {account.status === "success" && (
                                                <Td>
                                                    {
                                                        account?.cards === "pending" ?
                                                            <h3>Pending</h3>
                                                            :
                                                            <>
                                                                {
                                                                    account?.cardStatus === 'success' ?
                                                                        <h3>Success</h3>
                                                                        :
                                                                        <NavLink to={`/cardsReq/${account?._id}`}>
                                                                            <button className="text-gray-700 border-2 border-gray-700 font-extrabold bg-sky-500 hover:scale-110 rounded-md px-1 duration-500">
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
                                                    <NavLink to={`/loanReq/${account?._id}`}>
                                                        <button className="text-gray-700 border-2 border-gray-700 font-extrabold bg-sky-500 hover:scale-110 rounded-md px-1 duration-500">
                                                            Request
                                                        </button>
                                                    </NavLink>
                                                </Td>
                                            )}
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </div>
                        ))}
                    </main>
                </div>
            )
                :
                (
                    <h1 className="text-4xl text-center font-semibold py-10">
                        Sorry!! You have no accounts. Please
                        <Link to="/openAcc" className="hover:text-sky-500 hover:underline">
                            create one
                        </Link>
                    </h1>
                )}
        </section>
    );
};

export default MyAccounts;