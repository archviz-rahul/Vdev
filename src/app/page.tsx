'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a2e_0%,_transparent_70%)] opacity-40"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[1.5rem] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase border border-[#e94560] text-[#e94560] rounded-full">
            Foundation Phase 01
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none font-display">
            VizTR <span className="text-[#e94560]">—</span> Coming Soon
          </h1>
          
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Architecture Visualization Studio & immersive XR World Platform. We are building the next generation of spatial storytelling.
          </p>

          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-xs font-mono text-[#a0a0a0]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Active Deployment
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
