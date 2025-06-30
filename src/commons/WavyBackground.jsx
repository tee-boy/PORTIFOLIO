// WavyTextWatermark.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WavyTextWatermark = ({ targetRef }) => {
  // Track scroll relative to header section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Turn scroll into opacity (low opacity to look like a watermark)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.08, 0.08, 0]);

  return (
    <motion.div
      className="wavy-text-watermark"
      style={{ opacity }}
    >
      <span>BuiltByTee</span>
    </motion.div>
  );
};

export default WavyTextWatermark;
