'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function FinalCTASection() {
  const { heading, subheading, primaryCTA, secondaryCTA, tertiaryCTA } = extendedHomepageData.finalCTA

  return (
    <section className="relative w-full py-20 md:py-28 px-6 overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <h2 id="final-cta-heading" className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
          {heading}
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className={cn(
              'btn px-8 py-4 text-lg font-semibold',
              'bg-white text-primary hover:bg-white/90',
              'w-full sm:w-auto'
            )}
          >
            {primaryCTA.label}
          </Link>
          <Link
            href={secondaryCTA.href}
            className={cn(
              'btn px-8 py-4 text-lg font-semibold',
              'border-2 border-white text-white hover:bg-white/10',
              'w-full sm:w-auto'
            )}
          >
            {secondaryCTA.label}
          </Link>
          {tertiaryCTA && (
            <Link
              href={tertiaryCTA.href}
              className="text-white/80 hover:text-white transition-colors underline-offset-2 hover:underline text-sm px-4 py-2"
            >
              {tertiaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}