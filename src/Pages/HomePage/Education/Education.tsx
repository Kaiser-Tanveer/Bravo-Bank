import React from "react";

const Education = () => {
  return (
    <section className="py-4 bg-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h2 className="text-3xl font-bold mb-8">Financial Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-pink-500 hover:from-sky-500 hover:to-pink-500 to-sky-500 p-[3px] group-hover:scale-90 rounded-lg ease-linear duration-500">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border h-full">
              <h3 className="text-lg font-semibold mb-2">Savings Tips</h3>
              <p className="text-gray-600">
                Learn how to save money and reach your financial goals with our
                expert advice and tips.
              </p>
            </div>
          </div>
          {/* investment */}
          <div className="bg-gradient-to-r from-pink-500 hover:from-sky-500 hover:to-pink-500 to-sky-500 p-[3px] group-hover:scale-90 rounded-lg ease-linear duration-500">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border h-full">
              <h3 className="text-lg font-semibold mb-2">
                Investment Strategies
              </h3>
              <p className="text-gray-600">
                Discover how to make smart investment decisions and build your
                wealth with our investment strategies.
              </p>
            </div>
          </div>
          {/* financial */}
          <div className="bg-gradient-to-r from-pink-500 hover:from-sky-500 hover:to-pink-500 to-sky-500 p-[3px] group-hover:scale-90 rounded-lg ease-linear duration-500">
            <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center border h-full">
              <h3 className="text-lg font-semibold mb-2">
                Financial Planning 101
              </h3>
              <p className="text-gray-600">
                Get a comprehensive overview of financial planning and learn how
                to create a road map for your financial future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
