import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleaccountDetails = () => {
  //   type formInput = {
  //     role: string;
  //     user: string;
  //     status: string;
  //     _id: string;
  //     email: string;
  //     phone: number;
  //     img: string;
  //     residentialArea: string;
  //     permanentArea: string;
  //     nid: number;
  //     nomineeName: string;
  //     nomineeId: number;
  //     nomineeRelation: string;
  //     gender: string;
  //     birthDate: string;
  //     amount: number;
  //   };
  const { accountid } = useParams();
  const [accounts, setAccounts] = useState<any>([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myAccounts/${accountid}`)
      .then((res) => res.json())
      .then((data) => setAccounts(data));
  }, [accountid]);

  return (
    <div className="w-5/6 mx-auto px-4 py-8">
      {accounts.map((account: any) => (
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src={account.img}
              alt={`${account.user} profile picture`}
            />
            <div>
              <h2 className="text-2xl font-bold">{account.user}</h2>
              <p className="text-gray-600">{account.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Account Number</p>
              <p className="text-lg font-medium">{account._id}</p>
            </div>
            <div>
              <p className="text-gray-600">National ID Card Number</p>
              <p className="text-lg font-medium">{account.nid}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Nominee Name</p>
              <p className="text-lg font-medium">{account.nomineeName}</p>
            </div>
            <div>
              <p className="text-gray-600">Nominee ID Number</p>
              <p className="text-lg font-medium">{account.nomineeId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Relation with Nominee</p>
              <p className="text-lg font-medium">{account.nomineeRelation}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone Number</p>
              <p className="text-lg font-medium">{account.phone}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Permanent Area</p>
              <p className="text-lg font-medium">{account.permanentArea}</p>
            </div>
            <div>
              <p className="text-gray-600">Residential Area</p>
              <p className="text-lg font-medium">{account.residentialArea}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Gender</p>
              <p className="text-lg font-medium">{account.gender}</p>
            </div>
            <div>
              <p className="text-gray-600">Birthdate</p>
              <p className="text-lg font-medium">{account.birthDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Account Type</p>
              <p className="text-lg font-medium">{account.role}</p>
            </div>
            <div>
              <p className="text-gray-600">Status</p>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${account.status !== "pending"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {account.status}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Initial Amount</p>
              <p className="text-lg font-medium">{account.amount}</p>
            </div>
            <div>
              <p className="text-gray-600">Role</p>
              <p className="text-lg font-medium">{account.role}</p>
            </div>
            <div>
              <p className="text-gray-600">Cards</p>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${account.status === "pending"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                {account.cards}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleaccountDetails;