'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[var(--bg-primary)] p-6">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[8rem] md:text-[12rem] font-display font-bold text-[var(--primary)] opacity-20 leading-none"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Page not found</h2>
          <p className="text-[var(--text-secondary)] mb-12 max-w-[400px] mx-auto">
            The architectural wonder you're looking for doesn't exist yet or has moved to another dimension.
          </p>
          
          <Link 
            href="/" 
            className="inline-block px-10 py-4 bg-[var(--primary)] text-white font-bold rounded-[12px] hover:bg-[var(--primary-hover)] transition-all shadow-xl"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
