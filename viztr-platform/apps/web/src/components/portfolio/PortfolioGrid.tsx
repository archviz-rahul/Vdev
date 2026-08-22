'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { portfolioProjects } from '@/data/portfolio'
import { PortfolioProject } from '@viztr/types'

const filterCategories = ['All', 'Exterior', 'Interior', 'Animation', 'XR', '360', 'Walkthrough']

const categoryMap: Record<string, PortfolioProject['category']> = {
  Exterior: 'exterior',
  Interior: 'interior',
  Animation: 'animation',
  XR: 'xr',
  '360': '360',
  Walkthrough: 'walkthrough',
}

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = React.useState('All')

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === categoryMap[activeFilter])

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Portfolio filters">
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

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group card rounded-xl overflow-hidden border-border hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="absolute top-4 left-4 badge bg-primary text-white text-xs">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
              {project.panorama && (
                <span className="absolute top-4 right-4 badge bg-accent text-white text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  360°
                </span>
              )}
              {project.video && (
                <span className="absolute bottom-4 right-4 badge bg-accent text-white text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Video
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent transition-colors mb-1">
                {project.title}
              </h3>
              {project.location && (
                <p className="text-text-secondary text-sm flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.location}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-text-secondary">
          No projects found for this category.
        </div>
      )}
    </div>
  )
}