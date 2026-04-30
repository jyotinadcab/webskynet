import React from "react";

const blogPosts = [
  {
    title: "Digital Marketing",
    date: "12 May",
    description:
      "Digital marketing is the strategic creation and distribution of valuable, relevant, and consistent content to attract and engage a target audience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "FullStack Developer",
    date: "13 May",
    description:
      "Proficient in both front-end and back-end technologies, creating comprehensive web applications with seamless functionality.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data Science",
    date: "14 May",
    description:
      "Extracting insights from data through statistical analysis, machine learning, and advanced algorithms for informed decision-making and predictions.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Programming Blog",
    date: "15 May",
    description:
      "Crafting code to instruct computers; problem-solving, creativity, logic, and software development to shape the digital world.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cyber Security",
    date: "17 May",
    description:
      "Cybersecurity safeguards digital systems, networks, and data from unauthorized access, attacks, and damage, ensuring online safety.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Startup Blog",
    date: "17 Jul",
    description:
      "Navigating entrepreneurship, innovation, and success. Insights, tips, and trends for aspiring and established entrepreneurs.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
  },
];

const Blog = () => {
  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      <section className="relative bg-[#070f33] border-b border-[#18234e] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            All Blog
          </h1>
          <p className="mt-4 text-sm text-white/75">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white">
            Read our Latest Technical Insights
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Here are some potential blogs for a technical aspect.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group rounded-md border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 w-12 h-12 rounded bg-[#1198ff] text-white text-xs font-bold flex items-center justify-center text-center leading-tight">
                  {post.date.split(" ")[0]}
                  <br />
                  {post.date.split(" ")[1]}
                </div>
              </div>
              <div className="px-4 py-4">
                <h3 className="text-3xl font-extrabold text-[#111827] dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.description}
                </p>
                <button className="mt-5 inline-flex items-center gap-2 text-[#111827] dark:text-white font-semibold hover:text-[#1198ff] transition-colors">
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="relative overflow-hidden rounded-xl bg-[#0787ff] py-14 px-6 md:px-16">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=80"
              alt="newsletter background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative text-center">
            <p className="text-white/90 text-sm">Subscribe our newsletter</p>
            <h3 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
              Get latest update and news first
            </h3>

            <form className="mt-7 mx-auto max-w-4xl bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm text-gray-700 focus:outline-none rounded"
              />
              <button
                type="button"
                className="bg-[#0772da] hover:bg-[#0564bf] text-white font-semibold px-8 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
