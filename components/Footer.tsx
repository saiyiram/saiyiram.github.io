import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="pt-20 md:pt-32 pb-12 px-6 bg-slate-custom text-white relative overflow-hidden"
      id="contact"
    >
      {/* Background blob */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary opacity-10 organic-blob translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          {/* Left side */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 md:mb-10 leading-tight">
              Let's build <br />
              <span className="italic text-primary">tomorrow</span>.
            </h2>

            <div className="flex flex-col gap-6">
              {/* <p className="text-lg md:text-2xl font-light">
                bsaiyiram[at]gmail.com
              </p> */}

              {/* <div className="flex gap-6 mt-4">
                <a
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-custom transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">link</span>
                </a>

                <a
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-custom transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined">group</span>
                </a>
              </div> */}
            </div>
          </div>

          {/* Right side (replacing form) */}
          <div className="glass-card !bg-white/5 border-white/10 p-6 md:p-12 rounded-2xl md:rounded-[3rem] h-fit">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Get in touch
            </h3>

            <p className="text-sm opacity-70 mb-6">
              I'm currently building Web based projects
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <span className="opacity-50">Email</span>
                <p className="font-medium">bsaiyiram[at]gmail.com</p>
              </div>

              <div>
                <span className="opacity-50">Location</span>
                <p className="font-medium">Sri Lanka</p>
              </div>

              <div>
                <span className="opacity-50">Focus</span>
                <p className="font-medium">
                  Software development • AI • Research
                </p>
              </div>
            </div>

            {/* Status */}
            <p className="text-xs uppercase tracking-widest text-primary mt-6">
              Available for work
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-30">
            © 2026 Saiyiram • CS Portfolio
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              Back-End System Architecture
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
              ML & AI Research
            </span>
          </div>

          <button
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group"
            onClick={scrollToTop}
          >
            Back to top
            <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
