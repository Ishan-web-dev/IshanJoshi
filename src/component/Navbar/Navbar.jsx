import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projectMain" },
    { name: "Experience", link: "/Experience" },
    { name: "Resume", link: "/Resume" },
    { name: "Contact", link: "/Contact" },
  ];

  // Scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- NAVBAR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            Ishan<span className="text-indigo-500">.</span>
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2 text-white hover:text-indigo-400 transition-colors"
          >
            <span className="text-sm uppercase tracking-widest font-medium">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-4 h-0.5 bg-current ml-auto"></span>
            </div>
          </button>
        </div>
      </header>

      {/* --- SIDEBAR OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Content */}
        <aside
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-12">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white/50 hover:text-white transition-colors mb-12"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 50 + 150}ms` : "0ms",
                    transform: isOpen ? "translateX(0)" : "translateX(20px)",
                    opacity: isOpen ? 1 : 0
                  }}
                  className="text-3xl font-light text-white hover:text-indigo-400 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Footer / Socials */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-gray-500">Get in touch</p>
              <a href="mailto:workishan24@gmail.com" className="text-sm text-white hover:text-indigo-400 transition-colors">
                workishan24@gmail.com
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}