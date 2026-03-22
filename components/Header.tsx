import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-50 px-6 py-1 transition-all duration-300 ${
    isScrolled
      ? "bg-off-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
      : "bg-transparent border-transparent"
  }`;

  return (
    <header className={navClass}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-2xl font-bold tracking-tight">
            S<span className="text-primary">.</span>
          </span>
          <div className="h-4 w-[1px] bg-slate-200 hidden md:block"></div>
          <span className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
            Saiyiram
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
        <button
          className="bg-slate-custom text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-slate-200 active:scale-95"
          onClick={() => alert("Will update soon")}
        >
          Resume
        </button>
      </nav>
    </header>
  );
};

export default Header;
