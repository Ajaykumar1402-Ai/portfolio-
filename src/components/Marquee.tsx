import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { text: "TensorFlow", type: "tech" },
  { text: "OpenCV", type: "tech" },
  { text: "Deloitte", type: "org" },
  { text: "IBM", type: "org" },
  { text: "Forage", type: "org" },
  { text: "NASSCOM", type: "org" },
  { text: "Infosys", type: "org" },
  { text: "VIT Vellore", type: "place" },
  { text: "Sri Eshwar College", type: "place" },
  { text: "ChromaDB", type: "tech" },
  { text: "Pinecone", type: "tech" },
  { text: "LiveKit", type: "tech" },
  { text: "NLP", type: "tech" },
  { text: "AI · ML", type: "field" },
  { text: "Computer Vision", type: "field" },
];

const colorMap: Record<string, string> = {
  tech: "text-accent",
  org: "text-accent2",
  place: "text-accent3",
  field: "text-textSecondary",
};

export const Marquee = () => {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="w-full py-5 border-y border-border bg-surface/30 backdrop-blur-sm overflow-hidden relative z-10">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ ease: "linear", duration: 35, repeat: Infinity }}
      >
        {tripled.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6"
          >
            <span
              className={`text-[9px] font-space tracking-[0.3em] uppercase ${colorMap[item.type] || 'text-textMuted'} opacity-70`}
            >
              {item.text}
            </span>
            <span className="text-border/60 text-lg font-thin">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
