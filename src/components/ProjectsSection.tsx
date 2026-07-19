import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  codeLink: string;
  demoLink: string;
  image: string;
  accent: string;
}

const projects: Project[] = [
  {
    num: "01",
    title: "Collabent — AI-Powered Collaboration Platform",
    desc: "Collabent is an AI-powered collaboration platform that connects innovators, developers, designers, and entrepreneurs to transform ideas into real-world projects. The platform uses intelligent matching to help users discover teammates, manage project collaboration, and build startups efficiently.",
    tags: ["React", "Node.js", "AI Matching", "Python"],
    codeLink: "https://github.com/Ajaykumar1402-Ai",
    demoLink: "#",
    image: `${import.meta.env.BASE_URL}proj_collabent.png`,
    accent: "#a78bfa",
  },
  {
    num: "02",
    title: "Veera — Real-Time AI Voice Assistant",
    desc: "Veera is an AI-powered voice assistant deployed on mobile via LiveKit for real-time, low-latency voice streaming. Integrates NLP modules for intent recognition, enabling context-aware responses across multiple use cases.",
    tags: ["LiveKit", "NLP", "Python", "Mobile"],
    codeLink: "https://github.com/Ajaykumar1402-Ai",
    demoLink: "#",
    image: `${import.meta.env.BASE_URL}proj_voice_assistant.png`,
    accent: "#38bdf8",
  },
  {
    num: "03",
    title: "TB Vision Pro — AI Tuberculosis Detection System",
    desc: "A multimodal AI system that combines chest X-ray image analysis with clinical symptom data to detect Tuberculosis with clinical-grade accuracy. Built to assist early screening by fusing computer vision and structured health data into a single prediction pipeline.",
    tags: ["Python", "PyTorch", "CNN", "FastAPI", "React"],
    codeLink: "https://github.com/Ajaykumar1402-Ai/Multimodal-TB-Detection-System",
    demoLink: "https://multimodal-tb-detection-system.vercel.app/",
    image: `${import.meta.env.BASE_URL}proj_tb_vision.png`,
    accent: "#f472b6",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); setHovered(false); };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur-xl cursor-default"
      whileHover={{ scale: 1.01 }}
    >
      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ boxShadow: `0 0 40px ${project.accent}20, inset 0 0 40px ${project.accent}08, 0 0 0 1px ${project.accent}30` }}
      />

      {/* Background image parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
        <motion.div
          className="w-full h-full bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
          animate={{ scale: hovered ? 1.15 : 1.08 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Strong dark overlay so text is always readable */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ background: `radial-gradient(ellipse at 80% 50%, ${project.accent}10 0%, transparent 70%)`, opacity: hovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 p-5 sm:p-7 md:p-12`}>

        {/* Image panel */}
        <div style={{ transform: "translateZ(20px)" }} className="w-full md:w-[45%] flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/5 shadow-2xl relative group/img">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
            />
            {/* Color overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-color"
              style={{ background: `linear-gradient(135deg, ${project.accent}30, transparent)` }}
            />
            {/* Number badge */}
            <div className="absolute top-4 left-4 font-space text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 bg-background/60" style={{ color: project.accent }}>
              Project {project.num}
            </div>
          </div>
        </div>

        {/* Text panel */}
        <div style={{ transform: "translateZ(40px)" }} className="w-full md:w-[55%] flex flex-col justify-center gap-4 md:gap-5">
          {/* Tag line */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-px" style={{ background: project.accent }} />
            <span className="font-space text-[9px] tracking-[0.3em] uppercase" style={{ color: project.accent }}>
              2026 · AI Project
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-extrabold text-textPrimary leading-tight font-syne">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-textSecondary leading-relaxed">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="font-space text-[9px] tracking-widest px-3 py-1.5 border rounded-full uppercase transition-all duration-300"
                style={{
                  borderColor: `${project.accent}30`,
                  color: `${project.accent}cc`,
                  background: `${project.accent}08`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Links */}
          <div className="flex gap-4 pt-2">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 border border-border hover:border-white/20 text-textSecondary hover:text-textPrimary transition-all duration-300 text-xs font-space tracking-widest uppercase rounded-lg"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Code
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 transition-all duration-300 text-xs font-space tracking-widest uppercase rounded-lg border"
              style={{
                borderColor: `${project.accent}40`,
                color: project.accent,
                background: `${project.accent}10`,
              }}
            >
              <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${project.accent}15, transparent 70%)` }} />
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" style={{ perspective: '1200px' }}>
      <div ref={ref}>
        {/* Section label */}
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-syne text-gradient-primary"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Things I've built
        </motion.h2>

        <motion.p
          className="text-textSecondary text-base max-w-xl mb-20 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-world AI systems designed to solve actual problems — from collaboration to healthcare.
        </motion.p>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={i} project={proj} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
