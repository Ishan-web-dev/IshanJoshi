import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-black transition-colors duration-500">
      <div className="relative flex flex-col items-center">
        {/* Subtle Background Glow */}
        <div className="absolute -inset-10 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full" />
        
        <h1 className="relative text-5xl md:text-8xl font-extralight tracking-tighter flex items-center text-gray-800 dark:text-gray-100">
          L
          <span className="relative flex h-12 w-12 md:h-20 md:w-20 items-center justify-center mx-1">
            {/* Spinning Ring */}
            <span className="animate-spin absolute h-full w-full border-4 border-transparent border-t-blue-500 border-l-blue-500 rounded-full"></span>
            {/* Static Inner Icon (Your SVG) */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-10 md:h-10 opacity-50"
              fill="currentColor"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" />
            </svg>
          </span>
          ading
          <span className="flex ml-2">
            <span className="animate-bounce [animation-delay:-0.3s]">.</span>
            <span className="animate-bounce [animation-delay:-0.15s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </h1>
        
        <p className="mt-4 text-xs uppercase tracking-[0.5em] text-gray-400 font-medium">
          Please Wait
        </p>
      </div>
    </div>
  );
};

export default Loader;