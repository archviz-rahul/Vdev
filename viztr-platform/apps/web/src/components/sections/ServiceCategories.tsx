'use client'

import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

export function ServiceCategories() {
  const { studio, xrWorld } = homepageData.serviceCategories

  const renderCard = (data: typeof studio, isAccent: boolean) => (
    <Link
      href={data.cta.href}
      className={cn(
        'group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]',
        isAccent ? 'bg-gradient-to-br from-accent to-accent-hover' : 'card bg-bg-card border-border'
      )}
    >
      {/* Image */}
      <div className="aspect-video w-full bg-bg-secondary relative overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <span className={cn(
          'text-xs font-semibold tracking-widest uppercase mb-3 block',
          isAccent ? 'text-white/90' : 'text-accent'
        )}>
          {data.subtitle}
        </span>
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
          {data.title}
        </h2>
        <p className={cn('mb-6 leading-relaxed', isAccent ? 'text-white/80' : 'text-text-secondary')}>
          {data.description}
        </p>

        {/* Services List */}
        <ul className="space-y-3 mb-6" role="list">
          {data.services.map((service, index) => (
            <li key={index} className={cn('flex items-center gap-3 text-sm', isAccent ? 'text-white/90' : 'text-text-secondary')}>
              <Check className={cn('w-4 h-4 flex-shrink-0', isAccent ? 'text-white' : 'text-accent')} />
              {service}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <span className={cn(
          'inline-flex items-center gap-2 font-medium transition-colors',
          isAccent ? 'text-white hover:text-white/80' : 'text-accent hover:text-accent-hover'
        )}>
          {data.cta.label}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="service-categories-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {renderCard(studio, false)}
          {renderCard(xrWorld, true)}
        </div>
      </div>
    </section>
  )
}