import React from "react";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: 1,
    title: "LegalDoc Summarizer",
    tags: ["React", "FastApi"],
    imageUrl: "/legaldoc-summarizer.jpg",
    link: "https://github.com/saiyiram/legaldoc-summarizer-backend",
  },
  {
    id: 2,
    title: "Heartfinity",
    tags: ["Next.js"],
    imageUrl: "/heartfinity.jpg",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            Featured <span className="text-outline italic">Projects</span>
          </h2>
          <div className="hidden md:block">
            <a
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest"
              href="https://github.com/saiyiram"
              target="_blank"
            >
              All Repositories
              <span className="w-12 h-px bg-slate-300 group-hover:w-16 group-hover:bg-primary transition-all"></span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.imageUrl}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-custom/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-6 backdrop-blur-sm">
                  <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors">
                    View Details
                  </button>
                </div> */}
              </div>
              <a href={project.link} target="_blank">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <div className="flex gap-2 mb-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-tighter px-2 py-1 bg-slate-100 text-slate-600 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors flex-shrink-0">
                    north_east
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
