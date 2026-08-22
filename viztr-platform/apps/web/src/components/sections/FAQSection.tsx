'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function FAQSection() {
  const { heading, faqs } = extendedHomepageData.faq
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 px-6" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-3xl">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
        </header>

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group card"
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <summary className={cn(
                'flex items-center justify-between p-6 cursor-pointer list-none',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}>
                <h3 className="font-display font-bold text-lg text-text-primary pr-10">
                  {faq.question}
                </h3>
                <ChevronDown className={cn(
                  'w-5 h-5 text-text-secondary transition-transform duration-200 flex-shrink-0',
                  'group-open:rotate-180'
                )} aria-hidden="true" />
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed animate-fade-in">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <p className="text-center text-text-secondary mt-8">
          Didn&apos;t find your answer?{' '}
          <a href="/contact" className="text-accent hover:underline font-medium">
            Contact us
          </a>
        </p>
      </div>
    </section>
  )
}