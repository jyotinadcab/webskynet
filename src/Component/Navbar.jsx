import React, { useState } from "react";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home", page: "home" },
  { label: "About", href: "#about", page: "about" },
  { label: "Services", href: "#services", page: "services" },
  { label: "Blog", href: "#blog", hasDropdown: true, page: "blog" },
  { label: "Portfolio", href: "#portfolio", page: "portfolio" },
  { label: "Hiring", href: "#hiring", page: "hiring" },
  { label: "Contact", href: "#contact", page: "contact" },
];

const authItems = {
  login: { label: "Login", href: "#login", page: "login" },
  signup: { label: "Signup", href: "#signup", page: "signup" },
};

const Navbar = ({ darkMode, setDarkMode, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (e, item) => {
    if (item.page && onNavigate) {
      e.preventDefault();
      onNavigate(item.page);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 border-b border-gray-200 dark:border-[#18234e] bg-white dark:bg-[#070f33] transition-colors duration-300">
      <div className="mx-auto h-[52px] max-w-[1400px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 border border-blue-300/30" />
          <span className="text-[30px] font-black tracking-tight leading-none">
            <span className="text-[#d9a029]">W3SKY</span>
            <span className="text-[#5d89ff]">.NET</span>
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 text-[14px] font-semibold text-[#8f3f2a] dark:text-[#ba5c43]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`inline-flex items-center gap-1 transition-colors ${
                    currentPage === item.page
                      ? "text-[#f08261]"
                      : "hover:text-[#f08261]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <FaChevronDown size={10} />}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center overflow-hidden rounded-md border border-gray-300 dark:border-[#2b3a78]">
            <a
              href={authItems.login.href}
              onClick={(e) => handleItemClick(e, authItems.login)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                currentPage === authItems.login.page
                  ? "bg-gray-200 dark:bg-[#1f2c64] text-[#111827] dark:text-white"
                  : "text-[#111827] dark:text-white hover:bg-gray-100 dark:hover:bg-[#1f2c64]"
              }`}
            >
              {authItems.login.label}
            </a>
            <a
              href={authItems.signup.href}
              onClick={(e) => handleItemClick(e, authItems.signup)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                currentPage === authItems.signup.page
                  ? "bg-[#ef4b12] text-white"
                  : "bg-[#ff5a1f] text-white hover:bg-[#ef4b12]"
              }`}
            >
              {authItems.signup.label}
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center text-gray-700 dark:text-white/90">
            <button className="hover:text-black dark:hover:text-white transition-colors">
              <FaSearch size={12} />
            </button>

            <span className="mx-3 h-4 w-px bg-gray-300 dark:bg-white/40" />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {darkMode ? <FaMoon size={12} /> : <FaSun size={12} />}
            </button>

            <button
              className="md:hidden hover:text-black dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden pb-4">
          <ul className="flex flex-col gap-3 text-[14px] font-semibold text-[#8f3f2a] dark:text-[#ba5c43]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`inline-flex items-center gap-1 transition-colors ${
                    currentPage === item.page
                      ? "text-[#f08261]"
                      : "hover:text-[#f08261]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <FaChevronDown size={10} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center overflow-hidden rounded-md border border-gray-300 dark:border-[#2b3a78] w-fit">
            <a
              href={authItems.login.href}
              onClick={(e) => handleItemClick(e, authItems.login)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                currentPage === authItems.login.page
                  ? "bg-gray-200 dark:bg-[#1f2c64] text-[#111827] dark:text-white"
                  : "text-[#111827] dark:text-white hover:bg-gray-100 dark:hover:bg-[#1f2c64]"
              }`}
            >
              {authItems.login.label}
            </a>
            <a
              href={authItems.signup.href}
              onClick={(e) => handleItemClick(e, authItems.signup)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
                currentPage === authItems.signup.page
                  ? "bg-[#ef4b12] text-white"
                  : "bg-[#ff5a1f] text-white hover:bg-[#ef4b12]"
              }`}
            >
              {authItems.signup.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;