import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Exterior Visualization',
  description: 'Photorealistic exterior architectural visualization services. Daylight studies, dusk renders, material accuracy, and environmental context for real estate marketing and design validation.',
}

const benefits = [
  { title: 'Photorealistic Quality', description: 'Indistinguishable from photography with accurate lighting, materials, and atmospheric effects.' },
  { title: 'Material Accuracy', description: 'Physically-based rendering with real-world material properties for glass, concrete, stone, metal, and more.' },
  { title: 'Environmental Integration', description: 'Seamless blending with site context, vegetation, neighboring buildings, and natural lighting conditions.' },
  { title: 'Marketing-Ready Assets', description: 'High-resolution outputs optimized for print, web, and presentation use with proper color management.' },
]

const process = [
  { step: 1, title: 'Brief & Reference Gathering', description: 'We collect architectural drawings, material specifications, site photos, and design intent.' },
  { step: 2, title: 'Modeling & Texturing', description: 'Precise 3D modeling from CAD/BIM with physically accurate material assignment.' },
  { step: 3, title: 'Lighting & Environment', description: 'Sun studies, HDRI environment setup, and atmospheric effects for time-of-day accuracy.' },
  { step: 4, title: 'Rendering & Post', description: 'High-resolution rendering with color grading, compositing, and final retouching.' },
]

const faqs = [
  { question: 'What file formats do you need from us?', answer: 'We accept DWG, RVT, SKP, 3DM, OBJ, FBX, and PDF. CAD/BIM files are preferred for accuracy.' },
  { question: 'How long does an exterior render take?', answer: 'Typically 1-2 weeks for a set of 3-5 views, depending on complexity and revision rounds.' },
  { question: 'Can you match specific lighting conditions?', answer: 'Yes. We can simulate any date, time, and geographic location for accurate sun positioning.' },
  { question: 'Do you provide revisions?', answer: 'Yes, 2 rounds of revisions are included. Additional rounds available at hourly rates.' },
]

export default function ExteriorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">Studio Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Exterior Visualization
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Photorealistic exterior renders that showcase architectural form, materials, and environment in perfect lighting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
                Start Your Project
              </Link>
              <Link href="/studio" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Back to Studio
              </Link>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">
                First impressions matter. Our exterior visualization service creates photorealistic renders that showcase your architectural design in its best light — literally. From dawn breaking over a residential development to the golden hour glow on a commercial tower, we capture the moments that sell your vision.
              </p>
              <p className="mb-6">
                We combine architectural precision with artistic composition. Every render is built from your actual drawings and specifications, with physically accurate materials, geographically correct sun positioning, and environmentally integrated contexts.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">
                Why Choose Our Exterior Visualization
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">
                Our Process
              </h2>
              <div className="space-y-8">
                {process.map((step) => (
                  <div key={step.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                {faqs.map((faq, i) => (
                  <details key={i} className="card group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <h3 className="font-medium text-text-primary pr-10">{faq.question}</h3>
                      <svg className="w-5 h-5 text-text-secondary transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">
                Ready to Showcase Your Design?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let us create exterior visualizations that communicate your vision with clarity and beauty.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
                  Get a Quote
                </Link>
                <Link href="/studio" className="btn btn-secondary px-8 py-3 text-lg">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}