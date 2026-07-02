import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certs = [
  {
    issuer: "Deloitte · Forage",
    name: "Data Analytics Job Simulation",
    icon: "📊",
    accent: "#a78bfa",
    year: "2026",
  },
  {
    issuer: "Netacad · Cisco",
    name: "Python Essentials",
    icon: "🐍",
    accent: "#38bdf8",
    year: "2025",
  },
  {
    issuer: "IBM",
    name: "Artificial Intelligence Fundamentals",
    icon: "🤖",
    accent: "#f472b6",
    year: "2025",
  },
  {
    issuer: "Infosys Springboard",
    name: "C Programming",
    icon: "💻",
    accent: "#4ade80",
    year: "2025",
  },
  {
    issuer: "NASSCOM",
    name: "Digital Edge",
    icon: "🌐",
    accent: "#fb923c",
    year: "2025",
  },
];

export const CertsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="certifications" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" ref={ref}>

      {/* Section label */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-syne text-gradient-primary"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Credentials
      </motion.h2>

      <motion.p
        className="text-textSecondary text-base max-w-xl mb-16 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Certified by globally recognized institutions in AI, data science, and programming.
      </motion.p>

      {/* Cert cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card-shimmer group relative bg-surface2/50 backdrop-blur-xl border border-border rounded-2xl p-7 overflow-hidden cursor-default"
          >
            {/* Background corner glow */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2"
              style={{ background: cert.accent }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 border"
              style={{ borderColor: `${cert.accent}20`, background: `${cert.accent}10` }}
            >
              {cert.icon}
            </div>

            {/* Issuer + year */}
            <div className="flex items-center justify-between mb-2">
              <span
                className="font-space text-[9px] tracking-widest uppercase px-2 py-1 rounded-full border"
                style={{ color: cert.accent, borderColor: `${cert.accent}30`, background: `${cert.accent}08` }}
              >
                {cert.issuer}
              </span>
              <span className="font-space text-[9px] tracking-widest text-textMuted">{cert.year}</span>
            </div>

            {/* Cert name */}
            <h3 className="text-lg font-bold text-textPrimary font-syne leading-snug mt-3">
              {cert.name}
            </h3>

            {/* Verified badge */}
            <div className="flex items-center gap-1.5 mt-4">
              <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: cert.accent }}>
                <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-space text-[9px] tracking-widest text-textMuted uppercase">Verified Certificate</span>
            </div>

            {/* Bottom gradient bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: `linear-gradient(to right, ${cert.accent}, transparent)` }}
            />
          </motion.div>
        ))}

        {/* "More coming" card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="relative bg-surface/30 border border-border border-dashed rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xl">+</div>
          <div className="font-syne font-semibold text-textSecondary text-sm">More coming</div>
          <div className="font-space text-[9px] tracking-widest text-textMuted uppercase">Actively learning &amp; certifying</div>
        </motion.div>
      </div>
    </section>
  );
};
