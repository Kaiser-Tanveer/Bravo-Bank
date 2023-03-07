import React from "react";

const SecurityInformation = () => {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <h4 className="text-gray-600 text-3xl mb-2">Security Information</h4>
      <p className="text-gray-700 text-lg mb-4">
        At Bravo Bank, we take the security of your personal and financial
        information very seriously. Here are some of the measures we take to
        protect your data:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          We use the latest encryption technologies to secure all communications
          between you and our servers.
        </li>
        <li>
          Your account passwords and other sensitive information are stored in
          an encrypted format.
        </li>
        <li>
          We monitor all account activity for signs of suspicious behavior and
          take action immediately to prevent fraud.
        </li>
        <li>
          Our servers are protected by state-of-the-art firewalls and other
          security measures to prevent unauthorized access.
        </li>
        <li>
          All employees are required to undergo regular security training and
          adhere to strict policies and procedures to ensure the protection of
          your data.
        </li>
      </ul>
      <p className="text-gray-700 text-lg">
        If you have any concerns about the security of your account or need
        assistance with any security-related issues, please don't hesitate to
        contact our customer support team.
      </p>
    </div>
  );
};

export default SecurityInformation;
