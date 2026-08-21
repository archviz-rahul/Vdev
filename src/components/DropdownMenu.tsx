'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/packages/utils/src/cn';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 py-2 font-medium text-[0.9rem] tracking-wide text-[var(--text-secondary)] hover:text-white transition-colors">
        {label}
        <ChevronDown size={14} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[220px] bg-[#1a1a1a] border border-[#2a2a2a] rounded-[12px] shadow-2xl z-[100] p-2"
          >
            <div className="flex flex-col">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white hover:bg-[#2a2a2a] rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
