import React from "react";

const Careers = () => {
  return (
    <div className="bg-gray-100 py-4 px-4">
      <h4 className="text-3xl text-gray-600 mb-2">Careers</h4>
      <p className="text-gray-500 text-lg mb-4">
        We're always looking for talented individuals to join our team. If
        you're interested in working for us, please check out our current job
        openings below. You can also learn more about what it's like to work for
        us and our commitment to diversity, equity, and inclusion.
      </p>

      <h5 className="text-3xl text-gray-600 mb-2">Job Openings</h5>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-500 text-lg mb-2">Full Stack Developer</li>
        <li className="text-gray-500 text-lg mb-2">Data Analyst</li>
        <li className="text-gray-500 text-lg mb-2">
          Customer Service Representative
        </li>
      </ul>

      <h5 className="text-3xl text-gray-600 mt-4 mb-2">Why Work for Us?</h5>
      <ul className="list-disc list-inside mb-4">
        <li className="text-gray-500 text-lg mb-2">
          We offer competitive salaries and benefits packages.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          We value work-life balance and offer flexible scheduling.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          We encourage professional growth and development.
        </li>
        <li className="text-gray-500 text-lg mb-2">
          We're committed to creating a diverse, equitable, and inclusive
          workplace.
        </li>
      </ul>
    </div>
  );
};

export default Careers;
