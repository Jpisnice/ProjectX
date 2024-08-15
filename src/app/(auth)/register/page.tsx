"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaGithub } from 'react-icons/fa'; // GitHub icon

export default function Register() {
  const router = useRouter();

  const [authState, setAuthState] = useState({
    wardNumber: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<registerErrorType>();

  const submitForm = () => {
    setLoading(true);
    console.log("The auth state is ", authState);
    axios.post("/api/auth/register", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status == 200) {
          router.push("/login?message=Account created successfully");
        } else if (response?.status == 400) {
          setErrors(response?.errors);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("Something went wrong");
      });
  };

  // Sign in with GitHub
  const githubSignin = () => {
    signIn('github', {
      callbackUrl: "/",
      redirect: true,
    });
  }

  // Sign in with Google
  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <section className="bg-gray-500 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="flex items-center justify-center w-full max-w-lg px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <form action="#" method="POST" className="flex flex-col justify-center h-full">
            <div className="mb-4 flex justify-center">
              <FiUserCheck size={50} color="black" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up to create an account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="ward-number" className="text-base font-medium text-gray-900 flex items-center">
                  <FaUser className="mr-2" /> Ward Number
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Ward Number"
                    id="wardNumber"
                    min="0"
                    onChange={(e) => setAuthState({ ...authState, wardNumber: e.target.value })}
                  ></input>
                  <span className='text-red-500 font bold'>{errors?.wardNumber}</span>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900 flex items-center">
                  <FaEnvelope className="mr-2" /> Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => setAuthState({ ...authState, email: e.target.value })}
                  ></input>
                  <span className='text-red-500 font bold'>{errors?.email}</span>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-base font-medium text-gray-900 flex items-center">
                  <FaLock className="mr-2" /> Password
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setAuthState({ ...authState, password: e.target.value })}
                  ></input>
                  <span className='text-red-500 font bold'>{errors?.password}</span>
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="text-base font-medium text-gray-900 flex items-center">
                  <FaLock className="mr-2" /> Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setAuthState({ ...authState, password_confirmation: e.target.value })}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className={`inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white ${loading ? "bg-gray" : "bg-black hover:bg-black/80"}`}
                  onClick={submitForm}
                >
                  {loading ? "Processing" : "Create account"}
                </button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={googleLogin}
              >
                <FcGoogle className="mr-2 h-6 w-6" />
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={githubSignin}
              >
                <FaGithub className="mr-2 h-6 w-6 text-black" />
                Sign up with GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
