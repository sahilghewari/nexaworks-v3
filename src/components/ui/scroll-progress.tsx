"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-brand-500 to-indigo-500 origin-left z-[100] shadow-[0_0_15px_rgba(6,182,212,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
}
