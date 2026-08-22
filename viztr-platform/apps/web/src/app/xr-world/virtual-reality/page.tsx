import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Virtual Reality — Full Immersion',
  description: 'Complete VR experiences for Meta Quest, HTC Vive, and WebXR. Architectural walkthroughs, design reviews, and immersive presentations with 6DOF tracking.',
}

const benefits = [
  { title: '6DOF Tracking', description: 'Full six degrees of freedom for natural movement and exploration in virtual space.' },
  { title: 'Controller Support', description: 'Native support for Quest Touch, Vive Wands, Index Knuckles, and gamepad input.' },
  { title: 'Room-Scale Ready', description: 'Guardian system integration for safe room-scale experiences.' },
  { title: 'Multi-User Sessions', description: 'Collaborative VR with voice chat, avatars, and shared annotations.' },
]

const process = [
  { step: 1, title: 'VR Strategy', description: 'Define target headsets, interaction paradigm, and comfort requirements.' },
  { step: 2, title: 'Optimization', description: 'LODs, occlusion culling, texture streaming for 72/90fps performance.' },
  { step: 3, title: 'VR Development', description: 'Unity/Unreal or WebXR implementation with OpenXR compatibility.' },
  { step: 4, title: 'Testing & Deploy', description: 'Comfort testing, side-loading builds, store submission if needed.' },
]

const faqs = [
  { question: 'Which headsets are supported?', answer: 'Meta Quest 2/3/Pro, HTC Vive, Valve Index, Pico, and WebXR-compatible browsers.' },
  { question: 'Is VR hardware required?', answer: 'For full VR mode, yes. We also provide WebXR fallback for non-VR viewing.' },
  { question: 'Can multiple people join the same session?', answer: 'Yes, multi-user VR with voice, avatars, and shared interactions is available.' },
  { question: 'What about motion sickness?', description: 'We follow VR comfort best practices: vignetting, snap turning, teleport locomotion.' },
]

export default function VirtualRealityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">XR World Service</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Virtual Reality</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Full immersion with 6DOF tracking, controller support, and multi-user collaboration.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
              <Link href="/xr-world" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to XR World</Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">Virtual Reality offers the deepest level of immersion. With 6DOF tracking, hand controllers, and stereoscopic rendering, users don't just view your design — they inhabit it. Walk through unbuilt spaces, review design details at 1:1 scale, and collaborate with stakeholders across the globe.</p>
              <p className="mb-6">We build for Meta Quest, HTC Vive, and WebXR — ensuring your VR experience reaches the widest possible audience. Every experience is optimized for 90fps comfort, with teleport locomotion, vignetting, and accessibility options built in.</p>
            </div>

            <div className="mb-16">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why Virtual Reality</h2>
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
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Enter Virtual Reality?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us create VR experiences that transport your audience inside your designs.</p>
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