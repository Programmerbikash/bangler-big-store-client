import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
    e.preventDefault();
    const loginInfo = {
        email,
        password
    };
    console.log(loginInfo);
    fetch("https://bangler-store-server.onrender.com/signIn", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            toast.success('Successfully submitted!')
            alert('form submitted');
            setEmail("");
            setPassword("");
            // form.value = "";
      })
      .catch((error) => {
          console.error("Error:", error);
      });
    }

    return (
        <div>
            <Head>
                <title>Sign In Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex">
            <div className="lg:w-1/2">
                <h1 className="text-gray-600 dark:text-gray-300 md:text-lg">Welcome back</h1>
                
                <h1 className="mt-4 text-3xl font-medium text-gray-800 capitalize md:text-4xl lg:text-5xl dark:text-white">
                    login to your account
                </h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
                <form onSubmit={handleLogin} className="w-full lg:max-w-xl">
                    <div className="relative flex items-center">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"/>
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"/>
                    </div>

                    <div className="mt-8 md:flex md:items-center">
                        <button type='submit' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign in
                        </button>

                        <Link href="/signUp" className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline dark:text-blue-400">
                            Don’t have an account yet? <br /> Please Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default SignIn;