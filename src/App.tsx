import React, { useState, useEffect, useRef } from 'react';
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
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <Loader />
      <Cursor />

      {/* ─── Background Layer ─── */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background overflow-hidden">
        {/* Ambient gradient orbs — static, no animation */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accentGlow/8 blur-[130px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-accent2/6 blur-[110px]" />

        {/* Fine grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]" />
      </div>

      <main className="relative z-10 w-full min-h-screen text-textPrimary">

        {/* ─── Navigation ─── */}
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            navScrolled
              ? 'py-3 glass-strong border-b border-border shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'py-5 bg-transparent border-b border-transparent'
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center shadow-glow-sm">
                <span className="font-space text-background text-[10px] font-bold">AK</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-syne font-bold text-sm text-textPrimary leading-none tracking-tight">Ajaykumar K</span>
                <span className="font-space text-[9px] text-accent tracking-widest uppercase leading-none mt-0.5">AI · ML · Builder</span>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 font-space text-[10px] tracking-widest uppercase text-textSecondary hover:text-accent transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-md bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                </a>
              ))}
              <a
                href="/Ajaykumar_k_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-4 px-5 py-2.5 bg-accent/10 border border-accent/30 hover:bg-accent hover:text-background text-accent font-space text-[10px] tracking-widest uppercase transition-all duration-300 clip-corner-both"
              >
                Resume ↗
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 z-[101]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[1.5px] bg-accent transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-4 h-[1.5px] bg-accent/60 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 w-6' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-accent transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden absolute top-full left-0 right-0 glass-strong border-b border-border p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-space text-xs tracking-widest uppercase text-textSecondary hover:text-accent transition-colors py-2 border-b border-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/Ajaykumar_k_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 px-5 py-3 text-center bg-accent/10 border border-accent/30 text-accent font-space text-[10px] tracking-widest uppercase"
                >
                  Download Resume
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* ─── Hero Section ─── */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 max-w-7xl mx-auto relative"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

            {/* Left: Text Content */}
            <motion.div
              className="flex-1 flex flex-col gap-7"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.8, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2.5 w-fit px-4 py-2 rounded-full border border-accent/20 bg-accent/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.9 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className="font-space text-[10px] tracking-widest text-accent uppercase">Open to Opportunities</span>
              </motion.div>

              {/* Eyebrow */}
              <div className="flex items-center gap-3 font-space text-[10px] tracking-[0.3em] text-textMuted uppercase">
                <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" />
                AI &amp; ML Engineer · B.E. CSE
              </div>

              {/* Main Heading */}
              <h1 className="font-extrabold leading-[0.92] tracking-tight font-syne whitespace-nowrap text-[clamp(2.4rem,6.5vw,5.5rem)]">
                <span className="text-gradient-primary">Ajaykumar K</span>
              </h1>

              {/* Quote Block */}
              <div className="flex flex-col gap-3 max-w-lg border-l-2 border-accent/30 pl-5 py-1">
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base text-textPrimary/90 italic leading-relaxed font-light">
                    "Dream is not that which you see while sleeping — it is something that does not let you sleep."
                  </p>
                  <span className="font-space text-[9px] tracking-widest text-accent/60 uppercase">— Dr. APJ Abdul Kalam</span>
                </div>

                <p className="text-sm text-textSecondary leading-relaxed font-light">
                  That restlessness lives in every project built and every problem chased.
                </p>
                <p className="text-sm text-textSecondary leading-relaxed font-light">
                  Dreams don't wait for morning — neither does the work.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <motion.a
                  href="/Ajaykumar_k_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-8 py-4 overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent2 clip-corner-both" />
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity clip-corner-both" />
                  <span className="relative z-10 font-space text-[11px] font-bold tracking-widest uppercase text-background">
                    View Resume ↗
                  </span>
                </motion.a>
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 border border-border hover:border-accent/50 transition-all duration-300 clip-corner-both overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors clip-corner-both" />
                  <span className="relative z-10 font-space text-[11px] font-bold tracking-widest uppercase text-textSecondary group-hover:text-accent transition-colors">
                    See My Work
                  </span>
                </motion.a>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-4 border-t border-border mt-2">
                {[
                  { num: '8.71', label: 'CGPA' },
                  { num: '3+', label: 'Projects' },
                  { num: '5+', label: 'Certifications' },
                  { num: '2', label: 'Research Papers' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <span className="text-2xl font-extrabold text-gradient-cool font-syne">{stat.num}</span>
                    <span className="font-space text-[9px] tracking-widest text-textMuted uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              className="flex-1 flex justify-center items-center relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative w-72 h-72 md:w-[360px] md:h-[360px]">
                {/* Static outer ring */}
                <div className="absolute inset-0 rounded-full border border-accent/10" />

                {/* Single slow-spinning ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-accent2/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  {[45, 225].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-1.5 h-1.5 rounded-full bg-accent2/50"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${deg}deg) translateY(-112px) translateX(-3px)`,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Avatar Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 md:w-52 md:h-52">
                    {/* Glow background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accentGlow/30 to-accent2/20 blur-2xl" />
                    {/* Avatar circle */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-surface2 via-surface3 to-surface border border-accent/20 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.2),inset_0_0_40px_rgba(124,58,237,0.1)]">
                      {/* Monogram */}
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-syne text-5xl font-extrabold text-gradient-primary leading-none">AK</span>
                        <span className="font-space text-[8px] tracking-[0.4em] text-accent/60 uppercase">AI · ML</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CGPA card */}
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-surface2/90 border border-border p-4 clip-corner-both z-20">
                  <div className="font-space text-[8px] tracking-widest text-accent uppercase mb-1">Academic Score</div>
                  <div className="text-2xl font-extrabold text-gradient-cool font-syne">8.71</div>
                  <div className="font-space text-[9px] text-textMuted mt-0.5">CGPA · B.E. CSE (AI&ML)</div>
                </div>

                {/* Stack card */}
                <div className="absolute -top-4 -left-4 md:-left-8 bg-surface2/90 border border-border p-3 clip-corner-both z-20">
                  <div className="font-space text-[8px] tracking-widest text-accent2 uppercase mb-1">Latest Stack</div>
                  <div className="flex gap-1.5 flex-wrap max-w-[100px]">
                    {['TF', 'CV', 'NLP', 'PY'].map((tech) => (
                      <span key={tech} className="text-[9px] font-space text-textSecondary px-1.5 py-0.5 bg-surface3 border border-border rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="font-space text-[9px] tracking-widest text-textMuted uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent" />
          </motion.div>
        </motion.section>

        <Marquee />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <CertsSection />
        <ContactSection />

        {/* ─── Footer ─── */}
        <footer className="w-full py-8 border-t border-border glass flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
              <span className="font-space text-background text-[7px] font-bold">AK</span>
            </div>
            <span className="font-space text-[10px] tracking-widest text-textMuted uppercase">© 2026 Ajaykumar K</span>
          </div>
          <span className="font-space text-[10px] tracking-widest text-textMuted uppercase text-center">
            K.S. Rangasamy College of Technology · B.E. CSE (AI&ML)
          </span>
          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ajaykumar1402/' },
              { label: 'GitHub', url: 'https://github.com/Ajaykumar1402-Ai' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="font-space text-[10px] tracking-widest text-textMuted hover:text-accent transition-colors uppercase hover-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}

export default App;
