import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from "react-router-dom"
import img from "../../assets/ishan.png"

export default function Intro() {
  const [text] = useTypewriter({
    words: ['Software Developer', 'react.js Specialist', 'UI Designer Expert', 'Problem Solver'],
    loop: 0, // Infinitely
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section className="min-h-screen bg-black text-white py-5 px-6 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 overflow-hidden relative">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-navy-900 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-900 rounded-full blur-[150px] opacity-10"></div>

      {/* Left Side: Image with Decorative Frame */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-navy-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative flex justify-center items-center bg-[#0a0a0a] rounded-2xl p-2">
          <img
            src={img}
            alt="About Me"
            className="w-72 h-96 md:w-80 lg:w-[400px] lg:h-[500px] object-cover rounded-xl grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </motion.div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 z-10">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-blue-500"></div>
          <span className="text-blue-400 uppercase tracking-[0.3em] text-xs font-semibold">
            I am Ishan
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
          A Passionate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-navy-500">
            {text}
          </span>
          <Cursor cursorColor='#3b82f6' />
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-[28px] max-w-xl font-light">
          Currently, I am pursuing my BCA at S.S. Jain Subodh P.G. College, Rajasthan University (Batch 2023 – 2026), where I continue to learn, experiment, and refine my technical skills. Alongside my studies, I work with tools like<span className="text-white">React, Next.js, Tailwind CSS, and JavaScript</span> to bring ideas to life through clean design and smooth functionality.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-5 pt-4">
          {/* <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20">
            View Projects
          </button> */} 
          <Link to = "/Contact">
          <button className="px-8 py-3 border border-gray-700 hover:border-blue-500 hover:text-blue-400 text-gray-300 rounded-full font-medium transition-all">
         
            Contact Me
            
          </button>
          </Link>
        </div>
      </div>

      {/* Vertical Decorative Text (Hidden on small screens) */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="text-gray-800 text-8xl font-black uppercase tracking-tighter opacity-10 pointer-events-none">
          CREATIVE
        </span>
      </div>
    </section>
  );
}