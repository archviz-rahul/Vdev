import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Interior Visualization',
  description: 'Detailed interior architectural visualization with accurate lighting, materials, and spatial composition. Perfect for design validation, client presentations, and real estate marketing.',
}

const benefits = [
  { title: 'Lighting Simulation', description: 'Physically accurate daylight and artificial lighting with global illumination and caustics.' },
  { title: 'Material Library', description: 'Extensive PBR material library with fabrics, woods, stones, metals, and custom finishes.' },
  { title: 'Furniture & Decor', description: 'Curated furniture models and styling options to match any design aesthetic.' },
  { title: 'VR-Ready Output', description: 'Interior scenes optimized for real-time WebXR walkthroughs and VR presentations.' },
]

const process = [
  { step: 1, title: 'Design Brief & Plans', description: 'Floor plans, FF&E schedules, material boards, and lighting design intent.' },
  { step: 2, title: 'Space Modeling', description: 'Accurate 3D modeling of architecture, built-ins, and spatial divisions.' },
  { step: 3, title: 'Material & Lighting', description: 'PBR material assignment, luminaire placement, and lighting scene setup.' },
  { step: 4, title: 'Styling & Render', description: 'Furniture placement, decor styling, camera composition, and final rendering.' },
]

const faqs = [
  { question: 'Can you work from 2D plans only?', answer: 'Yes. We can model from 2D CAD, PDF plans, or even hand sketches with dimensions.' },
  { question: 'Do you provide furniture models?', answer: 'Yes, we have an extensive library. Custom furniture modeling is available for unique pieces.' },
  { question: 'Can you match specific paint colors and finishes?', answer: 'Absolutely. Provide RAL, Pantone, or manufacturer specs and we will match them precisely.' },
  { question: 'What resolution do you deliver?', answer: 'Standard delivery is 4K (4000px). 8K and custom resolutions available on request.' },
]

export default function InteriorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">Studio Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Interior Visualization
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Detailed interior scenes with accurate lighting, materials, and spatial composition that bring designs to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/studio" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to Studio</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">Interior visualization requires a different kind of precision. It is about capturing how light moves through a space, how materials feel under different lighting conditions, and how furniture and decor come together to create an atmosphere. Our interior renders go beyond documentation — they communicate the lived experience of a design.</p>
              <p className="mb-6">From luxury residential to commercial workplaces, from hospitality to retail — we create interior visualizations that help clients, stakeholders, and buyers connect emotionally with a space before it exists.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why Choose Our Interior Visualization</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-display font-bold text-xl text-text-primary mb-2">{benefit.title}</h3>
                    <p className="text-text-secondary">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Our Process</h2>
              <div className="space-y-8">
                {process.map((step) => (
                  <div key={step.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: 'var(--accent)' }}>{step.step}</div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-2xl mx-auto">
                {faqs.map((faq, i) => (
                  <details key={i} className="card group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <h3 className="font-medium text-text-primary pr-10">{faq.question}</h3>
                      <svg className="w-5 h-5 text-text-secondary transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>

            <div className="text-center bg-bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Visualize Your Interiors?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create interior visualizations that communicate your design vision with clarity and emotion.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Get a Quote</Link>
                <Link href="/studio" className="btn btn-secondary px-8 py-3 text-lg">View All Services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}