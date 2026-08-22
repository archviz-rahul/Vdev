'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function HowItWorksSection() {
  const { heading, steps } = extendedHomepageData.howItWorks

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-16">
          <h2 id="how-it-works-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ backgroundColor: 'var(--border)' }} />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  'relative lg:relative',
                  index % 2 === 1 && 'lg:ml-auto'
                )}
              >
                <div className={cn(
                  'relative z-10 card p-6 md:p-8 lg:max-w-xs lg:mx-auto',
                  index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                )}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6 text-white font-bold text-2xl"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-center text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-center text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile timeline connector */}
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 w-0.5 h-12 bottom-[-2.5rem]" style={{ backgroundColor: 'var(--border)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}