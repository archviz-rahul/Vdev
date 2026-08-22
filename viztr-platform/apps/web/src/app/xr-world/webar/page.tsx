import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'WebAR — Augmented Reality in the Browser',
  description: 'Browser-based augmented reality. Place virtual objects in your real world using your phone camera. No app required. Instant AR for products, architecture, and marketing.',
}

const benefits = [
  { title: 'Instant Access', description: 'QR code or link opens AR instantly in mobile browser. No app download required.' },
  { title: 'Surface Detection', description: 'Automatic floor, table, and wall detection for stable object placement.' },
  { title: 'Image Tracking', description: 'Trigger AR from printed markers, packaging, or signage.' },
  { title: 'Social Sharing', description: 'Built-in photo/video capture and social media sharing.' },
]

const process = [
  { step: 1, title: 'AR Strategy & UX', description: 'Define use case, target devices, and interaction design for browser-based AR.' },
  { step: 2, title: '3D Asset Prep', description: 'Optimized GLB models with PBR materials, LODs, and occlusion-ready geometry.' },
  { step: 3, title: 'WebAR Development', description: '8th Wall, AR.js, or native WebXR AR implementation with fallback strategies.' },
  { step: 4, title: 'Deploy & Analytics', description: 'CDN hosting, QR code generation, and engagement analytics dashboard.' },
]

const faqs = [
  { question: 'Which phones support WebAR?', answer: 'iOS 13+ (Safari) and Android 8+ (Chrome). Covers 90%+ of active smartphones.' },
  { question: 'Do users need to grant camera permission?', answer: 'Yes, browser prompts for camera access. We design clear permission UX for high acceptance.' },
  { question: 'Can AR work offline?', answer: 'Assets cache for offline use after first load. Initial load requires connection.' },
  { question: 'What is the file size limit?', answer: 'We target <10MB total for instant loading. Larger experiences use progressive loading.' },
]

export default function WebARPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">XR World Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">WebAR</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Augmented Reality in the Browser — place virtual objects in your real world using your phone camera.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/xr-world" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to XR World</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">WebAR brings augmented reality to the mobile browser. No app to download, no account to create — just point your camera and the digital world appears in your physical space. From product visualization to architectural placement, from interactive marketing to educational experiences.</p>
              <p className="mb-6">We build on 8th Wall, AR.js, and native WebXR AR — choosing the right technology for your audience and use case. Every experience is optimized for instant loading, stable tracking, and delightful interaction.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why WebAR</h2>
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Augment Reality?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create WebAR experiences that delight and engage your audience instantly.</p>
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