import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // ✅ NAVIGATION MAPPING (Add paths easily)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/ProjectMain" },
    { name: "Contact", path: "/contact" },
  ];

  // ✅ SOCIAL LINKS MAPPING
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/ishan-linkdin",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Ishan-web-dev",
    },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-10 px-6 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white">
            ISHAN<span classNameName="text-blue-500">.</span>DEV
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-light tracking-widest">
            BUILDING SCALABLE DIGITAL SOLUTIONS
          </p>
        </motion.div>

        {/* Navigation Links (MAPPED) */}
        <nav className="flex justify-center flex-wrap gap-x-5 gap-y-4 text-sm font-medium tracking-wide uppercase mb-12">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Social Icons (MAPPED) */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-800 bg-white/5 text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/10 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-light">
            © {currentYear} Ishan Portfolio. Crafted with passion.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-blue-900/10 blur-[80px] rounded-full pointer-events-none"></div>
    </footer>
  );
}
