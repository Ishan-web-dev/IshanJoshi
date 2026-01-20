import React from "react";

export default function AboutHero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex items-center justify-center bg-black text-white pt-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Minimalist Header */}
        <div className="space-y-2 mb-10">
          <p className="text-blue-500 font-mono tracking-widest text-sm uppercase">
            -// About Me
          </p>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight">
            I’m <span className="font-semibold">Ishan</span>
          </h1>
        </div>

        {/* Main Bio - High Contrast Typography */}
        <div className="border-l border-gray-800 pl-6 md:pl-10 space-y-6">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light max-w-3xl">
            A <span className="text-white">Front-End (MERN Stack) Developer</span> dedicated to 
            building clean, efficient, and user-centered digital solutions.
          </p>
          
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            I turn complex problems into simple, beautiful interface designs. 
            Currently focusing on performance and scalable architecture.
          </p>

          {/* Simple Link/Action */}
          {/* <div className="pt-4">
            <a 
              href="#contact" 
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-gray-400 hover:text-blue-500 transition-colors"
            >
              READ MY STORY 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}