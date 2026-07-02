import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const socials = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ajaykumar1402/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    accent: "#0077b5",
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Ajaykumar1402-Ai',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    accent: "#f0f0f0",
  },
  {
    label: 'Portfolio',
    url: 'https://ajaykumar1402-ai.github.io/portfolio-/',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    accent: "#a78bfa",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ajaykumar348448@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-10 w-full py-32 overflow-hidden border-t border-border" ref={ref}>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/5 animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-accent2/4 animate-rotate-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accentGlow/5 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10" ref={ref}>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
          <span className="font-space text-[10px] tracking-[0.3em] text-accent uppercase">Available for opportunities</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-syne text-gradient-primary leading-[0.95]"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Let's build<br />
          <span className="text-gradient-accent">something great</span>
        </motion.h2>

        <motion.p
          className="text-textSecondary text-lg max-w-lg mx-auto mb-14 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Open to internships, collaborations, and conversations about AI that makes a real difference.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          className="flex flex-col items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center gap-4 p-6 rounded-2xl border border-border hover:border-accent/40 bg-surface2/40 backdrop-blur-xl transition-all duration-400 hover:bg-accent/5"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center flex-shrink-0 shadow-glow-sm">
              <svg className="w-4 h-4 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="font-space text-[9px] tracking-widest text-textMuted uppercase mb-0.5">Email</div>
              <div className="font-syne text-xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                ajaykumar348448@gmail.com
              </div>
            </div>
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="copied"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="ml-auto flex items-center gap-1.5 text-green-400 font-space text-[9px] tracking-widest uppercase"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  className="ml-auto text-textMuted group-hover:text-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <div className="font-space text-sm tracking-widest text-textMuted">
            +91 7904332133 · Tiruppur, Tamil Nadu
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {socials.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3.5 border border-border hover:border-white/20 bg-surface2/40 backdrop-blur-xl rounded-xl text-textSecondary hover:text-textPrimary transition-all duration-300"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="transition-colors group-hover:text-white" style={{ color: link.accent }}>
                {link.icon}
              </span>
              <span className="font-space text-[10px] tracking-widest uppercase">{link.label}</span>
              <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
