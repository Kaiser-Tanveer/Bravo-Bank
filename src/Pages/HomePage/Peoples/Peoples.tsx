import React from "react";
import {
    FaEnvelopeOpenText,
    FaFacebookF,
    FaGithubAlt,
    FaLinkedinIn,
} from "react-icons/fa";

const Peoples = () => {
    const employees = [
        {
            id: 1,
            name: "Galib Hossain",
            img: "https://i.ibb.co/3CLgbVc/1670427282163.png",
            title: "Content Creator || Front End Developer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: ""
        },
        {
            id: 2,
            name: "Nazmul Bhuiya",
            img: "https://i.ibb.co/RSDfJdL/p.jpg",
            title: "Full Stack Developer",
            facebook: "https://www.facebook.com/nazmul.nobel.3",
            linkedin: "https://www.linkedin.com/in/nazmul-bhuyian-mern-stack-developer/",
            github: "https://github.com/nazmulbhuyian",
            email: ""
        },
        {
            id: 3,
            name: "Kaiser Tanveer",
            img: "https://i.ibb.co/h7FTqyZ/My-PP.jpg",
            title: "Team Leader || GitHub Manager || UI Developer || Front End Developer",
            facebook: "https://web.facebook.com/Kaiser2581",
            linkedin: "https://www.linkedin.com/in/kaiser-tanveer/",
            github: "https://github.com/Kaiser-Tanveer",
            email: "kaisertanveer0@gmail.com"
        },
    ];
    return (
        <section className="py-6 bg-gray-100 text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
                    Our Dev Team
                </p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
                    Bravo Bank Developers
                </h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8 group">
                    {employees.map(employee => (
                        <div
                            key={employee.id}
                            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-primary text-gray-100 shadow-lg shadow-gray-700 group-hover:scale-100 hover:!scale-105 duration-500">
                            <img
                                alt="employeeImage"
                                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                                src={employee.img}
                            />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leading-snug">
                                    {employee.name}
                                </p>
                                <p>{employee.title}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a
                                    rel="noopener noreferrer"
                                    href={employee?.facebook}
                                    title="Facebook"
                                    className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                                >
                                    <FaFacebookF className="text-xl" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href={`mailto: ${employee?.email}`}
                                    title="Email"
                                    className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                                >
                                    <FaEnvelopeOpenText className="text-xl" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href={employee?.linkedin}
                                    title="LinkedIn"
                                    className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                                >
                                    <FaLinkedinIn className="text-xl" />
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href={employee?.github}
                                    title="GitHub"
                                    className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                                >
                                    <FaGithubAlt className="text-xl" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Peoples;
