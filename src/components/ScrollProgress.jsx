import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress({ reduced }) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress, opacity: reduced ? 0.4 : 1 }} />
  );
}
