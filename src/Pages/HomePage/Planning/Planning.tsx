import React from "react";

const Planning = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h2 className="text-3xl font-bold mb-8">Financial Planning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Retirement Planning</h3>
            <p className="text-gray-600">
              Our financial experts can help you plan for a comfortable
              retirement with strategies tailored to your unique financial
              situation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Investment Planning</h3>
            <p className="text-gray-600">
              We can help you create an investment plan that meets your
              financial goals, whether you're saving for a down payment on a
              house or planning for a child's education.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Tax Planning</h3>
            <p className="text-gray-600">
              Our tax experts can help you optimize your tax strategy, minimize
              your tax liability, and maximize your deductions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
