'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function TestimonialsSection() {
  const { heading, testimonials, stats } = extendedHomepageData.testimonials
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="testimonials-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  'card p-8 md:p-10 text-center transition-all duration-500 absolute inset-0',
                  index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4'
                )}
              >
                <svg className="w-10 h-10 mx-auto mb-6 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.848v7.391H14.017zM5.983 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.848v7.391H5.983z" />
                </svg>
                <blockquote className="text-lg md:text-xl text-text-primary mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer>
                  <div className="font-medium text-text-primary">{testimonial.clientName}</div>
                  <div className="text-text-secondary text-sm">{testimonial.clientRole}{testimonial.company && `, ${testimonial.company}`}</div>
                  <div className="flex items-center justify-center gap-1 mt-4 text-accent">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </footer>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300',
                  index === currentIndex ? 'bg-accent w-8' : 'bg-border hover:bg-accent/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}