import React from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { CertsSection } from './components/CertsSection';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Cursor />
      
      {/* Ultra-Premium Minimalist Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* Extreme subtle ethereal glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full opacity-50 mix-blend-screen" />
      </div>

      <main className="relative z-10 w-full min-h-screen text-textPrimary">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-5 flex items-center justify-between bg-background/60 backdrop-blur-xl border-b border-border">
          <div className="font-space text-sm tracking-widest text-accent font-bold uppercase">AK // AI&ML</div>
          <div className="hidden md:flex gap-8 font-space text-xs tracking-widest uppercase text-textSecondary">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-accent transition-colors">Certs</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-2 font-space text-xs tracking-[0.25em] text-accent uppercase">
                <div className="w-6 h-px bg-accent" />
                AI & ML Engineer
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight bg-gradient-to-br from-white via-accent to-accent2 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">
                Ajay<br/>kumar K
              </h1>
              <p className="text-lg md:text-xl text-textSecondary leading-relaxed max-w-xl font-light">
                Building intelligent systems — from CNN-based crop disease classifiers to real-time voice agents. First-year B.E. student with an 8.71 CGPA and a passion for AI that actually works.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a 
                  href="/Ajaykumar_k_resume.pdf" 
                  className="px-8 py-4 bg-accent text-background font-space text-xs font-bold tracking-widest uppercase relative group overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                >
                  <span className="relative z-10">See My Resume</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border border-border text-textPrimary hover:border-accent hover:text-accent transition-colors font-space text-xs font-bold tracking-widest uppercase"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center items-center relative">
              {/* Holographic Avatar Placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-accent/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-accent2/40 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-surface2 to-surface border-2 border-accent shadow-[0_0_60px_rgba(0,212,255,0.2),inset_0_0_40px_rgba(0,212,255,0.1)] flex items-center justify-center relative z-10">
                  <span className="text-6xl font-extrabold tracking-tighter bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent">AK</span>
                </div>
                
                {/* Floating 3D Card Placeholder */}
                <div className="absolute -bottom-6 -right-6 md:-right-10 bg-surface/90 backdrop-blur-xl border border-border p-5 animate-[bounce_6s_ease-in-out_infinite] z-20"
                     style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                  <div className="font-space text-[9px] tracking-widest text-accent uppercase mb-2">Academic Score</div>
                  <div className="text-3xl font-extrabold text-textPrimary">8.71</div>
                  <div className="text-[11px] text-textMuted mt-1">CGPA · B.E. CSE (AI&ML)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <CertsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="w-full py-8 border-t border-border bg-background/80 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 font-space text-[10px] tracking-[0.2em] text-textMuted uppercase relative z-10">
          <span>© 2026 Ajaykumar K</span>
          <span>K.S. Rangasamy College of Technology · B.E. CSE (AI&ML)</span>
        </footer>
      </main>
    </SmoothScroll>
  );
}

export default App;
