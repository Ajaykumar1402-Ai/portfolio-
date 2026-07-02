import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { issuer: "Deloitte · Forage", name: "Data Analytics Job Simulation" },
  { issuer: "Netacad · Cisco", name: "Python Essentials" },
  { issuer: "IBM", name: "Artificial Intelligence" },
  { issuer: "Infosys Springboard", name: "C Programming" },
  { issuer: "NASSCOM", name: "Digital Edge" }
];

export const CertsSection = () => {
  return (
    <section id="certifications" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="flex items-center gap-4 font-space text-xs tracking-widest text-accent uppercase mb-8">
        Certifications
        <div className="flex-1 h-px bg-border" />
      </div>
      
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-24">
        Credentials
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative bg-surface/40 backdrop-blur-md border border-border p-8 overflow-hidden cursor-default"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="font-space text-[10px] tracking-widest text-accent uppercase mb-4">
                {cert.issuer}
              </div>
              <h3 className="text-xl font-bold text-textPrimary leading-tight">
                {cert.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
