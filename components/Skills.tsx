import React from "react";
import type { IconType } from "react-icons";
import { SiPython, SiPytorch, SiPostgresql, SiReact } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Skill } from "../types";

const skills: Skill[] = [
  { name: "Python", icon: SiPython },
  { name: "Java", icon: DiJava },
  { name: "PyTorch", icon: SiPytorch },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "React Native", icon: SiReact },
];

const Skills: React.FC = () => {
  return (
    <section
      className="py-20 md:py-32 px-6 bg-slate-50 relative overflow-hidden"
      id="skills"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Technical <span className="italic">Skills</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate-500 text-sm md:text-base">
            The tools and technologies I use to build modern applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl shadow-slate-200/50">
          {skills.map((skill, index) => {
            const Icon: IconType = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-12 flex flex-col items-center justify-center gap-3 md:gap-6 hover:bg-primary group transition-all duration-500 cursor-default"
              >
                <span className="text-3xl md:text-4xl group-hover:text-white transition-colors">
                  <Icon size="1em" aria-hidden={true} />
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
