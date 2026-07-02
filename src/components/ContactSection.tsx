import React from 'react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 w-full py-32 overflow-hidden border-t border-border bg-surface/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 font-space text-[10px] tracking-[0.3em] text-accent uppercase mb-6 px-4 py-2 border border-accent/30 rounded-full bg-accent/5"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          System Active
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Let's build something
        </h2>
        
        <p className="text-lg text-textSecondary max-w-lg mx-auto mb-16 font-light">
          Open to internships, collaborations, and conversations about AI that matters.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a href="mailto:ajaykumar348448@gmail.com" className="group relative inline-block">
            <span className="font-space text-xl md:text-3xl text-accent font-bold tracking-wider group-hover:text-white transition-colors relative z-10">
              ajaykumar348448@gmail.com
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent group-hover:bg-white transition-colors" />
            <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity z-0" />
          </a>

          <div className="font-space text-sm tracking-widest text-textMuted uppercase mt-4">
            +91 7904332133 · Tiruppur, Tamil Nadu
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-24">
          {[
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ajaykumar1402/' },
            { label: 'GitHub', url: 'https://github.com/Ajaykumar1402-Ai' },
            { label: 'Portfolio', url: 'https://ajaykumar1402-ai.github.io/portfolio-/' }
          ].map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-8 py-4 border border-border text-xs font-space tracking-widest uppercase text-textPrimary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all relative group overflow-hidden"
              style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full group-hover:animate-[slideRight_1.5s_linear_infinite]" />
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Futuristic Background Grids & Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border/50 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-border/30 animate-[spin_50s_linear_infinite_reverse] pointer-events-none" />
    </section>
  );
};
