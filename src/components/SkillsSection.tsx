import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  'Python', 'TensorFlow', 'OpenCV', 'NLP', 'C Programming', 
  'ChromaDB', 'MySQL', 'HTML/CSS/JS', 'Git & GitHub', 'LiveKit'
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Pre-calculate positions in a circular orbit to guarantee no overlaps
  const nodePositions = useMemo(() => {
    return skills.map((skill, i) => {
      const angle = (i / skills.length) * (2 * Math.PI);
      const radius = 220; // Radius of the circle
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { skill, x, y };
    });
  }, []);

  return (
    <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" ref={ref}>
      <div className="flex items-center gap-4 font-space text-xs tracking-widest text-accent uppercase mb-8">
        Technical Skills
        <div className="flex-1 h-px bg-border" />
      </div>
      
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-24">
        What I work with
      </h2>

      <div className="relative w-full h-[700px] flex items-center justify-center bg-surface/10 rounded-[2.5rem] border border-border overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Central Core */}
        <div className="absolute w-24 h-24 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)] z-0">
          <div className="w-16 h-16 rounded-full border border-border animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-space text-accent text-[10px] tracking-widest uppercase text-center leading-tight">AI<br/>Core</span>
          </div>
        </div>

        {/* Connecting Lines & Skill Nodes */}
        {nodePositions.map(({ skill, x, y }, i) => (
          <React.Fragment key={i}>
            {/* SVG Line */}
            <svg className="absolute w-[800px] h-[800px] pointer-events-none -left-[400px] -top-[400px] z-0 opacity-10" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <motion.line 
                x1="400" 
                y1="400" 
                x2={400 + x} 
                y2={400 + y} 
                stroke="#fff" 
                strokeWidth="1" 
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
              />
            </svg>

            <motion.div
              className="absolute flex flex-col items-center justify-center z-10 cursor-default"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={isInView ? { opacity: 1, scale: 1, x, y } : {}}
              transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 60, damping: 15 }}
              style={{ left: '50%', top: '50%' }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
            >
              {/* Node Button */}
              <div className="px-6 py-3 bg-surface2/90 backdrop-blur-md border border-border rounded-full hover:border-accent hover:bg-white hover:text-black transition-all shadow-xl group flex items-center gap-3 transform -translate-x-1/2 -translate-y-1/2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-black transition-colors" />
                <span className="font-space text-xs tracking-wider font-medium text-textPrimary group-hover:text-black transition-colors whitespace-nowrap">
                  {skill}
                </span>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
