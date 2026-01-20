import { useState, useEffect } from "react";

export default function Hero() {
  const fullText =
    "Hi, I’m Ishan Joshi, a Front-End Developer and Web Designer passionate about building modern, responsive, and user-friendly websites using React, Next.js, Tailwind CSS, and JavaScript. I focus on creating visually appealing, high-performance digital experiences with strong attention to detail.";

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // typing speed

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-cyan-500/30">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-navy-900/40 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] rounded-full bg-blue-900/20 blur-[100px]" />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen items-center justify-center lg:items-stretch lg:justify-start">
        {/* Content Side */}
        <div className="w-full lg:w-3/5 flex items-center justify-center lg:justify-start px-6 py-12 md:px-16 lg:px-24">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-slate-400">
                Available for projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="text-white">Hi, I’m </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ishan
              </span>
              <br />
              <span className="text-slate-400 text-3xl md:text-5xl mt-2 block">
                Frontend Developer
              </span>
            </h1>

            {/* ✅ TYPING EFFECT ADDED HERE */}
            <p className="text-slate-400 text-lg md:text-md max-w-lg leading-[25px] mb-10 mx-auto lg:mx-0 font-mono">
              {typedText}
              <span className="animate-pulse text-cyan-400">|</span>
            </p>

            {/* Tech Stack Mini-Icons */}
            <div className="mt-12 pt-8 border-t border-slate-800/50 flex gap-6 grayscale opacity-50 hover:opacity-100 transition-opacity justify-center lg:justify-start">
              <span className="text-sm font-mono tracking-tighter">JS</span>
              <span className="text-sm font-mono tracking-tighter">TS</span>
              <span className="text-sm font-mono tracking-tighter">NEXT</span>
              <span className="text-sm font-mono tracking-tighter">
                TAILWIND
              </span>
            </div>
          </div>
        </div>

        {/* Visual Side (UNCHANGED) */}
        <div className="hidden lg:flex lg:w-2/5 relative items-center justify-center p-12">
          <div className="relative w-full aspect-square max-w-md group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

            <div
              className="relative h-full w-full rounded-2xl bg-cover bg-center overflow-hidden border border-slate-800"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/1200x/0a/5a/66/0a5a66c087f6d9b6419e0e8d8c9387d4.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-mono text-cyan-400 mb-2">
                  // Creative Focus
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Turning logic into art.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
