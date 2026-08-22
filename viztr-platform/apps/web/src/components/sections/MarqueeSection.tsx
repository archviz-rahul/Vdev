'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

export function MarqueeSection() {
  const { items, speed, backgroundColor, visible } = homepageData.marquee

  if (!visible) return null

  // Duplicate items 3 times for seamless loop
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <section
      className={cn(
        'w-full overflow-hidden py-4',
        'bg-primary text-white'
      )}
      style={{ backgroundColor: backgroundColor }}
      aria-label="Services marquee"
    >
      <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: `${speed}ms` }}>
        {duplicatedItems.map((item, index) => (
          <span key={index} className="px-6 font-semibold text-sm tracking-widest uppercase flex items-center">
            {item}
            {index < duplicatedItems.length - 1 && (
              <span className="mx-4 text-white/40">◆</span>
            )}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  )
}