import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds cinematic load
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex items-center justify-center w-24 h-24">
              {/* Outer spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-accent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
              {/* Inner pulsing circle */}
              <motion.div
                className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/50 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <span className="font-space text-accent font-bold text-lg tracking-tighter">AK</span>
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <motion.span 
                className="font-space text-accent text-xs tracking-[0.3em] uppercase"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "steps(2)" }}
              >
                Initializing AI Core...
              </motion.span>
              <div className="w-48 h-[2px] bg-surface2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent2"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
