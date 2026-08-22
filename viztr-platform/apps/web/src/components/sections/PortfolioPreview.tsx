'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

interface PortfolioCardProps {
  id: string
  title: string
  category: string
  image: string
  location?: string
}

function PortfolioCard({ id, title, category, image, location }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${id}`}
      className="group card rounded-xl overflow-hidden border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium px-6 py-3 border-2 border-white rounded-full">
            View Project
          </span>
        </div>
        <span className="absolute top-4 left-4 badge bg-primary text-white text-xs">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent transition-colors mb-1">
          {title}
        </h3>
        {location && (
          <p className="text-text-secondary text-sm flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
        )}
      </div>
    </Link>
  )
}

export function PortfolioPreview() {
  const { heading, subheading, filterCategories, cards, browseMore } = homepageData.portfolioPreview
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filteredCards = activeFilter === 'All'
    ? cards
    : cards.filter(card => card.category === activeFilter)

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="portfolio-preview-heading">
      <div className="container mx-auto">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <h2 id="portfolio-preview-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-2">
              {heading}
            </h2>
            <p className="text-text-secondary text-lg">
              {subheading}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Portfolio filters">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  activeFilter === filter
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-bg-card border border-border text-text-secondary hover:border-accent hover:text-accent'
                )}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCards.map((card) => (
            <PortfolioCard key={card.id} {...card} />
          ))}
        </div>

        {/* Browse More */}
        <div className="text-center">
          <Link
            href={browseMore.href}
            className="btn btn-secondary inline-flex"
          >
            {browseMore.label}
          </Link>
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12 text-text-secondary">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  )
}