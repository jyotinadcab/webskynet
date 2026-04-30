import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="bg-[#f4f7ff] dark:bg-[#0a133e] transition-colors duration-300 py-16 px-6">
      <div className="mx-auto max-w-[1200px] rounded-2xl overflow-hidden border border-gray-100 dark:border-[#1f2c64] shadow-xl grid grid-cols-1 lg:grid-cols-2">
        <section className="bg-gradient-to-br from-[#070f33] to-[#1a2a6c] text-white p-10 lg:p-14">
          <p className="text-sm uppercase tracking-widest text-[#ffb08f]">
            Welcome
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Sign In
            <br />
            To Continue
          </h1>
          <p className="mt-6 text-white/80 leading-relaxed">
            Access your dashboard, explore your projects, and manage your
            account from one place.
          </p>
          <div className="mt-10 h-2 w-24 rounded-full bg-[#ff5a1f]" />
        </section>

        <section className="bg-white dark:bg-[#101a4b] p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-[#111827] dark:text-white">
            Login to your account
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Enter your credentials below.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#ff5a1f] outline-none transition"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/forgot-password" className="text-[#ff5a1f] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full rounded-lg bg-[#ff5a1f] hover:bg-[#ef4b12] text-white font-semibold py-3 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <a href="#signup" className="text-[#ff5a1f] font-semibold hover:underline">
              Create one
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;