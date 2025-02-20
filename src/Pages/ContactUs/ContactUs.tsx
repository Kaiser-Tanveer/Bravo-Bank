import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';


type userInput = {
  fullName: string;
  email: string;
  password: string;
  contact: string;
  message: string;
};
const ContactUs = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<userInput>();

  const form = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<userInput> = (data) => {
    if (form.current !== null) {
      emailjs.sendForm('service_g66z9h5', 'template_w4dlvjt', form.current, "WdRjephW6B8q1428b")
        .then((result: any) => {
          reset()
        }, (error: any) => {
          console.error(error.text);
        });
    }

  }

  return (
    <div className="max-w-lg mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} ref={form}>
        <div>
          <label
            htmlFor="firstName"
            className="block text-lg font-medium text-gray-700"
          >
            Your name
          </label>
          <input
            {...register("fullName", { required: "First Name is required" })}
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
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
            {...register("contact", { required: "Contact is required" })}
            type="text"
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
            {...register("message", { required: "Message is required" })}
            rows={4}
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>
        {/* Button */}
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
