import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Blog from "./Component/Blog";
import Portfolio from "./Component/Portfolio";
import Hiring from "./Component/Hiring";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Footer from "./Component/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "home" : page;
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const syncPageWithHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "about") {
        setCurrentPage("about");
      } else if (hash === "services") {
        setCurrentPage("services");
      } else if (hash === "blog") {
        setCurrentPage("blog");
      } else if (hash === "portfolio") {
        setCurrentPage("portfolio");
      } else if (hash === "hiring") {
        setCurrentPage("hiring");
      } else if (hash === "contact") {
        setCurrentPage("contact");
      } else if (hash === "login") {
        setCurrentPage("login");
      } else if (hash === "signup") {
        setCurrentPage("signup");
      } else {
        setCurrentPage("home");
      }
    };

    syncPageWithHash();
    window.addEventListener("hashchange", syncPageWithHash);

    return () => {
      window.removeEventListener("hashchange", syncPageWithHash);
    };
  }, []);

  return (
    <div className="min-h-screen pt-[52px] bg-[#eef2ff] dark:bg-[#050b2a] transition-colors duration-300">
      
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      
      {currentPage === "about" ? (
        <About />
      ) : currentPage === "services" ? (
        <Services />
      ) : currentPage === "blog" ? (
        <Blog />
      ) : currentPage === "portfolio" ? (
        <Portfolio />
      ) : currentPage === "hiring" ? (
        <Hiring />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : currentPage === "login" ? (
        <Login />
      ) : currentPage === "signup" ? (
        <Signup />
      ) : (
        <Home />
      )}

      <Footer />

    </div>
  );
}

export default App;