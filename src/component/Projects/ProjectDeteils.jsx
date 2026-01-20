import React from "react";
import { useParams } from "react-router-dom";
import projects from "../Data/Data.json";

const ProjectDeteils = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2 className="text-white text-center mt-20">Project Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* -------- BACKGROUND BANNER IMAGE -------- */}
      <div
        className="w-full h-[55vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto h-full flex items-end pb-10 px-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{project.Title}</h1>
            <p className="text-blue-400 mt-2 text-lg">{project.role}</p>

            <a
              href={project.Hyperlink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-white underline hover:text-purple-200"
            >
              Website Link →
            </a>
          </div>
        </div>
      </div>

      {/* -------- MAIN CONTENT SECTION -------- */}
      <div className="max-w-5xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE - DESCRIPTION */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Project Overview
          </h2>
           <h5 className=" font-normal border-b border-gray-700 pb-1">
            About Organization
          </h5>

          <p className="text-gray-300 leading-relaxed">{project.Discription}</p>

          <h2 className="text-2xl font-semibold mt-6">What I Did</h2>

          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>{project.whatIDo}</li>
          </ul>

          {/* TECH TAGS */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 border border-purple-500 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - PROJECT INFO CARD */}
        <div className="bg-[#0b0b0b] border border-gray-700 p-6 rounded-xl h-fit">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>

          <p className="text-gray-400 mb-2">
            ⏳ Duration: <span className="text-white">{project.duration}</span>
          </p>

          <p className="text-gray-400 mb-2">
            🔗 Website:{" "}
            <a
              href={project.Hyperlink}
              target="_blank"
              className="text-purple-300 underline"
            >
              Visit Site
            </a>
          </p>

          <p className="text-gray-400">
            Status: <span className="text-green-400">{project.link}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeteils;
