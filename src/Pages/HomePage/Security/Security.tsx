import React from "react";

const Security = () => {
  return (
    <section className="py-4 bg-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h2 className="text-3xl font-bold mb-8">Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border  border-sky-500">
            <h3 className="text-lg font-semibold mb-2">
              Fraud Detection and Prevention
            </h3>
            <p className="text-gray-600">
              We use the latest technology to detect and prevent fraud in your
              account, giving you peace of mind and security.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border  border-sky-500">
            <h3 className="text-lg font-semibold mb-2">Data Encryption</h3>
            <p className="text-gray-600">
              All your sensitive data is encrypted with industry-standard
              protocols to ensure your privacy and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
