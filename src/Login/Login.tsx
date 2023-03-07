import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthContext } from '../context/AuthProvider';
import logo from '../Assets/logo/favicon.png';
import { Link, useNavigate } from 'react-router-dom';


type userInput = {
    email: string,
    password: string
}
const Login = () => {
    const [err, setErr] = useState<any | null>('');

    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors } } = useForm<userInput>();
    const onSubmit: SubmitHandler<userInput> = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then((result: any) => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch((err: any) => setErr(err.message))
    }

    return (
        <div style={{ backgroundImage: "linear-gradient(to left, rgba(59, 130, 246, 0.75), rgba(117, 19, 93, 0.73)), url(https://i.ibb.co/L8yCcT4/shaking-hands-3096229-1920.jpg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}
            className='container py-20'
        >
            <section className='w-5/6 md:w-96 mx-auto relative bg-transparent border border-primary p-6 rounded-lg shadow-xl shadow-gray-900 bg-gradient-to-r from-gray-200 to-gray-100'>
                <img src={logo} alt="logo" className='mx-auto w-32 -mt-12 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl pl-1' />
                <h2 className='text-4xl font-bold text-center text-gray-700'>Login</h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <label>Email</label>
                        <input type="email"
                            {...register("email", { required: "Name is required" })} className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500'
                        />
                        {errors.email &&
                            <p className='text-red-700 text-center' >{errors.email.message}</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            {...register("password", { required: "Name is required" })} className='rounded focus:outline-none focus:ring-2 text-gray-700 focus:border-error focus:ring-error border-b border-primary p-2 text-xl w-full mb-4 shadow-lg focus:shadow-sky-500'
                        />
                        {errors.password &&
                            <p className='text-red-700 text-center' >{errors.password.message}</p>}
                    </div>
                    <input type="submit" value='Login' className='w-full border-2 border-sky-500 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md py-2 text-gray-100' />
                    <p className='text-pink-500 text-center'>
                        {err}
                    </p>
                </form>
                <h2 className='text-gray-500 p-2'>New to Bravo Bank Please<Link to='/register' className='hover:underline hover:text-sky-500 ml-1'>Register</Link></h2>
            </section>
        </div>
    )
}

export default Login