import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiFramer, SiCanva, SiVite,
} from "react-icons/si";
import { SiMui } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Core",
    description:
      "Architecting high-performance, SEO-friendly user interfaces with modern frameworks.",
    skills: [
      { name: "React", icon: <FaReact />, color: "text-blue-400" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-200" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    ],
    large: true,
  },
  {
    title: "Styling & UI",
    description:
      "Crafting beautiful, responsive designs with utility-first frameworks.",
    skills: [
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
      { name: "MUI", icon: <SiMui />, color: "text-blue-500" },
    ],
  },
  {
    title: "Motion & UX",
    description:
      "Bringing interfaces to life with fluid, purposeful animations.",
    skills: [
      { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-400" },
      { name: "CSS Animate", icon: <FaCss3Alt />, color: "text-blue-500" },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description:
      "Streamlining development with modern version control and design tools.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-gray-200" },
      { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
      { name: "Vite", icon: <SiVite />, color: "text-indigo-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative min-h-screen bg-black py-28 px-6 overflow-hidden">
      
      {/* Ambient Navy Glows */}
      <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-blue-900/30 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-indigo-900/30 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3 block"
          >
            Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight"
          >
            My Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Stack.
            </span>
          </motion.h2>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl 
                bg-gradient-to-br from-[#0b1220] to-[#0f172a]
                border border-blue-900/40
                shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                hover:border-blue-600/60
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
                transition-all duration-500
                ${category.large ? "md:col-span-2" : "md:col-span-1"}
              `}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group/item flex items-center gap-2 px-4 py-2 
                        rounded-2xl 
                        bg-[#020617]/70 
                        border border-blue-900/40
                        hover:border-blue-500
                        hover:bg-[#020617]
                        transition-all duration-300"
                    >
                      <span
                        className={`text-xl ${skill.color} group-hover/item:scale-110 transition-transform`}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Navy Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-900/30 to-transparent rounded-tr-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
