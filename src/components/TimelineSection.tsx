import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  {
    type: "Education",
    title: "B.E. in Computer Science & Engineering (AI & ML)",
    date: "2025 – 2029",
    location: "K.S. Rangasamy College of Technology, Namakkal",
    details: "CGPA: 8.71 / 10"
  },
  {
    type: "Activity",
    title: "AI in Water Resources Workshop",
    date: "2026",
    location: "Vellore Institute of Technology",
    details: "Explored AI-driven solutions for resource management."
  },
  {
    type: "Research",
    title: "Paper: Smart Farming",
    date: "2026",
    location: "Sri Eshwar College of Technology",
    details: "Demonstrated CNN-based crop disease detection system."
  },
  {
    type: "Research",
    title: "Paper: AI Hallucination",
    date: "2026",
    location: "Coimbatore Institute of Technology",
    details: "Analyzed failure modes in large language models."
  }
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-32" ref={containerRef}>
      <div className="flex items-center gap-4 font-space text-xs tracking-widest text-accent uppercase mb-8">
        Journey
        <div className="flex-1 h-px bg-border" />
      </div>
      
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-24 text-center">
        Experience & Education
      </h2>

      <div className="relative pl-8 md:pl-0">
        {/* Glow Line Background */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        
        {/* Animated Glow Line */}
        <motion.div 
          className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-accent to-accent2 -translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,0.8)]"
          style={{ height: lineHeight }}
        />

        {timelineData.map((item, i) => (
          <div key={i} className={`relative flex flex-col md:flex-row items-start md:justify-between w-full mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Center Node */}
            <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            
            <motion.div 
              className="md:w-[45%] bg-surface/50 backdrop-blur-md border border-border p-6 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="font-space text-[10px] tracking-widest text-accent uppercase mb-2">
                {item.type} // {item.date}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-sm text-textSecondary font-medium mb-1">{item.location}</p>
              <p className="text-sm text-textMuted">{item.details}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
