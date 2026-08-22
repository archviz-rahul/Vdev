import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'WebXR — Extended Reality in the Browser',
  description: 'Immersive 3D experiences accessible through any web browser. No downloads, no installations. Cross-platform WebXR for architecture, product visualization, and interactive experiences.',
}

const benefits = [
  { title: 'Zero Install', description: 'Runs instantly in any modern browser — Chrome, Firefox, Safari, Edge. No app store, no downloads.' },
  { title: 'Cross-Platform', description: 'Works on desktop, mobile, tablet, and VR headsets. One build, everywhere.' },
  { title: 'WebGPU Ready', description: 'Next-gen graphics performance with WebGPU, falling back to WebGL 2.' },
  { title: 'Hand & Controller Tracking', description: 'Native support for hand tracking, VR controllers, and spatial input.' },
]

const process = [
  { step: 1, title: 'Concept & UX Design', description: 'Define interaction flows, spatial UI, and user journey for 3D web experiences.' },
  { step: 2, title: '3D Asset Optimization', description: 'GLTF/GLB optimization, Draco compression, texture atlasing for web delivery.' },
  { step: 3, title: 'WebXR Development', description: 'Three.js / Babylon.js implementation with WebXR session management.' },
  { step: 4, title: 'Testing & Deploy', description: 'Cross-browser testing, performance optimization, CDN deployment.' },
]

const faqs = [
  { question: 'Which browsers support WebXR?', answer: 'Chrome 79+, Firefox 79+, Edge 79+, Safari 15+ (partial). Mobile Chrome and Firefox fully support AR/VR modes.' },
  { question: 'Do users need a VR headset?', answer: 'No. WebXR runs in "inline" mode on any screen. VR/AR modes are optional enhancements.' },
  { question: 'What 3D formats do you support?', answer: 'GLTF/GLB (primary), with support for OBJ, FBX, USDZ via conversion pipeline.' },
  { question: 'How is performance on mobile?', answer: 'Optimized assets run at 60fps on 3-year-old phones. We target <50MB total download.' },
]

export default function WebXRPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">XR World Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">WebXR</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Extended Reality on the Web — immersive 3D experiences accessible through any browser.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/xr-world" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to XR World</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">WebXR is the open standard for VR and AR on the web. It enables immersive 3D experiences that run directly in the browser — no app stores, no installations, no friction. Your audience clicks a link and they are inside your experience.</p>
              <p className="mb-6">We build WebXR experiences using Three.js, Babylon.js, and React Three Fiber — optimized for performance, accessibility, and reach. From architectural walkthroughs to product configurators, from virtual showrooms to training simulations.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why WebXR</h2>
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Build for the Web?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create WebXR experiences that run everywhere your audience is.</p>
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