'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  cta: { label: string; href: string }
  categoryTag: string
}

function ServiceCard({ title, description, image, cta, categoryTag }: ServiceCardProps) {
  return (
    <Link
      href={cta.href}
      className="group card rounded-2xl overflow-hidden shadow-lg border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 badge bg-primary text-white">
          {categoryTag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-2 text-text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
          {cta.label}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export function StudioPreview() {
  const { heading, subheading, cards } = homepageData.studioPreview

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="studio-preview-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="studio-preview-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary text-lg">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}