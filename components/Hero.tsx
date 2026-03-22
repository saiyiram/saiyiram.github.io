import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative z-10">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              CS student &amp; Full Stack Developer
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] mb-6 md:mb-8">
            Saiyi
            <br />
            <span className="italic text-primary">ram</span>
            <span className="text-outline">.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-xl mb-8 md:mb-10">
            CS student + web developer exploring scalable backend systems and
            AI. I love building efficient solutions that actually solve real
            problems.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-start sm:items-center">
            <a
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:pr-12 w-full sm:w-auto text-center"
              href="#projects"
            >
              <span className="relative z-10">View My Work</span>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                arrow_forward
              </span>
            </a>
            <a
              className="text-slate-custom font-bold hover:text-primary transition-colors flex items-center gap-2 w-full sm:w-auto"
              href="#contact"
            >
              Let's collaborate
              <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 organic-blob -z-10 translate-x-4 translate-y-4"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light/50 organic-blob -z-10 animate-pulse"></div>
            <div className="w-full h-full overflow-hidden organic-blob shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-slate-200">
              {/* Using a placeholder since local 'saiyiram.jpg' is not available */}
              <img
                alt="Saiyiram Portrait"
                className="w-full h-full object-cover"
                src="/saiyiram.jpg"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 glass-card p-6 rounded-2xl max-w-[200px]">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Currently
                </span>
                <p className="text-sm font-bold text-slate-custom">
                  Building Web based projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
