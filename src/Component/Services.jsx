import React from "react";
import { FaArrowRight } from "react-icons/fa";

const portfolioItems = [
  {
    title: "Dharma Pvt. Ltd.",
    category: "Construction Website",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sarkari exam quiz",
    category: "Online Exam Preparation Website",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Biametrix",
    category: "Online Meal Plan Generator",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "O Level Exam",
    category: "Online Exam Website",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Indian Weight Loss Diet",
    category: "Indian Weight Loss Diet App",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "7 Days Plywood",
    category: "Plywood Business Website",
    image:
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Technowave",
    category: "Technology Company Website",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Techpulse",
    category: "Corporate Service Website",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digisol",
    category: "Digital Agency Website",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "A To Z List",
    category: "Product/Directory Listing Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Techskynet IT Solution",
    category: "Website Development Provider Website",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Curos Investing",
    category: "Finance Website",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Infomax IT Solution",
    category: "IT Solution Company",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aditya Corporation",
    category: "Tech Support",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Codttech IT Services",
    category: "IT Services Website",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Daksh Optics",
    category: "Fashion Website",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cosmo Laser Dental",
    category: "Dental Website",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Programming Trick",
    category: "Programming Website",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "ICJ",
    category: "Job Placement Website",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tech Buddy",
    category: "Coaching Website",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weblopr IT Solution",
    category: "Website Service Provider Website",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
  },
];

const Services = () => {
  return (
    <main className="bg-white dark:bg-[#0a133e] transition-colors duration-300">
      <section className="bg-[#070f33] border-b border-[#18234e] py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Our Top Services
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-medium text-[#7c3aed]">Our services</p>
          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-[#111827] dark:text-white">
            We Provide Best Featured Services
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-300 leading-relaxed">
            At Webskynet IT Solution, we take pride in delivering exceptional
            services that exceed client expectations. Our commitment to
            excellence, innovation, and customer satisfaction sets us apart in
            the industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-gray-100 dark:border-[#1f2c64] bg-white dark:bg-[#101a4b] shadow-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-3xl font-extrabold text-[#111827] dark:text-white">
                    {item.title}
                  </h3>
                  <span className="w-9 h-9 rounded bg-[#ff5a1f] text-white flex items-center justify-center shrink-0">
                    <FaArrowRight size={12} />
                  </span>
                </div>
                <p className="mt-2 text-lg text-[#ff5a1f] font-medium">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
