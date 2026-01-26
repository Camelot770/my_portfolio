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

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border-b border-border last:border-b-0"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full py-6 flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-4 md:gap-8">
              {variant === 'numbered' && item.number && (
                <span className="text-accent font-bold text-xl md:text-2xl">
                  {item.number}
                </span>
              )}
              <span className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">
                {item.title}
              </span>
            </div>
            <motion.span
              animate={{ rotate: openId === item.id ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-light text-muted"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-muted leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
