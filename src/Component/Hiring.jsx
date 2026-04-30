import React from "react";

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

const Hiring = () => {
  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      <section className="bg-[#070f33] border-b border-[#18234e] py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Hiring
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

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white">
          Apply Now !
        </h2>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="rounded-xl border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm p-5 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-2">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="rounded-md border border-gray-200 dark:border-[#2b3a78] dark:bg-[#0a133e] px-4 py-3 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
                />

                <div className="md:col-span-2 mt-1 text-left">
                  <h3 className="text-2xl font-extrabold text-[#111827] dark:text-white">
                    Applying For
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-[#111827] dark:text-gray-200">
                    <label className="flex items-center gap-2">
                      <input type="radio" name="role" defaultChecked />
                      <span>Full Stack Developer</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="role" />
                      <span>Front End Developer</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="role" />
                      <span>Back End Developer</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name="role" />
                      <span>Digital Marketing</span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2 mt-2 text-left">
                  <button
                    type="button"
                    className="rounded-md bg-[#111827] hover:bg-[#0b1220] text-white font-semibold px-8 py-3 transition-colors"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?auto=format&fit=crop&w=900&q=80"
                alt="Hiring team"
                className="w-full h-full min-h-[280px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hiring;
