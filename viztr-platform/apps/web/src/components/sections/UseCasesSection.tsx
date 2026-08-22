'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function UseCasesSection() {
  const { heading, subheading, useCases } = extendedHomepageData.useCases

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="use-cases-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="use-cases-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary text-lg">
            {subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-3">
                {useCase.audience}
              </h3>
              <div className="space-y-3 mb-4">
                <div className="text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Problem:</span> {useCase.problem}
                </div>
                <div className="text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Solution:</span> {useCase.solution}
                </div>
                <div className="text-sm text-text-secondary">
                  <span className="font-medium text-text-primary">Benefit:</span> {useCase.benefit}
                </div>
              </div>
              <Link
                href={useCase.cta.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                {useCase.cta.label}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}