import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const isTouchDevice = () => {
  if (typeof window === 'undefined') return true;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const Cursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(true); // default true to avoid flash
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [hoverLabel, setHoverLabel] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);

  // ── Raw mouse position ──
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // ── Dot — near-instant ──
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 32, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 32, mass: 0.2 });

  // ── Ring — slight lag ──
  const ringX = useSpring(cursorX, { stiffness: 380, damping: 26, mass: 0.3 });
  const ringY = useSpring(cursorY, { stiffness: 380, damping: 26, mass: 0.3 });

  // ── Trail — 3 comet particles (reduced from 6 for better performance) ──
  const t1x = useSpring(cursorX, { stiffness: 280, damping: 30, mass: 0.25 });
  const t1y = useSpring(cursorY, { stiffness: 280, damping: 30, mass: 0.25 });
  const t2x = useSpring(cursorX, { stiffness: 200, damping: 32, mass: 0.35 });
  const t2y = useSpring(cursorY, { stiffness: 200, damping: 32, mass: 0.35 });
  const t3x = useSpring(cursorX, { stiffness: 120, damping: 34, mass: 0.45 });
  const t3y = useSpring(cursorY, { stiffness: 120, damping: 34, mass: 0.45 });

  const trails = reducedMotion ? [] : [
    { x: t1x, y: t1y, size: 5, color: '#a78bfa', opacity: 0.28, blur: 0 },
    { x: t2x, y: t2y, size: 4, color: '#38bdf8', opacity: 0.18, blur: 1 },
    { x: t3x, y: t3y, size: 3, color: '#a78bfa', opacity: 0.10, blur: 2 },
  ];

  useEffect(() => {
    setIsTouch(isTouchDevice());
    setReducedMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (isTouch) return; // Don't attach listeners on touch devices

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsHidden(false);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement | null;
      const btn = target.closest('button');
      setIsHovered(!!(link || btn));
      if (link) {
        const raw = (link.textContent || '').trim().replace(/\s+/g, ' ');
        setHoverLabel(raw.slice(0, 7).toUpperCase() || 'OPEN');
      } else if (btn) {
        setHoverLabel('CLICK');
      } else {
        setHoverLabel('');
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [cursorX, cursorY, isTouch]);

  // Don't render custom cursor on touch devices — major perf win
  if (isTouch) return null;

  return (
    <>
      {/* ── Comet trail particles ── */}
      {trails.map((t, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            zIndex: 9989 + i,
            x: t.x,
            y: t.y,
            translateX: '-50%',
            translateY: '-50%',
            width: t.size,
            height: t.size,
            background: t.color,
            filter: `blur(${t.blur}px)`,
            opacity: isHidden || isHovered ? 0 : t.opacity,
          }}
          transition={{ opacity: { duration: 0.15 } }}
        />
      ))}

      {/* ── Rotating gradient ring ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 9998,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
          scale: isClicking ? 0.7 : isHovered ? 1.7 : 1,
        }}
        transition={{ scale: { type: 'spring', stiffness: 280, damping: 20 }, opacity: { duration: 0.2 } }}
      >
        <motion.svg
          width={38}
          height={38}
          viewBox="0 0 38 38"
          style={{ display: 'block' }}
          animate={{ rotate: 360 }}
          transition={{ duration: isHovered ? 1.4 : 5, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <circle
            cx="19"
            cy="19"
            r="17"
            fill="none"
            stroke="url(#cg1)"
            strokeWidth={isHovered ? 1.8 : 1.2}
            strokeDasharray={isHovered ? '0' : '5 5'}
            strokeLinecap="round"
            opacity={isHovered ? 1 : 0.75}
          />
        </motion.svg>

        {/* Hover label */}
        <AnimatePresence>
          {isHovered && hoverLabel && (
            <motion.span
              key={hoverLabel}
              className="absolute inset-0 flex items-center justify-center font-space text-[7px] tracking-widest pointer-events-none"
              style={{ color: '#a78bfa' }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              {hoverLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Inner dot with glow ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          zIndex: 9999,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          background: isHovered
            ? 'radial-gradient(circle, #38bdf8 0%, #a78bfa 100%)'
            : 'radial-gradient(circle, #ffffff 0%, #a78bfa 100%)',
        }}
        animate={{
          width: isClicking ? 4 : isHovered ? 4 : 6,
          height: isClicking ? 4 : isHovered ? 4 : 6,
          opacity: isHidden ? 0 : 1,
          boxShadow: isClicking
            ? '0 0 6px rgba(167,139,250,1)'
            : isHovered
            ? '0 0 12px rgba(56,189,248,0.9), 0 0 24px rgba(56,189,248,0.4)'
            : '0 0 10px rgba(167,139,250,0.8), 0 0 20px rgba(167,139,250,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28 }}
      />
    </>
  );
};
