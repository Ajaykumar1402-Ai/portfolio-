import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOAD_MESSAGES = [
  'Initializing AI Core...',
  'Loading neural networks...',
  'Calibrating models...',
  'Ready.',
];

export const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 2400;
    const interval = 16;
    const steps = totalDuration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const pct = Math.min(100, Math.round((step / steps) * 100));
      setProgress(pct);

      // Cycle messages
      const msgStep = Math.floor((pct / 100) * (LOAD_MESSAGES.length - 1));
      setMsgIndex(Math.min(msgStep, LOAD_MESSAGES.length - 1));

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accentGlow/10 blur-[120px]" />

          {/* Content */}
          <motion.div
            className="flex flex-col items-center gap-10 relative z-10"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Orbital rings + monogram */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Ring 1 */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-glow-sm -translate-y-1" />
              </motion.div>

              {/* Ring 2 */}
              <motion.div
                className="absolute inset-3 rounded-full border border-accent2/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent2 translate-y-1" />
              </motion.div>

              {/* Core */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-surface2 to-surface border border-accent/30 flex items-center justify-center shadow-glow-md">
                <span className="font-space text-lg font-bold text-gradient-cool">AK</span>
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ boxShadow: '0 0 20px rgba(167,139,250,0.5)' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-4">
              {/* Message */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={msgIndex}
                  className="font-space text-xs tracking-[0.3em] text-accent uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {LOAD_MESSAGES[msgIndex]}
                </motion.span>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="w-56 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>

              {/* Percentage */}
              <span className="font-space text-[10px] text-textMuted tabular-nums">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </motion.div>

          {/* Corner markers */}
          {[
            'top-6 left-6 border-t border-l',
            'top-6 right-6 border-t border-r',
            'bottom-6 left-6 border-b border-l',
            'bottom-6 right-6 border-b border-r',
          ].map((cls, i) => (
            <div key={i} className={`absolute w-6 h-6 border-accent/20 ${cls}`} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
