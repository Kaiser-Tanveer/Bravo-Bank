import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-lg mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-lg font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-lg font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Contact NUmber
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="bg-primary text-white mx-auto py-2 px-6 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
