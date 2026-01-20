import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  GraduationCap,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const PersonalInfo = () => {
  const experiences = [
    {
      role: "INTERNSHIP + TRAINING, Front-End Developer",
      company: "MARWARPAY INFO SOLUTION INFO PVT. LTD.",
      period: "Jan 2025 - December 2025",
      description:
        "Designed and developed responsive websites and landing pages for fintech platforms using React, Next.js, and Tailwind CSS. Collaborated with teams to optimize UI/UX for payment gateway websites, improving customer experience. Created engaging visual content and templates using Canva and Figma.",
    },
    {
      role: "Web Designer",
      company: "MARWARPAY INFO SOLUTION INFO PVT. LTD.",
      period: "July 2024 - December 2024",
      description:
        "Handled HTML/CSS template editing, file management, and data organization.Created digital content, marketing posts, and graphics using Canva.",
    },
     {
      role: "SEO Executive Intern",
      company: "Zippy Infotech",
      period: "Jan 2024 – Mar 2024",
      description:
        "Assisted in SEO optimization and social media campaigns to increase online visibility.Created digital content, marketing posts, and graphics using Canva",
    },
  ];

  const skills = [
    { name: "HTML / CSS / JavaScript", percent: 90 },
    { name: "React / Vite", percent: 85 },
    { name: "Tailwind CSS", percent: 95 },
    { name: "Next.js", percent: 45 },
    { name: "Figma / Canva", percent: 75 },
  ];

 const additionalSkills = [
  {
    title: "Technical & Frontend Skills",
    description:
      "Hands-on experience with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and performance-optimized responsive web development with modern UI patterns and animations.",
  },
  {
    title: "Design & Digital Optimization",
    description:
      "Proficient in Canva and Figma for UI/UX design, wireframing, and visuals, along with strong understanding of SEO principles to create search-friendly and user-focused web experiences.",
  },
];

  return (
    <section className="w-full py-24 bg-black text-gray-300 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 mb-2">
            Discovery
          </h2>
          <h3 className="text-5xl font-bold font-serif text-white mb-6">
            About Me
          </h3>
          <div className="h-1 w-24 bg-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div variants={fadeInUp}>
              <h4 className="text-2xl font-semibold mb-4 text-white">
                I'm{" "}
                <span className="text-blue-500 text-3xl">
                  Ishan Joshi
                </span>
              </h4>
              <p className="text-lg text-gray-400 leading-relaxed italic">
                "Building clean, responsive, and user-friendly interfaces that
                turn complex problems into simple, beautiful digital experiences."
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={fadeInUp}
            >
              <InfoItem icon={<Mail size={18} />} label="Email" value="workishan24@gmail.com" />
              <InfoItem icon={<Phone size={18} />} label="Phone" value="+91 7207881725" />
              <InfoItem icon={<MapPin size={18} />} label="Location" value="Jaipur, Rajasthan" />
              <InfoItem
                icon={<GraduationCap size={18} />}
                label="Degree"
                value="Bachelor of Computer Application (RU)"
              />
            </motion.div>
            

            {/* Work Experience */}
            <motion.div variants={fadeInUp}>
              <h5 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Briefcase className="text-blue-500" />
                Work Experience
              </h5>

              <div className="space-y-8 border-l border-blue-900 pl-6 ml-2">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-black" />
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <h6 className="text-lg font-bold text-white">{exp.role}</h6>
                    <p className="text-sm font-medium text-gray-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Skills */}
            <motion.div
              className="p-8 bg-gradient-to-br from-[#0a0f1e] to-[#0f172a] rounded-3xl border border-blue-900/40"
              variants={fadeInUp}
            >
              <h5 className="text-xl font-bold mb-8 text-white">
                Professional Skills
              </h5>

              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span>{skill.name}</span>
                      <span className="text-blue-500">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Additional Skill Set (NEW SECTION) */}
            <motion.div variants={fadeInUp}>
              <h5 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                <Layers className="text-blue-500" />
                Additional Skill Set
              </h5>

              <div className="space-y-8 border-l border-blue-900 pl-6 ml-2">
                {additionalSkills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-black" />
                    <h6 className="text-lg font-bold text-white">
                      {skill.title}
                    </h6>
                    <p className="text-gray-400 text-sm leading-lose mt-1">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>



            {/* Availability Cards */}
            <motion.div
              className="p-8 bg-[#000611] rounded-3xl text-white flex justify-between items-center"
              variants={fadeInUp}
            >
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Availability
                </p>
                <p className="text-xl font-bold">Open for Work</p>
              </div>
              <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition">
                <Link to="/Contact">
                  <ExternalLink size={24} />
                </Link>
              </button>
            </motion.div>

            <motion.div
              className="p-8 bg-[#000611] rounded-3xl text-white flex justify-between items-center"
              variants={fadeInUp}
            >
              <div>
                <p className="text-blue-200 text-sm font-medium">
                  Availability
                </p>
                <p className="text-xl font-bold">Open for Freelance</p>
              </div>
              <button className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition">
                <Link to="/Contact">
                  <ExternalLink size={24} />
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Info Item
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl border border-blue-900/40 bg-[#0a0f1e] hover:border-blue-600 transition">
    <div className="text-blue-500 bg-blue-500/10 p-2 rounded-lg">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
        {label}
      </p>
      <p className="text-sm font-semibold text-gray-200">{value}</p>
    </div>
  </div>
);

export default PersonalInfo;
