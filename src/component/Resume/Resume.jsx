import React from "react";
import img from "../../assets/ishan.png"

// --- DATA REMAINS UNCHANGED ---
const profileData = {
  name: "Ishan Joshi",
  role: "Front-End Developer / Web Designer",
  image: img,
  about: "Front-End Developer and UI Designer with hands-on experience building responsive, modern, and user-focused web applications. Strong foundation in Computer Applications with real-world experience in fintech and IT environments. Skilled in React, Next.js, Tailwind CSS, and UI/UX design, with a professional mindset and passion for clean, scalable code.",
  contact: { email: "Workishan24@gmail.com", phone: "7297881725" },
};

const experienceData = [
  {
    duration: "Jan 2025 – Present",
    role: "Training + Internship | Frontend Developer",
    company: "Marwarpay Info Solution Pvt. Ltd.",
    desc: ["Designed and developed responsive landing pages using React, Next.js, and Tailwind CSS.", "Created engaging visual content and UI templates using Canva.", "Collaborated with teams to optimize UI/UX for payment gateway platforms."],
  },
  {
    duration: "Jul 2024 – Jan 2025",
    role: "Web Designer & Back Office Executive",
    company: "Marwarpay Info Solution Pvt. Ltd.",
    desc: ["Handled HTML/CSS template editing and layout improvements.", "Managed file organization and structured data documentation."],
  },
  {
    duration: "Jan 2024 – Mar 2024",
    role: "Digital Marketing Intern",
    company: "Zippy Infotech Pvt. Ltd.",
    desc: ["Assisted with SEO optimization and social media marketing campaigns.", "Designed digital content, marketing posts, and creatives using Canva."],
  },
];

const projectsData = [
  // { title: "MyPratham", points: ["Full-Stack Development & Architecture for a modern e-learning platform.", "UI/UX and User Flow design focused on engagement and accessibility."] },
  // { title: "WearBasket", points: ["Designed and developed a complete e-commerce UI.", "Handled branding, logo, banners, and responsive layouts."] },
  // { title: "Budaniya Technologies" },
  // { title: "Paynexus" },
];

const skillsData = { programming: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"], familiar: ["JavaScript", "Bootstrap"] };
const toolsData = ["Git & GitHub", "Figma", "Canva", "SEO", "MS Office", "VS Code"];

// --- REDESIGNED COMPONENT ---
export default function AestheticResume() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-white selection:text-black pb-20 overflow-x-hidden">
      
      {/* Aesthetic Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 border-b border-zinc-900/50 flex flex-col md:flex-row gap-16 items-center md:items-start">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <img
              src={profileData.image}
              alt="profile"
              className="relative w-64 h-80 object-cover rounded-2xl grayscale brightness-90 hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-7xl lg:text-9xl font-serif text-white tracking-tighter leading-none">
                Ishan <span className="text-zinc-700 italic">Joshi</span>
              </h1>
              <p className="text-zinc-500 tracking-[0.4em] uppercase text-xs font-semibold pl-1">
                {profileData.role}
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-[25px] font-light text-zinc-400">
              {profileData.about}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
              <span className="hover:text-white transition-colors cursor-pointer">{profileData.contact.email}</span>
              <span className="hover:text-white transition-colors cursor-pointer">{profileData.contact.phone}</span>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 py-20">
          
          {/* MAIN COLUMN (L) */}
          <div className="lg:col-span-7 space-y-24">
            
            {/* Experience */}
            <section>
              <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 mb-8 font-bold border-l-2 border-zinc-800 pl-4">Experience</h2>
              <div className="space-y-16">
                {experienceData.map((exp, i) => (
                  <div key={i} className="group relative">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                      <h3 className="text-2xl text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <span className="text-[12px] font-mono text-zinc-600">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4 italic">{exp.company}</p>
                    <ul className="space-y-1">
                      {exp.desc.map((d, idx) => (
                        <li key={idx} className="text-sm leading-relaxed text-zinc-400 flex items-start">
                          <span className="mr-3 text-zinc-700">—</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              {/* <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-400 mb-8 font-bold border-l-2 border-zinc-800 pl-4">Selected Works</h2> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((p, i) => (
                  <div key={i} className="p-6 bg-zinc-900/20 rounded-2xl border border-zinc-900/50 hover:bg-zinc-900/40 hover:border-zinc-800 transition-all duration-300 group">
                    <h3 className="text-white mb-3 flex justify-between items-center">
                      {p.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </h3>
                    {p.points && (
                      <ul className="text-xs text-zinc-500 space-y-2">
                        {p.points.map((pt, idx) => (
                          <li key={idx}>• {pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR (R) */}
          <div className="lg:col-span-5 space-y-20">
            
            {/* Skills */}
            <section className="space-y-10">
              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-6 font-bold">Programming</h2>
                <div className="flex flex-wrap gap-2">
                  {skillsData.programming.map((s, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400 hover:border-zinc-500 hover:text-white transition-all duration-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-600 mb-6 font-bold">Tools & Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {toolsData.map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-zinc-900/40 text-[10px] uppercase tracking-widest text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Education & Others */}
            <section className="p-8 bg-zinc-900/20 rounded-2xl border border-zinc-900/50 space-y-3">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Academic</h2>
                <p className="text-white font-medium">Bachelor of Computer Application</p>
                <p className="text-xs text-zinc-500 mt-1">S.S. Jain Subodh P.G. College</p>
                <p className="text-[14px] font-mono text-zinc-200 mt-2">CGPA: 8.03</p>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Recognition</h2>
                <ul className="text-sm text-zinc-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Acadmic Knowledge
                  </li>
                </ul>
              </div>
            </section>
            {/* Certifiaction */}
            <section className="p-8 bg-zinc-900/20 rounded-3xl border border-zinc-900/50 space-y-10">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Certification</h2>
                <p className="text-white font-medium">Web Design and Digital Marketing</p>
                <p className="text-xs text-zinc-500 mt-1">Samyak Institute Of Computer</p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}