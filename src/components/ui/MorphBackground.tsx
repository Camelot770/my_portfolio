'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Fixed-position background layer that subtly shifts tone as user scrolls
 * through the page. Adds an "immersive" feel without distracting from content.
 *
 * Color stops (tinted toward brand colors at midpoints, back to base):
 *  0%     — base  #0B1030
 *  30%    — #121A45 (slight blue push)
 *  60%    — #1A1638 (warm purple/peach hint)
 *  100%   — #0B1030 (base again)
 */
export function MorphBackground() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
  });

  const backgroundColor = useTransform(
    smoothed,
    [0, 0.3, 0.6, 1],
    ['#0B1030', '#121A45', '#1A1638', '#0B1030']
  );

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ backgroundColor }}
    />
  );
}
