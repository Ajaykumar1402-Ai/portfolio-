import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" ref={ref}>
      <div className="flex items-center gap-4 font-space text-xs tracking-widest text-accent uppercase mb-8">
        About me
        <div className="flex-1 h-px bg-border" />
      </div>
      
      <motion.h2 
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-16"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        Who I am
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div 
          className="flex flex-col gap-6 text-lg text-textSecondary leading-relaxed font-light"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
          }}
        >
          <p>
            I'm a first-year B.E. student specializing in AI & ML at K.S. Rangasamy College of Technology, Namakkal. I build systems that think — from detecting crop diseases in real time to voice agents that understand and respond naturally.
          </p>
          <p>
            My stack spans Python, TensorFlow, OpenCV, NLP, and vector databases like ChromaDB and Pinecone. I've presented research at VIT Vellore, Sri Eshwar, and Coimbatore Institute of Technology.
          </p>
          <p>
            I'm driven by one question: how can AI solve problems that actually matter in the real world?
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
          }}
        >
          {[
            { label: "CGPA", value: "8.71" },
            { label: "Projects", value: "3" },
            { label: "Certifications", value: "5" },
            { label: "Research Papers", value: "2" }
          ].map((stat, i) => (
            <div key={i} className="bg-surface/60 backdrop-blur-md border border-border p-8 text-center flex flex-col gap-2 relative group overflow-hidden"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-accent to-accent2 bg-clip-text text-transparent relative z-10">
                {stat.value}
              </div>
              <div className="font-space text-xs tracking-widest text-textMuted uppercase relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
