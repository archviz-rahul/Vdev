'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

interface XRCardProps {
  title: string
  subtitle: string
  description: string
  image?: string
  cta: { label: string; href: string }
  isFlagship?: boolean
}

function XRCard({ title, subtitle, description, image, cta, isFlagship }: XRCardProps) {
  return (
    <Link
      href={cta.href}
      className={cn(
        'group relative card rounded-2xl overflow-hidden border-border',
        'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        isFlagship && 'ring-2 ring-accent/50 bg-gradient-to-br from-accent/10 to-transparent'
      )}
    >
      {isFlagship && (
        <div className="absolute top-4 right-4 z-10 badge bg-accent text-white text-xs">
          FLAGSHIP
        </div>
      )}

      {image && (
        <div className="aspect-video w-full bg-bg-secondary relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      <div className={cn('p-6', isFlagship ? 'relative z-10' : '')}>
        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          {subtitle}
        </span>
        <h3 className="font-display font-bold text-xl mb-3 text-text-primary">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-6 line-clamp-2">
          {description}
        </p>

        <span className={cn(
          'inline-flex items-center gap-2 font-medium transition-colors',
          isFlagship
            ? 'text-white bg-accent px-4 py-2 rounded-full hover:bg-accent-hover'
            : 'text-accent hover:text-accent-hover'
        )}>
          {cta.label}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export function XRPreview() {
  const { heading, subheading, cards } = homepageData.xrPreview

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="xr-preview-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="xr-preview-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary text-lg">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <XRCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}