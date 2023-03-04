import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo/favicon.png";

const Footer = () => {
  return (
    <footer className="p-6 dark:bg-gray-100 dark:text-gray-800 border border-t-2 border-b-0 border-x-0 border-primary mt-5">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Getting started</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-700">
            <NavLink to="/termsconditions">Terms & Conditions</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Core Concepts</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-700"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Customization</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-700"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-700">
            <NavLink
              to="https://github.com/Kaiser-Tanveer/Bravo-Bank"
              target="_blank"
            >
              GitHub
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <div>
          <img
            src={logo}
            alt="logo-img"
            className="w-20 mx-auto shadow-inner shadow-gray-700 px-2 py-1 rounded-lg hover:scale-125 duration-500"
          />
          <span className="dark:text-gray-700">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
