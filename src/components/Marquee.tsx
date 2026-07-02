import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "TensorFlow", "OpenCV", "Deloitte", "IBM", "Forage", 
  "NASSCOM", "Infosys", "VIT Vellore", "Sri Eshwar College", 
  "ChromaDB", "Pinecone", "LiveKit", "NLP"
];

export const Marquee = () => {
  return (
    <div className="w-full py-8 border-y border-border bg-surface/40 backdrop-blur-md overflow-hidden relative z-10 flex">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* Duplicate items to create infinite effect */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-8 font-space text-xs tracking-widest text-textMuted uppercase">
            <span className="w-1 h-1 rounded-full bg-accent" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
