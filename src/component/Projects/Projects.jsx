import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  ExternalLink,
  Github,
  Calendar,
  User,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import projects from "../Data/Data.json";

const Projects = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -450, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 450, behavior: "smooth" });
  };

  const limitWords = (text, limit) =>
    text.split(" ").slice(0, limit).join(" ") + "...";

  const ProjectCard = (project) => (
    <div className="flex flex-col h-full">
      {/* IMAGE */}
      <div className="relative h-44 overflow-hidden group rounded-t-2xl">
        <img
          src={project.image}
          alt={project.Title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col flex-grow bg-[#0a0a0a] rounded-b-2xl">
        {/* META */}
        <div className="flex gap-3 text-[11px] uppercase tracking-widest mb-4">
          <span className="flex items-center gap-2 bg-cyan-500/10 px-3 py-1.5 rounded text-cyan-400">
            <Calendar size={13} /> {project.duration}
          </span>
          <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded text-slate-400">
            <User size={13} /> {project.role}
          </span>
        </div>

        <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-cyan-400 transition">
          {project.Title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {limitWords(project.Discription, 10)}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-3 py-1 bg-[#141414] border border-white/5 rounded-full uppercase tracking-wide text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.Hyperlink}
          target="_blank"
          rel="noreferrer"
          className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition"
        >
          View Project
          <ArrowUpRight className="text-cyan-500" size={18} />
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-14 bg-black relative overflow-hidden">
      {/* GLOW EFFECT */}
      <div className="absolute -top-20 left-1/4 w-[450px] h-[450px] bg-cyan-900/15 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-blue-900/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-8">
          <span className="text-cyan-500 uppercase tracking-[0.35em] text-xs font-bold">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-5 text-cyan-500">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Projects
            </span>
          </h2>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-end gap-3 mb-8">
          {[ChevronLeft, ChevronRight].map((Icon, i) => (
            <button
              key={i}
              onClick={i === 0 ? slideLeft : slideRight}
              className="p-3 bg-white border border-white/10 rounded-full hover:bg-cyan-500 hover:border-cyan-500 transition"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* SLIDER - CARDS CLOSER TOGETHER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="cursor-pointer min-w-[90%] md:min-w-[48%] lg:min-w-[36%] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            >
              {ProjectCard(project)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
