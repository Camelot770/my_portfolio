'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonRect {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: number;
}

const MAX_FILL_WIDTH = 350;
const MAX_FILL_HEIGHT = 80;

// Check if device is mobile/touch
const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    setIsMobile(isTouchDevice() || window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(isTouchDevice() || window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [isOverHero, setIsOverHero] = useState(false);
  const [buttonRect, setButtonRect] = useState<ButtonRect | null>(null);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  const rafRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -100, y: -100 });

  const checkElement = useCallback((x: number, y: number) => {
    const el = document.elementFromPoint(x, y);
    if (!el) {
      setIsHoveringButton(false);
      setButtonRect(null);
      setIsHoveringProject(false);
      return;
    }

    // Check Hero
    const hero = document.querySelector('[data-hero]');
    if (hero) {
      const r = hero.getBoundingClientRect();
      setIsOverHero(x >= r.left && x <= r.right && y >= r.top && y <= r.bottom);
    } else {
      setIsOverHero(false);
    }

    // Check if hovering over project card
    const projectCard = el.closest('[data-project-card]');
    if (projectCard) {
      setIsHoveringProject(true);
      setIsHoveringButton(false);
      setButtonRect(null);
      return;
    }

    setIsHoveringProject(false);

    // Check interactive elements
    const interactive = el.closest('button, a, [role="button"]') ||
      (el.classList.contains('btn') ? el : null);

    if (interactive) {
      if (interactive.hasAttribute('data-no-cursor-fill') ||
          interactive.closest('[data-no-cursor-fill]')) {
        setIsHoveringButton(false);
        setButtonRect(null);
        return;
      }

      const rect = interactive.getBoundingClientRect();
      if (rect.width <= MAX_FILL_WIDTH && rect.height <= MAX_FILL_HEIGHT) {
        const style = window.getComputedStyle(interactive);
        setButtonRect({
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
          borderRadius: parseInt(style.borderRadius) || 0,
        });
        setIsHoveringButton(true);
        return;
      }
    }

    setIsHoveringButton(false);
    setButtonRect(null);
  }, []);

  useEffect(() => {
    let lastCheck = 0;

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setPosition(positionRef.current);
        if (!isVisible) setIsVisible(true);

        // Throttle element checking to every 50ms
        const now = Date.now();
        if (now - lastCheck > 50) {
          lastCheck = now;
          checkElement(positionRef.current.x, positionRef.current.y);
        }
      });
    };

    const onScroll = () => {
      setIsHoveringButton(false);
      setButtonRect(null);
      setIsHoveringProject(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsHoveringButton(false);
      setButtonRect(null);
      setIsHoveringProject(false);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, checkElement]);

  const size = 16;
  const projectCursorSize = 120;
  const show = isVisible && (!isOverHero || isHoveringButton || isHoveringProject);

  // Determine cursor size based on state
  const cursorSize = isHoveringProject ? projectCursorSize : (isHoveringButton && buttonRect ? buttonRect.width : size);
  const cursorHeight = isHoveringProject ? projectCursorSize : (isHoveringButton && buttonRect ? buttonRect.height : size);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: isHoveringButton && buttonRect ? buttonRect.x : position.x - (isHoveringProject ? projectCursorSize / 2 : size / 2),
          y: isHoveringButton && buttonRect ? buttonRect.y : position.y - (isHoveringProject ? projectCursorSize / 2 : size / 2),
          backgroundColor: isHoveringProject ? 'rgba(255, 107, 71, 0.85)' : (isHoveringButton ? 'transparent' : '#FF6B47'),
          border: isHoveringButton ? '3px solid #0A0A0A' : 'none',
        }}
        animate={{
          width: cursorSize,
          height: cursorHeight,
          borderRadius: isHoveringProject ? projectCursorSize / 2 : (isHoveringButton && buttonRect ? buttonRect.borderRadius : size / 2),
          opacity: show ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.5,
        }}
      >
        {isHoveringProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-white text-center"
          >
            <span className="text-xs font-medium whitespace-nowrap">Подробнее</span>
            <span className="text-lg mt-0.5">↘</span>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
