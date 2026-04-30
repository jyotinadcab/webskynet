import React from "react";
import { FaArrowRight, FaCheck } from "react-icons/fa";

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
const aboutHighlights = [
  "We are determined and focus on our product development and digital services.",
  "We provide services in website design, development, mobile apps, and digital marketing.",
  "We stay ahead in support and deliver next-generation digital solutions.",
];
const teamMembers = [
  {
    name: "Neeraj Belwal",
    role: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Shanker Gond",
    role: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ravi Kushwaha",
    role: "Network Admin",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dinesh Maurya",
    role: "Support",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

const About = () => {
  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      <section className="bg-[#070f33] border-b border-[#18234e] py-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            About Webskynet
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#edf4ff] to-[#f8fbff] dark:from-[#14245d] dark:to-[#0f1a4a] p-4">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
              alt="Digital service expertise"
              className="w-full h-[420px] object-cover rounded-2xl"
            />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
              About Us
            </p>
            <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white leading-tight">
              Enjoy Full Digital Service Expertise
            </h2>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#e11d48]">
              Immerse Yourself in the Ultimate Digital Service Experience
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Webskynet Technologies is one of the most advanced and
              result-oriented companies in product design and development, path
              building, and customer satisfaction. With modern technologies, we
              solve both old and new digital challenges.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Filled with talented and hard-working experts, our team focuses on
              building practical solutions for businesses of every size.
            </p>

            <ul className="mt-7 space-y-4">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-full bg-[#ff5a1f] text-white flex items-center justify-center shrink-0">
                    <FaCheck size={11} />
                  </span>
                  <span className="text-base text-[#111827] dark:text-gray-200 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
            Our Team
          </p>
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white">
            We Help to Acheive Your
            <br />
            Business Goal
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            We help businesses grow by delivering practical digital strategies
            and solutions with our experienced technology team.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-md border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
              <div className="px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-[#111827] dark:text-white">
                    {member.name}
                  </h3>
                  <span className="w-8 h-8 rounded bg-[#ff5a1f] text-white flex items-center justify-center shrink-0">
                    <FaArrowRight size={12} />
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-[#ff5a1f]">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#070f33] border-y border-[#18234e] py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-[320px] h-[320px] rounded-full p-2 bg-gradient-to-br from-[#4f8cff] to-[#182f73]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Client handshake"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
                Feedback
              </p>
              <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-white leading-tight">
                What Our Clients Are Saying?
              </h2>
              <p className="mt-5 text-gray-300 leading-relaxed">
                We highly recommend using Real Web Design to design and build
                your site. They carefully listen and give thoughtful advice to
                clients which made working with them enjoyable.
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                They can take a high-level idea and produce a professional
                looking result in a short order.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Client"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Dinesh Maurya</h3>
                  <p className="text-sm text-gray-300">CEO at Web Infomax IT Solution</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5a1f]" />
                <span className="w-3 h-3 rounded-full border border-white/70" />
                <span className="w-3 h-3 rounded-full border border-white/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
