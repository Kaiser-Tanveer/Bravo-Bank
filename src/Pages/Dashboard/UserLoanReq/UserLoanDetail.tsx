import { useNavigation, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import Spinner from "../../Spinner/Spinner";

const UserLoanDetail = () => {
    const navigation = useNavigation();

    const { id } = useParams();
    const [detail, setDetail] = useState<any>([]);
    useEffect(() => {
        fetch(`http://localhost:5000/singleLoanDetails/${id}`)
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }, [id]);
    console.log(detail);

    if (navigation.state === "loading") {
        return <Spinner />
    }

    return (
        <div className="w-5/6 mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                    <div>
                        <h2 className="text-2xl font-bold">{detail?.user}</h2>
                        <p className="text-gray-600">{detail?.email}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600">Account Type</p>
                        <p className="text-lg font-medium">{detail?.accountType}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Loan Type</p>
                        <p className="text-lg font-medium">{detail?.loan}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600">Loan Amount</p>
                        <p className="text-lg font-medium">{detail?.lAmount} BDT</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Loan Duration</p>
                        <p className="text-lg font-medium">{detail?.lDuration} Months</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600">Account Id</p>
                        <p className="text-lg font-medium">{detail?.accNum}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">User Name</p>
                        <p className="text-lg font-medium">{detail?.name}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600">Monthly Income</p>
                        <p className="text-lg font-medium">{detail?.income}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">User NID</p>
                        <p className="text-lg font-medium">{detail?.nid}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-gray-600">Status</p>
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${detail?.status !== "pending"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                                }`}
                        >
                            {detail?.status}
                        </span>
                    </div>
                    <div>
                        <p className="text-gray-600">Company Name</p>
                        <p className="text-lg font-medium">{detail?.company}</p>
                    </div>
                </div>
                <div>
                        <p className="text-gray-600">Avidence</p>
                        <p className="text-lg font-medium">{detail?.evidence}</p>
                </div>
                <div>
                    <img src={detail?.passport} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default UserLoanDetail;