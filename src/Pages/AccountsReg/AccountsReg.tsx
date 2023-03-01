import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

// type of Account Registration data 
type formInput = {
    role: string,
    fName: string,
    lName: string,
    email: string,
    tel: number;
    img: string,
}

const AccountsReg = () => {
    const imageHostKey = '14f1e107e329b44a04c4481b2e76451e';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formInput>();

    const onSubmit: SubmitHandler<formInput> = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const profilePhoto = imgData.data.url;

                    const regData = {
                        role: data.role,
                        user: data.fName + " " + data.lName,
                        email: data.email,
                        phone: data.tel,
                        img: profilePhoto
                    }

                    fetch("http://localhost:5000/requestedUsers", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(regData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Requested for your Account Successfully!!');
                            };
                        });
                };
            });
    };
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(https://i.ibb.co/XxdHxYQ/accReg.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className='container mx-auto py-20'
        >
            <section className="w-5/6 md:w-[500px] mx-auto relative bg-transparent p-6 rounded-lg shadow-xl shadow-gray-900 bg-gradient-to-r from-gray-200 to-gray-100">
                <h2 className="text-4xl font-bold text-center pb-6 text-gray-700 underline">
                    Your Information
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label>Account Types</label>
                        <select
                            {...register("role", { required: "Please select the Account Type" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500">
                            <option value="student">Students Account</option>
                            <option value="student">Savings Account</option>
                            <option value="student">Current Account</option>
                            <option value="student">Fix Deposit Account</option>
                        </select>
                        {errors.fName && (
                            <p className="text-red-700 text-center">
                                {errors.fName.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            {...register("fName", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        />
                        {errors.fName && (
                            <p className="text-red-700 text-center">
                                {errors.fName.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            {...register("lName", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        />
                        {errors.lName && (
                            <p className="text-red-700 text-center">{errors.lName.message}</p>
                        )}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        />
                        {errors.email && (
                            <p className="text-red-700 text-center">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            type="tel"
                            {...register("tel", { required: "Phone No. is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            defaultValue="+880"
                        />
                        {errors.tel && (
                            <p className="text-red-700 text-center">{errors.tel.message}</p>
                        )}
                    </div>
                    <div>
                        <label>Profile Photo</label>
                        <input
                            type="file"
                            {...register("img", { required: "Profile Photo is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        />
                        {errors.img && (
                            <p className="text-red-700 text-center">{errors.img.message}</p>
                        )}
                    </div>
                    <input
                        type="submit"
                        value="Next"
                        className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100"
                    />
                </form>
            </section>
        </div>
    );
};

export default AccountsReg;