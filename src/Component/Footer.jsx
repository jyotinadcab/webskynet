import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#060b2c] text-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-800 border border-blue-300/30" />
              <span className="text-[36px] font-black tracking-tight leading-none">
                <span className="text-[#d9a029]">W3SKY</span>
                <span className="text-[#5d89ff]">.NET</span>
              </span>
            </div>

            <p className="text-sm leading-7 text-white/85 max-w-md">
              As the best website development service provider, we have served
              many businesses and solved their queries in the best way possible.
              Reach out to us and we will help you choose the right product and
              services for your needs.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaTwitter size={12} />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-[#ff5a1f]" />
                <span>175 Premium Area, India</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-[#ff5a1f]" />
                <span>+91-7991262233 (India)</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-[#ff5a1f]" />
                <span>+971-562496070 (Dubai)</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-[#ff5a1f]" />
                <span>info@webskynet.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>
            2025 &copy; Webskynet IT Solutions is Proudly Owned by{" "}
            <span className="text-[#ff5a1f]">Prak Chaturvedi</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
