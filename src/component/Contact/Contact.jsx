import React from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-zinc-300 px-6 py-24 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <span className="inline-block text-xs font-medium tracking-[0.4em] uppercase text-zinc-500 mb-4">
            Available for hire
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
            Let's build <span className="text-zinc-500 italic font-serif">something</span> together.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            I’m currently looking for new opportunities in frontend development and UI design.
            Drop a message and let's start a conversation.
          </p>
        </header>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Form - Spans 3 columns on desktop */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative">
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-white transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-all placeholder:text-zinc-700"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group relative">
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-white transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-all placeholder:text-zinc-700"
                    placeholder="Your Gmail ID (@gmail.com)"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-white transition-colors">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-white transition-all resize-none placeholder:text-zinc-700"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
              >
                Send Message
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Sidebar - Spans 2 columns on desktop */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-12 lg:pl-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 mb-8">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <ContactLink 
                  icon={<Mail size={18} />} 
                  label="Email" 
                  value="Workishan24@gmail.com" 
                  href="mailto:Workishan24@gmail.com" 
                />
                <ContactLink 
                  icon={<Linkedin size={18} />} 
                  label="LinkedIn" 
                  value="ishan-linkdin" 
                  href="https://linkedin.com/in/ishan-linkdin" 
                />
                <ContactLink 
                  icon={<Github size={18} />} 
                  label="GitHub" 
                  value="Ishan-web-dev" 
                  href="https://github.com/Ishan-web-dev" 
                />
                <ContactLink 
                  icon={<MapPin size={18} />} 
                  label="Location" 
                  value="India, GMT +5:30" 
                />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
              <p className="text-sm italic leading-relaxed text-zinc-400">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }) {
  const Content = (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-zinc-500 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-zinc-600">{label}</p>
        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {Content}
    </a>
  ) : (
    Content
  );
}