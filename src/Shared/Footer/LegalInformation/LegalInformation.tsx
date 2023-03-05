import React from "react";

const LegalInformation = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h3 className="text-3xl font-bold mb-4">Legal Information</h3>
      <p className="text-lg mb-2">
        By accessing and using our banking services, you agree to comply with
        the following terms and conditions:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg mb-2">
          All transactions made through our banking system are subject to
          applicable laws and regulations, including anti-money laundering and
          anti-fraud laws.
        </li>
        <li className="text-lg mb-2">
          Your use of our banking system is at your own risk. We are not
          responsible for any losses or damages resulting from the use of our
          services, including but not limited to errors, delays, or
          interruptions in service.
        </li>
        <li className="text-lg mb-2">
          All information provided to us through our banking system is subject
          to our Privacy Policy. By using our services, you acknowledge and
          agree to the terms of our Privacy Policy.
        </li>
        <li className="text-lg mb-2">
          We reserve the right to modify, suspend, or discontinue our banking
          services at any time, with or without notice.
        </li>
        <li className="text-lg mb-2">
          Our banking system may include links to third-party websites or
          resources. We are not responsible for the content, accuracy, or
          reliability of any third-party websites or resources.
        </li>
        <li className="text-lg mb-2">
          These terms and conditions, together with our Privacy Policy,
          represent the entire agreement between you and our bank with respect
          to your use of our banking system.
        </li>
      </ul>
      <p className="text-lg">
        If you have any questions or concerns about these terms and conditions,
        please contact our customer support team for assistance.
      </p>
    </div>
  );
};

export default LegalInformation;
