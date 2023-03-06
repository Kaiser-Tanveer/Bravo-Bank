import React from "react";

const CustomerReviews = () => {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <h4 className="text-3xl text-gray-600 mb-2">Customer Reviews</h4>
      <p className="text-gray-500 text-lg mb-4">
        See what our customers have to say about us:
      </p>
      <div className="flex items-center mb-4">
        <img
          src="https://i.ibb.co/RPkBnbS/pexels-andrea-piacquadio-3777943.jpg"
          alt="Customer Avatar"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-600 text-3xl mb-1">John Doe</p>
          <p className="text-gray-500 text-lg">
            "I've been a customer of this bank for several years now and I've
            always had a great experience. Their customer service is top-notch
            and I really appreciate the personalized attention I receive."
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/LNNT7QC/pexels-kampus-production-7893740.jpg"
          alt="Customer Avatar"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-600 text-3xl mb-1">Jane Smith</p>
          <p className="text-gray-500 text-lg">
            "I recently opened a checking account with this bank and the process
            was quick and easy. I also appreciate that they offer a variety of
            online banking tools to help me manage my finances."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
