
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/logo/favicon.png";
import banner from "../Assets/Banners/BravoBanner2.png";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

type userInput = {
  img: string;
  fullName: string;
  email: string;
  password: string;
  photoURL: string;
  displayName: string;
};

const Register = () => {
  const navigate = useNavigate();

  const { createUser, updateUser } = useContext(AuthContext);

  const imageHostKey = '14f1e107e329b44a04c4481b2e76451e';

  const { register, handleSubmit, formState: { errors }, reset } = useForm<userInput>();
  const onSubmit: SubmitHandler<userInput> = (data) => {
    createUser(data.email, data.password)
      .then((result: any) => {
        const user = result.user;
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
            if (imgData.status === 200) {
              const image = imgData.data.url;
              const userData = {
                displayName: data.fullName,
                photoURL: image
              };
              updateUser(userData)
                .then(() => {
                  console.log(userData);
                  saveUser(data.fullName, data.email, image)
                })
                .catch((err: any) => console.error(err))
            }
          })
          .catch(error => console.error(error))
      })  
  };

  const saveUser = (fullName: string, email: string, image: any) => {
    const info = {
      fullName,
      email,
      image
    }
    fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          // setLoginUserEmail(email)
          toast.success('User Created Successfully')
          reset()
          navigate('/')
        }
      })
      .catch((err: any) => console.error(err));
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container py-20"
    >
      <section className="w-5/6 md:w-96 mx-auto relative bg-transparent border border-primary p-6 rounded-lg shadow-xl shadow-gray-900 bg-gradient-to-r from-gray-200 to-gray-100">
        <img
          src={logo}
          alt="logo"
          className="mx-auto w-32 -mt-12 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl pl-1"
        />
        <h2 className="text-4xl font-bold text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Name is required" })}
              className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
            />
            {errors.fullName && (
              <p className="text-red-700 text-center">
                {errors.fullName.message}
              </p>
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
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Name is required" })}
              className="rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500"
            />
            {errors.password && (
              <p className="text-red-700 text-center">
                {errors.password.message}
              </p>
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
            value="Register"
            className="w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 text-gray-100"
          />
        </form>
        <h2 className="text-gray-500 p-2">
          Already Have An Account Please
          <NavLink to="/logIn" className="hover:underline hover:text-sky-500">
            {" "}
            Login
          </NavLink>
        </h2>
      </section>
    </div>
  );
};

export default Register;
