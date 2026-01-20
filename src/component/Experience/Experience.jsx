import { motion } from "framer-motion";
import { CalendarDays, Briefcase, ChevronRight } from "lucide-react";

const experienceData = [
  {
    company: "MARWARPAY INFO SOLUTION Pvt. Ltd.",
    role: "Frontend Developer (Training + Internship)",
    duration: "Jan 2025 - Dec 2025",
    contributions: [
      "Architected responsive fintech interfaces using React and Next.js, prioritizing performance and mobile-first design.",
      "Translated high-fidelity Figma designs into pixel-perfect, reusable Tailwind CSS components.",
      "Collaborated with backend teams to integrate payment APIs, enhancing the end-to-end user checkout flow.",
    ],
  },
  {
    company: "MARWARPAY INFO SOLUTION Pvt. Ltd.",
    role: "Web Designer ",
    duration: "July 2024 – Dec 2024",
    contributions: [
      "Maintained legacy HTML/CSS templates, ensuring cross-browser compatibility and structural integrity.",
      "Streamlined internal data organization workflows and managed digital assets efficiently.",
    ],
  },
  {
    company: "Zippy Infotech",
    role: "SEO Executive Intern ",
    duration: "Jan 2024 – Mar 2024",
    contributions: [
      "Assisted in SEO optimization and social media campaigns to increase online visibility.Created digital content, marketing posts, and graphics using Canva",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-black py-28 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-3">
            Career Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience<span className="text-blue-500">.</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-blue-900/50 ml-4 md:ml-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-16 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 bg-blue-600 border-4 border-black rounded-full shadow-[0_0_12px_rgba(37,99,235,0.7)]" />

              {/* Card */}
              <div className="group bg-gradient-to-br from-[#0b1220] to-[#0f172a] p-8 rounded-2xl 
                border border-blue-900/40
                shadow-[0_12px_40px_rgba(0,0,0,0.7)]
                hover:border-blue-500/60
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
                transition-all duration-500"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                      {item.role}
                    </h4>

                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Briefcase size={14} className="text-blue-400" />
                      <span className="text-sm font-medium uppercase tracking-wide">
                        {item.company}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                    bg-[#020617]/70 text-gray-300 border border-blue-900/40">
                    <CalendarDays size={14} className="text-blue-400" />
                    <span className="text-xs font-semibold">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Contributions */}
                <ul className="space-y-2">
                  {item.contributions.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 leading-relaxed"
                    >
                      <ChevronRight
                        size={18}
                        className="text-blue-500 mt-1 shrink-0"
                      />
                      <span className="text-[15px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
