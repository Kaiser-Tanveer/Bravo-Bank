import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router";

// type of Account Registration data
type formInput = {
    role: string;
    fName: string;
    lName: string;
    email: string;
    tel: number;
    img: string;
    residentialArea: string;
    permanentArea: string,
    nid: number;
    nomineeName: string;
    nomineeId: number;
    nomineeRelation: string;
    gender: string;
    birthDate: string;
};

const AccountsReg = () => {
    const imageHostKey = "14f1e107e329b44a04c4481b2e76451e";

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<formInput>();

    const onSubmit: SubmitHandler<formInput> = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const profilePhoto = imgData.data.url;

                    const regData = {
                        role: data.role,
                        user: data.fName + " " + data.lName,
                        email: user.email,
                        phone: data.tel,
                        img: profilePhoto,
                        status: "pending",
                        residentialArea: data.residentialArea,
                        permanentArea: data.permanentArea,
                        nid: data.nid,
                        nomineeName: data.nomineeName,
                        nomineeId: data.nomineeId,
                        nomineeRelation: data.nomineeRelation,
                        gender: data.gender,
                        birthDate: data.birthDate,
                        amount: 0
                    };

                    fetch("http://localhost:5000/requestedUsers", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(regData),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                toast.success("Requested for your Account Successfully!!");
                                navigate('/userProfile');
                            }
                        });
                }
            });
    };
    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(https://i.ibb.co/XxdHxYQ/accReg.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="container mx-auto py-20"
        >
            <section className="w-5/6 md:w-[600px] mx-auto relative bg-transparent p-6 rounded-lg shadow-xl shadow-gray-900 bg-gradient-to-r from-gray-200 to-gray-100">
                <h2 className="text-4xl font-bold text-center pb-6 text-gray-700 underline">
                    Request Account
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Account Types</label>
                        <select
                            {...register("role", {
                                required: "Please select the Account Type",
                            })}
                            onChange={(e) => console.log(e.target.value)}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        >
                            <option value="Student">Students Account</option>
                            <option value="Savings">Savings Account</option>
                            <option value="Current">Current Account</option>
                            <option value="Fix-Deposit">Fix Deposit Account</option>
                        </select>
                        {errors.fName && (
                            <p className="text-red-700 text-center">{errors.fName.message}</p>
                        )}
                    </div>
                    {/* flex container */}
                    <div className="flex gap-3">
                        <div>
                            <label>First Name</label>
                            <input
                                type="text"
                                {...register("fName", { required: "Name is required" })}
                                className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                                placeholder="ex: Kaiser"
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
                                placeholder="ex: Tanveer"
                            />
                            {errors.lName && (
                                <p className="text-red-700 text-center">
                                    {errors.lName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email" readOnly
                            {...register("email", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            defaultValue={user?.email}
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
                        <label>Your Photo (Passport Size)</label>
                        <input
                            type="file"
                            {...register("img", { required: "Profile Photo is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        />
                        {errors.img && (
                            <p className="text-red-700 text-center">{errors.img.message}</p>
                        )}
                    </div>
                    {/* gender */}
                    <div>
                        <label>Gender</label>
                        <select
                            {...register("gender", {
                                required: "Please select the Gender Type",
                            })}
                            onChange={(e) => console.log(e.target.value)}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-700 text-center">
                                {errors.gender.message}
                            </p>
                        )}
                    </div>
                    {/* residential area */}
                    <div>
                        <label>Residential Area</label>
                        <input
                            type="area"
                            {...register("residentialArea", {
                                required: "Area name is required",
                            })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Mirpur 10, Dhaka"
                        />
                        {errors.residentialArea && (
                            <p className="text-red-700 text-center">
                                {errors.residentialArea.message}
                            </p>
                        )}
                    </div>
                    {/* permanent area */}
                    <div>
                        <label>Permanent Area</label>
                        <input
                            type="permanentArea"
                            {...register("permanentArea", {
                                required: "Area name is required",
                            })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Mirpur 2, Dhaka"
                        />
                        {errors.permanentArea && (
                            <p className="text-red-700 text-center">
                                {errors.permanentArea.message}
                            </p>
                        )}
                    </div>
                    {/* nid */}
                    <div>
                        <label>NID</label>
                        <input
                            type="number"
                            {...register("nid", {
                                required: "Area name is required",
                            })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="Your NID Number"
                        />
                        {errors.nid && (
                            <p className="text-red-700 text-center">
                                {errors.nid.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label>Nominee Name</label>
                        <input
                            type="nomineeName"
                            {...register("nomineeName", { required: "Name is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: Abdur Rahim"
                        />
                        {errors.nomineeName && (
                            <p className="text-red-700 text-center">
                                {errors.nomineeName.message}
                            </p>
                        )}
                    </div>
                    {/* date */}
                    <div>
                        <label>Birth Date</label>
                        <input
                            type="date"
                            {...register("birthDate", { required: "Date is required" })}
                            className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            placeholder="ex: 31/7/2000"
                        />
                        {errors.birthDate && (
                            <p className="text-red-700 text-center">
                                {errors.birthDate.message}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-3">
                        {/* nomineeid */}
                        <div>
                            <label>Nominee NID</label>
                            <input
                                type="number"
                                {...register("nomineeId", {
                                    required: "Nominee NID is required",
                                })}
                                className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                                placeholder="ex: 9990345934"
                            />
                            {errors.nomineeId && (
                                <p className="text-red-700 text-center">
                                    {errors.nomineeId.message}
                                </p>
                            )}
                        </div>

                        {/* nomineerelation */}
                        <div>
                            <label>Nominee Relation</label>
                            <select
                                {...register("nomineeRelation", {
                                    required: "Please select the Relation Type",
                                })}
                                onChange={(e) => console.log(e.target.value)}
                                className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
                            >
                                <option>Father</option>
                                <option>Mother</option>
                                <option>Child</option>
                                <option>Brother</option>
                                <option>Partner</option>
                                <option>GrandChild</option>
                                <option>Grandparents</option>
                            </select>
                            {errors.nomineeRelation && (
                                <p className="text-red-700 text-center">
                                    {errors.nomineeRelation.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <input
                        type="submit"
                        value="Next"
                        className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 font-bold uppercase text-gray-100 hover:scale-110 shadow-lg shadow-gray-700 duration-500"
                    />
                </form>
            </section>
        </div>
    );
};

export default AccountsReg;
