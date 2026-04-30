import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const socialLogos = [
  { label: "Clutch", className: "text-[#1f2937]" },
  { label: "Trustpilot", className: "text-[#111827]" },
  { label: "LinkedIn", className: "text-[#0a66c2]" },
  { label: "GoodFirms", className: "text-[#3b82f6]" },
  { label: "Medium", className: "text-[#111827]" },
  { label: "reddit", className: "text-[#ff4500]" },
  { label: "facebook", className: "text-[#1877f2]" },
  { label: "Pinterest", className: "text-[#e60023]" },
  { label: "Instagram", className: "text-[#d946ef]" },
  { label: "X", className: "text-white bg-black rounded-full px-5 py-1" },
];

const Contact = () => {
  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      <section className="bg-[#070f33] border-b border-[#18234e] py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-4xl font-extrabold">
          {socialLogos.map((logo) => (
            <span key={logo.label} className={logo.className}>
              {logo.label}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="rounded-xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-lg bg-[#fff2ee] text-[#ff5a1f] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#111827] dark:text-white">
                  Our Address
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Uttar Pradesh, India
                </p>
                <p className="text-gray-600 dark:text-gray-300">Dubai</p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-lg bg-[#fff2ee] text-[#ff5a1f] flex items-center justify-center shrink-0">
                <FaPhoneAlt />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#111827] dark:text-white">
                  Contact
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Mobile: +91-7991262233
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Mobile: +971-562496070
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  E-mail: info@webskynet.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  E-mail: webskynet.co@gmail.com
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-lg bg-[#fff2ee] text-[#ff5a1f] flex items-center justify-center shrink-0">
                <FaClock />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-[#111827] dark:text-white">
                  Hours of Operation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Monday - Friday: 09:30 - 19:00
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Sunday &amp; Saturday: 10:30 - 18:00
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-[#ff5a1f]">
            GET IN TOUCH
          </h2>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-xl bg-gradient-to-br from-[#f5f7ff] to-[#eef3ff] dark:from-[#14245d] dark:to-[#101a4b] p-6 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
              alt="Contact support"
              className="w-full max-w-[460px] rounded-xl object-cover"
            />
          </div>

          <div className="rounded-xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm p-6">
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="w-full rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none resize-none"
              />
              <button
                type="button"
                className="rounded-md bg-[#111827] hover:bg-[#0b1220] text-white font-semibold px-8 py-3 transition-colors"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
