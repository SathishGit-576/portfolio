import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 selection:text-text-primary">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        {/* Background Blobs for Visual Interest */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-float" />
          <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <Hero personalInfo={portfolioData.personalInfo} />
        <About about={portfolioData.personalInfo.about} />
        <Experience experience={portfolioData.experience} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
