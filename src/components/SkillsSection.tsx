import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: "AI & Machine Learning",
    color: "#a78bfa",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "LangChain", "Whisper"],
  },
  {
    category: "Computer Vision",
    color: "#38bdf8",
    skills: ["OpenCV", "CNN", "Image Classification", "Real-Time Detection"],
  },
  {
    category: "Languages",
    color: "#f472b6",
    skills: ["Python", "C Programming", "HTML / CSS / JS"],
  },
  {
    category: "Data & Databases",
    color: "#4ade80",
    skills: ["MySQL", "ChromaDB", "Pinecone", "Pandas", "NumPy"],
  },
  {
    category: "Tools & DevOps",
    color: "#fb923c",
    skills: ["Git & GitHub", "FastAPI", "Docker", "LiveKit"],
  },
  {
    category: "Research & More",
    color: "#e879f9",
    skills: ["Research Writing", "Matplotlib", "GSAP", "Framer Motion"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" ref={ref}>

      {/* Section label */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-syne text-gradient-primary"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        What I work with
      </motion.h2>

      <motion.p
        className="text-textSecondary text-base max-w-xl mb-16 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Grouped by domain — each area reflects hands-on experience in real projects and research.
      </motion.p>

      {/* Category cards — masonry-like responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 + gi * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="group relative rounded-2xl border border-border bg-surface2/40 p-6 overflow-hidden hover:border-white/10 transition-colors duration-300"
          >
            {/* Subtle corner glow */}
            <div
              className="absolute top-0 right-0 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none -translate-y-1/2 translate-x-1/2"
              style={{ background: group.color }}
            />

            {/* Category header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ background: group.color, boxShadow: `0 0 8px ${group.color}80` }}
              />
              <span
                className="font-space text-[10px] tracking-widest uppercase font-bold"
                style={{ color: group.color }}
              >
                {group.category}
              </span>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + gi * 0.1 + si * 0.05 }}
                  className="font-syne text-xs font-medium px-3 py-1.5 rounded-lg border bg-background/40 text-textSecondary hover:text-textPrimary transition-colors duration-200 cursor-default"
                  style={{ borderColor: `${group.color}25` }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to right, transparent, ${group.color}60, transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
