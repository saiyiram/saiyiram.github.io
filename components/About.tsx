import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              About <br />
              <span className="italic text-primary">Me</span>
            </h2>
            <div className="flex gap-8 md:gap-12 mt-12 md:mt-16">
              <div className="p-4 md:p-6 rounded-xl bg-primary-light/50 backdrop-blur-sm border border-primary-light/30">
                <span className="block text-3xl md:text-4xl font-serif font-bold text-primary">
                  loading ...
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  GPA
                </span>
              </div>
              <div className="border-l-2 border-primary/20"></div>
              <div className="p-4 md:p-6 rounded-xl bg-primary-light/50 backdrop-blur-sm border border-primary-light/30">
                <span className="block text-3xl md:text-4xl font-serif font-bold text-primary">
                  2
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Projects
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-primary flex-shrink-0 text-xl mt-0.5">
                  code
                </span>
                <p className="text-sm md:text-base font-light text-slate-700 leading-relaxed">
                  Computer Science student passionate about building robust
                  systems with technical precision and creative problem-solving.
                </p>
              </div>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50">
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-emerald-600 flex-shrink-0 text-xl mt-0.5">
                  trending_up
                </span>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  Passionate about modern technologies—microservices, machine
                  learning, and creating maintainable, efficient software.
                </p>
              </div>
            </div>
            <div className="mt-2 md:mt-4 p-4 md:p-6 bg-gradient-to-br from-slate-custom via-slate-800 to-slate-custom text-white rounded-xl relative overflow-hidden group border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
              <span className="material-symbols-outlined absolute top-4 right-4 text-4xl opacity-20">
                lightbulb
              </span>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Philosophy
                  </span>
                </div>
                <p className="text-sm md:text-base font-serif leading-relaxed italic">
                  "Know that you don’t know. That is superior" - Lao Tzu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
