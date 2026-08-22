'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

interface XRExpCardProps {
  title: string
  subtitle: string
  description: string
  image?: string
  cta: { label: string; href: string }
}

function XRExpCard({ title, subtitle, description, image, cta }: XRExpCardProps) {
  return (
    <Link
      href={cta.href}
      className="group relative card rounded-2xl overflow-hidden border-border bg-gradient-to-br from-bg-card to-bg-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      )}

      <div className="relative z-10 p-6 h-full flex flex-col">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">
          {subtitle}
        </span>
        <h3 className="font-display font-bold text-xl mb-3 text-white">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-6 flex-1 line-clamp-2">
          {description}
        </p>

        <span className="inline-flex items-center gap-2 font-medium text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors mt-auto">
          {cta.label}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export function XRExperienceSection() {
  const { heading, subheading, cards } = homepageData.xrExperience

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="xr-experience-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="xr-experience-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary text-lg">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <XRExpCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}