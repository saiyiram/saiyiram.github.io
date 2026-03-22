import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-off-white text-slate-custom font-sans">
      <FloatingShapes />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;