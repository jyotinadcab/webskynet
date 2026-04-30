import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-[#f4f7ff] dark:bg-[#0a133e] transition-colors duration-300 py-16 px-6">
      <div className="mx-auto max-w-[700px] rounded-2xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-xl p-8 md:p-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-[#ff5a1f]">
            New Account
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-[#111827] dark:text-white">
            Create Your Profile
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Fill in your details to get started.
          </p>
        </div>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            className="rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
          />
          <input
            type="text"
            placeholder="Last name"
            className="rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
          />
          <input
            type="email"
            placeholder="Email address"
            className="md:col-span-2 rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="md:col-span-2 rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
          />

          <div className="md:col-span-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="w-full rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="button"
            className="md:col-span-2 rounded-lg bg-[#ff5a1f] hover:bg-[#ef4b12] text-white font-semibold py-3 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a href="#login" className="text-[#ff5a1f] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
};

export default Signup;