import React, { useState, useEffect } from 'react'
import { useNavigation, useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const SingleAccDetails = () => {
  const navigation = useNavigation();

  const { id } = useParams();
  const [detail, setDetail] = useState<any>([]);
  useEffect(() => {
    fetch(`https://bravo-bank-server.vercel.app/singleAccDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  if (navigation.state === "loading") {
    return <Spinner />
  }

  return (
    <div className="w-5/6 mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full"
            src={detail?.img}
            alt={`${detail?.user} profile picture`}
          />
          <div>
            <h2 className="text-2xl font-bold">{detail?.user}</h2>
            <p className="text-gray-600">{detail?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Account Number</p>
            <p className="text-lg font-medium">{detail?._id}</p>
          </div>
          <div>
            <p className="text-gray-600">National ID Card Number</p>
            <p className="text-lg font-medium">{detail?.nid}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Nominee Name</p>
            <p className="text-lg font-medium">{detail?.nomineeName}</p>
          </div>
          <div>
            <p className="text-gray-600">Nominee ID Number</p>
            <p className="text-lg font-medium">{detail?.nomineeId}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Relation with Nominee</p>
            <p className="text-lg font-medium">{detail?.nomineeRelation}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-lg font-medium">{detail?.phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Permanent Area</p>
            <p className="text-lg font-medium">{detail?.permanentArea}</p>
          </div>
          <div>
            <p className="text-gray-600">Residential Area</p>
            <p className="text-lg font-medium">{detail?.residentialArea}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Gender</p>
            <p className="text-lg font-medium">{detail?.gender}</p>
          </div>
          <div>
            <p className="text-gray-600">Birthdate</p>
            <p className="text-lg font-medium">{detail?.birthDate}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Account Type</p>
            <p className="text-lg font-medium">{detail?.role}</p>
          </div>
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
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600">Initial Amount</p>
            <p className="text-lg font-medium">{detail?.amount}</p>
          </div>
          <div>
            <p className="text-gray-600">Role</p>
            <p className="text-lg font-medium">{detail?.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAccDetails;