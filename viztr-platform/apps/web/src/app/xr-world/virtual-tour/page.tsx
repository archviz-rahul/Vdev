import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Virtual Tour — 360° Exploration',
  description: 'Interactive 360° virtual tours with hotspots, floor plans, and seamless navigation. Perfect for real estate, hospitality, and architectural showcases.',
}

const benefits = [
  { title: '360° Panoramas', description: 'High-resolution equirectangular images with smooth transitions between viewpoints.' },
  { title: 'Hotspot Navigation', description: 'Clickable hotspots for info cards, media, teleportation, and external links.' },
  { title: 'Floor Plans', description: 'Integrated 2D floor plans with current position and viewing direction indicators.' },
  { title: 'VR Mode', description: 'One-click entry to immersive VR mode for headset users.' },
]

const process = [
  { step: 1, title: 'Capture Planning', description: 'Viewpoint selection, lighting setup, and shoot scheduling for optimal coverage.' },
  { step: 2, title: 'Capture & Stitch', description: 'DSLR/360 camera capture, HDR bracketing, and seamless equirectangular stitching.' },
  { step: 3, title: 'Tour Assembly', description: 'Hotspot placement, floor plan integration, branding, and navigation design.' },
  { step: 4, title: 'Publish & Host', description: 'CDN deployment, analytics setup, embed codes, and QR code generation.' },
]

const faqs = [
  { question: 'What equipment do you use?', answer: 'Professional DSLR with panoramic head, or Ricoh Theta / Insta360 for rapid capture.' },
  { question: 'Can tours be embedded on our website?', answer: 'Yes, we provide iframe embed codes and direct links for any website.' },
  { question: 'Do tours work on mobile?', answer: 'Yes, fully responsive with touch navigation and gyroscope support.' },
  { question: 'Can you add our branding?', answer: 'Yes, custom logo, colors, UI skin, and custom domain hosting available.' },
]

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">XR World Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Virtual Tour</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Interactive 360° panoramic tours with hotspots, floor plans, and VR mode.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/xr-world" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to XR World</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">Virtual tours let anyone explore a space as if they were there. Navigate room to room, zoom into details, click hotspots for information, and even view floor plans — all from a browser or VR headset. Perfect for real estate listings, hotel showcases, campus tours, and architectural presentations.</p>
              <p className="mb-6">We handle everything from on-site capture to final deployment. High-resolution HDR panoramas, custom hotspot design, branded UI, and global CDN hosting with analytics.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why Virtual Tours</h2>
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Tour Your Space?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create a virtual tour that lets anyone explore your property from anywhere.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Get a Quote</Link>
                <Link href="/xr-world" className="btn btn-secondary px-8 py-3 text-lg">View All XR Services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}