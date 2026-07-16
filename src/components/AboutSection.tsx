import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const stats = [
  { label: "CGPA", value: "8.69", icon: "🎓", desc: "B.E. CSE (AI&ML)" },
  { label: "Projects", value: "3+", icon: "⚡", desc: "Live & Research" },
  { label: "Certifications", value: "5+", icon: "🏆", desc: "Industry Leaders" },
  { label: "Research Papers", value: "2", icon: "📄", desc: "Presented at Conferences" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32" ref={ref}>

      {/* Section label */}
      <motion.div
        className="section-label"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left – Text */}
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold tracking-tight font-syne text-gradient-primary leading-[0.95]"
            variants={itemVariants}
          >
            Who I am
          </motion.h2>

          <motion.div className="flex flex-col gap-5" variants={containerVariants}>
            {[
              "I'm a B.E. student specializing in AI & ML at K.S. Rangasamy College of Technology, Namakkal. I build systems that think — from AI-powered collaboration platforms like Collabent to intelligent voice assistants like Veera that understand and respond naturally.",
              "My stack spans Python, TensorFlow, OpenCV, NLP, and vector databases like ChromaDB and Pinecone. I've presented research at VIT Vellore, Sri Eshwar, and Coimbatore Institute of Technology.",
              "I'm driven by one question: how can AI solve problems that actually matter in the real world?",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-base md:text-lg text-textSecondary leading-relaxed font-light"
                variants={itemVariants}
              >
                {i === 2 ? (
                  <span className="italic text-textPrimary/80">"{text}"</span>
                ) : text}
              </motion.p>
            ))}
          </motion.div>

          {/* Tags row */}
          <motion.div className="flex flex-wrap gap-2 pt-2" variants={itemVariants}>
            {["Python", "TensorFlow", "OpenCV", "NLP", "ChromaDB", "Pinecone", "LiveKit"].map((tech) => (
              <span key={tech} className="font-space text-[9px] tracking-widest px-3 py-1.5 border border-accent/20 text-accent/70 rounded-full bg-accent/5 uppercase hover:border-accent/50 hover:text-accent transition-all duration-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <a
              href="mailto:ajaykumar348448@gmail.com"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-space text-xs tracking-widest text-accent uppercase hover-underline">
                Get in touch →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right – Stats grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="card-shimmer group relative bg-surface2/60 backdrop-blur-xl border border-border rounded-2xl p-7 flex flex-col gap-3 overflow-hidden glow-border-hover"
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-accent/10 blur-xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-2xl">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient-cool font-syne leading-none">
                {stat.value}
              </div>
              <div>
                <div className="font-syne font-semibold text-textPrimary text-sm">{stat.label}</div>
                <div className="font-space text-[9px] tracking-widest text-textMuted uppercase mt-0.5">{stat.desc}</div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}

          {/* Decorative wide card */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 relative bg-gradient-to-br from-accent/8 to-accent2/5 border border-accent/10 rounded-2xl p-6 flex items-center gap-5 overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center flex-shrink-0 shadow-glow-sm">
              <span className="font-space text-background text-[10px] font-bold">KSR</span>
            </div>
            <div>
              <div className="font-syne font-bold text-textPrimary text-sm">K.S. Rangasamy College of Technology</div>
              <div className="font-space text-[9px] tracking-widest text-textMuted uppercase mt-0.5">Namakkal · B.E. CSE (AI & ML) · 2025–2029</div>
            </div>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 font-space text-[9px] tracking-widest text-accent uppercase opacity-60">
              8.69 CGPA
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
