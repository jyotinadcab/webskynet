import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaEnvelopeOpenText,
  FaBullhorn,
  FaLaptopCode,
  FaPenNib,
  FaAd,
  FaCogs,
  FaChartPie,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const Home = () => {
  const featureCards = [
    {
      title: "Marketing Analysis",
      description:
        "It involves examining market trends, consumer behavior, competitive landscape, and the effectiveness of marketing campaigns.",
      icon: <FaChartLine className="text-[#ff5a1f]" size={22} />,
      iconBg: "bg-[#fff1eb]",
    },
    {
      title: "Website Development",
      description:
        "Website development involves various tasks such as planning, coding, testing, and launching the site.",
      icon: <FaCode className="text-[#7a5cff]" size={22} />,
      iconBg: "bg-[#f2edff]",
    },
    {
      title: "Email Marketing",
      description:
        "It's a powerful tool for businesses to communicate with their audience, promote products or services, and build relationships.",
      icon: <FaEnvelopeOpenText className="text-[#2c9aa0]" size={22} />,
      iconBg: "bg-[#e8f8f7]",
    },
    {
      title: "Social Media Marketing",
      description:
        "It aims to engage and connect with a target audience through compelling content, interactive posts, and targeted advertising.",
      icon: <FaBullhorn className="text-[#d946ef]" size={22} />,
      iconBg: "bg-[#fdf0ff]",
    },
    {
      title: "Web App Development",
      description:
        "These apps typically allow users to create profiles, share content, communicate with others, and engage in online communities.",
      icon: <FaLaptopCode className="text-[#ff4fa3]" size={22} />,
      iconBg: "bg-[#ffeefa]",
    },
    {
      title: "Content Marketing",
      description:
        "It aims to build brand awareness, foster relationships, and ultimately drive desired actions, such as website visits or purchases.",
      icon: <FaPenNib className="text-[#5bbd4a]" size={22} />,
      iconBg: "bg-[#ecfaea]",
    },
    {
      title: "PPC Advertising",
      description:
        "Advertisers create ad campaigns with specific targeting criteria such as location, interests, and behavior for better reach.",
      icon: <FaAd className="text-[#ff5a1f]" size={22} />,
      iconBg: "bg-[#fff4ee]",
    },
    {
      title: "Software Development",
      description:
        "Software development is the process of designing, creating, testing, and maintaining computer programs and applications.",
      icon: <FaCogs className="text-[#4c2fc2]" size={22} />,
      iconBg: "bg-[#f2edff]",
    },
    {
      title: "Digital Marketing",
      description:
        "The goal of digital marketing is to engage potential customers, build brand awareness, drive website traffic, and convert leads.",
      icon: <FaChartPie className="text-[#2c9aa0]" size={22} />,
      iconBg: "bg-[#e8f8f7]",
    },
  ];
  const integrationCards = [
    {
      title: "E-commerce",
      description: "Product listings, shopping cart, secure checkout, and more.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Educational",
      description:
        "Courses and lessons, quizzes and assessments, student profiles, and more.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Business",
      description: "Company information, services or products, contact forms, and more.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    },
  ];
  const partnerCards = [
    {
      name: "Trustpilot",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mailchimp",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "G 2",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Good Firms",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    },
  ];
  const mediaCards = [
    {
      title: "Digital Marketing Blogs",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Startup Blog",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Cybersecurity Blog",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-4 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-300">
              <span>GSTN: 09BDWPC5579G1ZW</span>
              <span className="rounded-full border border-blue-500 px-3 py-1 text-blue-600 dark:text-blue-300">
                ISO
              </span>
              <span className="font-bold text-blue-700 dark:text-blue-300">
                MSME
              </span>
            </div>

            <p className="text-xs uppercase text-gray-500 dark:text-gray-300 mb-3">
              Grow your business
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1b2433] dark:text-white">
              We Provide Perfect
              <br />
              Solution For Every
              <br />
              Digital Technologies
            </h1>

            <p className="mt-5 max-w-xl text-gray-600 dark:text-gray-300">
              Welcome to Webskynet IT Solution, where innovation meets efficiency
              in IT solutions to boost your business growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#ff5a1f] text-white px-6 py-2.5">
                Get Started
              </button>

              <span className="border px-4 py-2 rounded-full">
                WhatsApp India
              </span>

              <span className="border px-4 py-2 rounded-full">
                WhatsApp Dubai
              </span>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative min-h-[280px] md:min-h-[360px] rounded-3xl bg-gradient-to-br from-[#eaf4ff] to-[#f7fbff] dark:from-[#14245d] dark:to-[#0f1a4a] p-4">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=80"
              alt="Digital solutions illustration"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="border-t border-gray-100 dark:border-[#1f2c64]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-8 flex flex-wrap justify-center gap-8 text-2xl font-bold">
          <span>Clutch</span>
          <span>Trustpilot</span>
          <span className="text-blue-600">LinkedIn</span>
          <span>GoodFirms</span>
          <span>Medium</span>
        </div>
      </section>

      {/* Featured Services */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-[#ff5a1f] uppercase">
            Features
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#1b2433] dark:text-white">
            Let&apos;s Check Our Featured Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Unleash the full potential of your enterprise with our tailored IT
            services, designed to streamline operations, enhance security, and
            drive growth. Our seasoned experts employ top-tier technologies and
            best practices to ensure your business stays ahead of the curve.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-md bg-white dark:bg-[#101a4b] border border-[#f3f4f6] dark:border-[#1f2c64] p-8 text-center shadow-sm"
            >
              <div
                className={`w-14 h-14 rounded-full ${card.iconBg} flex items-center justify-center mx-auto`}
              >
                {card.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#111827] dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
              <button className="mt-8 inline-flex items-center gap-3 text-[#ff5a1f] font-semibold hover:text-[#ef4b12] transition-colors">
                <span className="w-8 h-8 rounded bg-[#ff5a1f] text-white flex items-center justify-center">
                  <FaArrowRight size={12} />
                </span>
                Get a quote
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#1e40af] dark:text-[#80a8ff] leading-tight">
              We Help to Website Growth
              <br />
              With Next Level Visitor
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              As the best website development service provider, our cutting-edge
              strategies are designed to optimize your website&apos;s performance and
              drive conversions, ensuring you stay ahead in the competitive
              digital landscape.
            </p>

            <div className="mt-7 space-y-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-[#ff5a1f] text-white flex items-center justify-center">
                    <FaMinus size={10} />
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                    Social Media Optimization
                  </h3>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Social Media Optimization (SMO) is the art and science of
                  strategically enhancing a brand&apos;s online presence and visibility
                  through social media platforms.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-[#1e40af] text-white flex items-center justify-center">
                  <FaPlus size={10} />
                </span>
                <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                  Content Generation
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-[#14b8a6] text-white flex items-center justify-center">
                  <FaPlus size={10} />
                </span>
                <h3 className="text-lg font-bold text-[#111827] dark:text-white">
                  Pay Per Click Services
                </h3>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] rounded-3xl bg-gradient-to-br from-[#edf2ff] to-[#f7f9ff] dark:from-[#121f54] dark:to-[#0f1943] p-4">
            <img
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1000&q=80"
              alt="Website growth with social media"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* 100+ Features to Integrate */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20">
        <p className="text-sm text-[#1e88e5]">More than solutions</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#111827] dark:text-white">
          100+ Features to integrate
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Choose the features you want in your website and we will integrate
          them together.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrationCards.map((card) => (
            <article key={card.title} className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full rounded-lg object-cover shadow-sm"
              />
              <div className="mx-6 -mt-14 rounded-xl bg-white dark:bg-[#101a4b] shadow-lg p-5 border border-gray-100 dark:border-[#1f2c64] relative z-10">
                <h3 className="text-2xl font-bold text-[#111827] dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-[#1e88e5] hover:bg-[#1976d2] text-white px-12 py-3 font-semibold shadow-md transition-colors">
            More...
          </button>
        </div>
      </section>

      {/* Our Service Partner */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] dark:text-white">
            Our Service Partner
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            As the best website development service provider, we offer
            unparalleled support and expertise tailored to your needs. From
            navigating challenges to seizing opportunities, we are dedicated to
            empowering your success.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCards.map((partner) => (
            <article
              key={partner.name}
              className="rounded-md border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm overflow-hidden"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-36 w-full object-cover"
              />
              <div className="px-4 py-3 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#111827] dark:text-white">
                  {partner.name}
                </h3>
                <span className="w-8 h-8 rounded bg-[#ff5a1f] text-white flex items-center justify-center">
                  <FaArrowRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Our Latest Media */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
            Our Blog
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#1198ff]">
            Our Latest Media
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to Webskynet&apos;s Media, a dynamic collection of our most
            recent and captivating creations. As the best website development
            service provider, we share our latest projects, innovations, and
            inspirations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCards.map((media) => (
            <article key={media.title} className="text-center">
              <img
                src={media.image}
                alt={media.title}
                className="w-full h-56 object-cover rounded-[100px] shadow-sm"
              />
              <h3 className="mt-5 text-3xl font-extrabold text-[#111827] dark:text-white">
                {media.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <div className="rounded-[40px] bg-[#fffef7] dark:bg-[#101a4b] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#ff5a1f]">
                Webskynet Updates
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-[#1198ff]">
                Subscribe To Our Newsletter
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Be the first to know.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white dark:bg-[#0a133e] rounded-full border border-gray-200 dark:border-[#1f2c64] p-2 max-w-2xl">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a1f] hover:bg-[#ef4b12] text-white px-6 py-2.5 font-semibold transition-colors">
                  Subscribe Now
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>

            <div className="relative min-h-[230px] rounded-3xl bg-gradient-to-br from-[#f4f8ff] to-[#eef6ff] dark:from-[#16245e] dark:to-[#101a4b] p-4">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
                alt="Newsletter subscription"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;