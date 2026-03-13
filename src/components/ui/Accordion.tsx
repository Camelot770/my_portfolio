'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  number?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  variant?: 'default' | 'numbered';
}

export function Accordion({ items, className = '', variant = 'default' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const isHovered = hoverId === item.id;

        return (
          <div
            key={item.id}
            className="border-b border-border last:border-b-0 relative"
            onMouseEnter={() => setHoverId(item.id)}
            onMouseLeave={() => setHoverId(null)}
          >
            {/* Gradient left accent on hover */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: 'linear-gradient(180deg, #7C3AED, #06B6D4)' }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: isHovered || isOpen ? 1 : 0,
                opacity: isHovered || isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            <button
              onClick={() => toggle(item.id)}
              className="w-full py-6 flex items-center justify-between text-left group pl-4"
            >
              <div className="flex items-center gap-4 md:gap-8">
                {variant === 'numbered' && item.number && (
                  <motion.span
                    className="font-bold text-xl md:text-2xl"
                    animate={{
                      color: isHovered || isOpen ? '#7C3AED' : 'rgba(136, 136, 153, 0.6)',
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.number}
                  </motion.span>
                )}
                <motion.span
                  className="text-xl md:text-2xl font-semibold"
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="group-hover:text-accent transition-colors">
                    {item.title}
                  </span>
                </motion.span>
              </div>
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  color: isHovered || isOpen ? '#7C3AED' : undefined,
                }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-light text-muted"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pl-4 text-muted leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
