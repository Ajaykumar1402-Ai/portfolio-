import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const timelineData = [
  {
    type: "Education",
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    date: "2025 – 2029",
    location: "K.S. Rangasamy College of Technology, Namakkal",
    details: "CGPA: 8.69 / 10",
    icon: "🎓",
    accent: "#a78bfa",
  },
  {
    type: "Workshop",
    title: "AI in Water Resources Workshop",
    date: "2026",
    location: "Vellore Institute of Technology",
    details: "Explored AI-driven solutions for sustainable water resource management and conservation.",
    icon: "💧",
    accent: "#38bdf8",
  },
  {
    type: "Research Paper",
    title: "Smart Farming — AI Crop Disease Detection",
    date: "2026",
    location: "Sri Eshwar College of Technology",
    details: "Demonstrated CNN-based crop disease detection system achieving real-time accuracy for rural deployments.",
    icon: "🌱",
    accent: "#4ade80",
  },
  {
    type: "Research Paper",
    title: "AI Hallucination Analysis in LLMs",
    date: "2026",
    location: "Coimbatore Institute of Technology",
    details: "Analyzed failure modes and hallucination patterns in large language models with mitigation strategies.",
    icon: "🧠",
    accent: "#f472b6",
  },
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-32" ref={containerRef}>

      {/* Section label */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Journey
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-syne text-gradient-primary"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Experience &amp; Education
      </motion.h2>

      <motion.p
        className="text-textSecondary text-base max-w-xl mb-24 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A chronological story of my academic growth, research, and hands-on exploration of AI.
      </motion.p>

      <div className="relative">
        {/* Track line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        {/* Animated fill line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 w-[2px] origin-top -translate-x-1/2"
          style={{
            scaleY: lineScaleY,
            background: 'linear-gradient(to bottom, #a78bfa, #38bdf8, #f472b6)',
            boxShadow: '0 0 12px rgba(167,139,250,0.6)',
          }}
        />

        {/* Timeline items */}
        <div className="flex flex-col gap-12">
          {timelineData.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center gap-6">

                {/* Left spacer (desktop) */}
                {isLeft && <div className="hidden md:block md:w-[45%]" />}

                {/* Center node */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 bg-background z-10 flex items-center justify-center shadow-glow-sm"
                  style={{ borderColor: item.accent, boxShadow: `0 0 15px ${item.accent}60` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: item.accent }} />
                </div>

                {/* Card */}
                <motion.div
                  className={`card-shimmer group ml-12 md:ml-0 md:w-[45%] relative rounded-xl border border-border bg-surface2/50 backdrop-blur-xl p-6 overflow-hidden glow-border-hover`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4 }}
                >
                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"
                    style={{ background: item.accent }}
                  />

                  {/* Icon + type row */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{item.icon}</span>
                    <span
                      className="font-space text-[9px] tracking-widest uppercase px-2 py-1 rounded-full border"
                      style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}10` }}
                    >
                      {item.type}
                    </span>
                    <span className="font-space text-[9px] tracking-widest text-textMuted ml-auto">{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-textPrimary mb-1 font-syne leading-snug">{item.title}</h3>
                  <p className="text-sm text-accent/70 font-medium mb-2">{item.location}</p>
                  <p className="text-sm text-textMuted leading-relaxed">{item.details}</p>

                  {/* Bottom gradient bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(to right, transparent, ${item.accent}, transparent)` }}
                  />
                </motion.div>

                {/* Right spacer (desktop) */}
                {!isLeft && <div className="hidden md:block md:w-[45%]" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
