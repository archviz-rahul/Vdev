'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

export function HeroSection() {
  const { images, headline, subheadline, primaryCTA, secondaryCTA, tertiaryCTA, overlayOpacity } = homepageData.hero
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, homepageData.hero.slideshowSpeed)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden="true"
          />
        ))}
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className={cn(
                'btn btn-primary px-8 py-4 text-lg',
                'w-full sm:w-auto'
              )}
            >
              {primaryCTA.label}
            </Link>
            <Link
              href={secondaryCTA.href}
              className={cn(
                'btn px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10',
                'w-full sm:w-auto'
              )}
            >
              {secondaryCTA.label}
            </Link>
          </div>
          <p className="mt-8">
            <Link
              href={tertiaryCTA.href}
              className="text-white/70 hover:text-white transition-colors underline-offset-2 hover:underline text-sm"
            >
              {tertiaryCTA.label}
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}