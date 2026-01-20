import React from "react";

const servicesData = [
    {
    title: "Frontend Development",
    description:
      "Building responsive, fast, and scalable websites using React, Tailwind CSS, and modern JavaScript frameworks.",
    classes: "React / Next.js",
    
  },
  {
    title: "UI / UX Design",
    description:
      "Designing clean, modern, and user-focused interfaces with attention to usability, aesthetics, and brand consistency.",
    classes: "Figma / Canva",
  },
  {
    title: "Website Redesign",
    description:
      "Redesigning existing websites to improve UI, performance, responsiveness, and overall user experience.",
    classes: "UI + Code",
  },
];

const Services = () => {
  return (
    <section className="feature__section bg-[#F4F4F7]">
      <div className="max-w-5xl px-7 lg:px-10 py-14 mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col gap-y-3">
          <p className="text-sm text-[#1EBFC1]">MY SERVICES</p>
          <h2 className="text-3xl md:text-3xl lg:text-4xl md:max-w-lg font-bold text-zinc-800">
            What I Can Do For You
          </h2>
          <p className="md:max-w-lg text-zinc-600">
            I offer modern, scalable, and user-focused web solutions to help
            businesses and individuals build a strong digital presence.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full pt-10 relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="grid grid-rows-1 p-5 bg-white rounded-xl gap-y-2 w-full border border-slate-500/50 hover:shadow-[5px_5px_0_rgba(0,0,0,0.5)] transition-shadow duration-150 ease-linear cursor-pointer"
            >
              <div className="flex flex-col gap-y-2.5">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="text-slate-700/70 text-base">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-5 w-full">
                <p className="bg-[#E0F7F6] px-2 py-0.5 text-sm rounded border border-cyan-500">
                  {service.classes}
                </p>
                <p className="bg-gray-200 px-2 py-0.5 text-sm rounded border border-gray-300">
                  {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
