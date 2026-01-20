import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-20 pb-10 px-6 overflow-hidden">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Brand/Logo Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white">
            ISHAN<span className="text-blue-500">.</span>DEV
          </h2>
          <p className="text-gray-500 text-sm mt-2 font-light tracking-widest">
            BUILDING SCALABLE DIGITAL SOLUTIONS
          </p>
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-x-5 gap-y-4 text-sm font-medium tracking-wide uppercase mb-12">
          {['Home', 'About', 'Skills','Expirience','Resume', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons - Sleek Monochrome Style */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/ishan-linkdin" },
            { icon: <FaGithub />, url: "https://github.com/Ishan-web-dev" },
            // { icon: <FaInstagram />, url: "https://instagram.com" },
            // { icon: <FaTwitter />, url: "https://twitter.com" },
          ].map((social, idx) => (
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

        {/* Bottom Section: Copyright */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-light">
            © {currentYear} Ishan Portfolio. Crafted with passion.
          </p>
          <div className="flex gap-6">
            {/* <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a> */}
            {/* <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a> */}
          </div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-blue-900/10 blur-[80px] rounded-full pointer-events-none"></div>
    </footer>
  );
}