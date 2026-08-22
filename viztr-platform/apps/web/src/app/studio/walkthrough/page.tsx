import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Walkthrough Animation',
  description: 'Cinematic architectural walkthrough animations. 4K/8K output, custom camera paths, sound design, and multi-format delivery for presentations and marketing.',
}

const benefits = [
  { title: 'Cinematic Quality', description: 'Professional camera movement, pacing, and composition that tells your project story.' },
  { title: '4K/8K Resolution', description: 'Ultra-high definition output for large screens, presentations, and future-proof archives.' },
  { title: 'Sound Design', description: 'Ambient audio, narration, and music scoring to enhance the viewing experience.' },
  { title: 'Multi-Format Delivery', description: 'MP4, MOV, ProRes, and web-optimized versions for every platform.' },
]

const process = [
  { step: 1, title: 'Storyboard & Script', description: 'Camera path planning, key moments identification, and narrative structure.' },
  { step: 2, title: 'Animatic & Timing', description: 'Low-res preview for pacing approval before full rendering begins.' },
  { step: 3, title: 'Production Rendering', description: 'High-quality frame rendering with render farm for fast turnaround.' },
  { step: 4, title: 'Post & Delivery', description: 'Color grading, sound design, compositing, and multi-format export.' },
]

const faqs = [
  { question: 'What is the typical duration of a walkthrough?', answer: 'Most walkthroughs are 60-180 seconds. Longer formats available for complex projects.' },
  { question: 'Can you add people and vehicles?', answer: 'Yes. We can populate scenes with animated people, vehicles, and environmental life.' },
  { question: 'Do you provide the source files?', answer: 'Rendered video files are standard. Project files available under separate licensing.' },
  { question: 'How long does production take?', answer: 'Typically 3-6 weeks depending on duration, complexity, and revision rounds.' },
]

export default function WalkthroughPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">Studio Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Walkthrough Animation</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Cinematic flythrough animations that bring architectural spaces to life with smooth camera movement.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/studio" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to Studio</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">A walkthrough is more than a moving camera — it is a directed experience. We choreograph every camera movement, every transition, and every reveal to guide viewers through your design story. The result is a cinematic journey that communicates spatial relationships, design intent, and emotional impact in ways static images cannot.</p>
              <p className="mb-6">Whether for a competition entry, a marketing campaign, or a client presentation, our walkthrough animations elevate your project with professional production values.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why Choose Our Walkthrough Animation</h2>
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Animate Your Vision?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create a walkthrough that tells your project story with cinematic impact.</p>
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