import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <h4 className="text-3xl text-gray-600 mb-2">Privacy Policy</h4>
      <p className="text-gray-700 text-lg mb-4">
        We take your privacy seriously and are committed to protecting your
        personal information. This policy explains how we collect, use, and
        share your information when you use our banking services.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-500 text-lg mb-2">
          What personal information we collect: We may collect information such
          as your name, address, email address, phone number, Social Security
          number, account number, and transaction history. We may also collect
          information about your computer or mobile device, including IP
          address, location, and device type.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          How we use your personal information: We use your information to
          provide banking services, prevent fraud and money laundering, and
          comply with legal and regulatory requirements. We may also use your
          information to personalize your experience, send you marketing
          communications, and conduct research and analysis.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          How we share your personal information: We may share your information
          with our affiliates, service providers, and other third parties as
          necessary to provide banking services and comply with legal and
          regulatory requirements. We may also share your information with your
          consent or as otherwise permitted by law.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          How we protect your personal information: We use industry-standard
          security measures to protect your information from unauthorized
          access, disclosure, alteration, or destruction. We also require our
          employees and service providers to maintain the confidentiality and
          security of your information.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          Your rights and choices: You have the right to access, correct, or
          delete your personal information, and to object to or restrict our use
          of your information. You may also opt out of receiving marketing
          communications from us.
        </li>
      </ul>
    </div>
  );
};

export default Privacy;
