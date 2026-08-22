'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { useState } from 'react'

export function PixelStreamingContent() {
  const [demoRequested, setDemoRequested] = useState(false)
  const [email, setEmail] = useState('')

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoRequested(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="badge bg-accent text-white mb-4">FLAGSHIP SERVICE</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Pixel Streaming</h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Cloud-rendered Unreal Engine 5 quality streamed to any browser — zero hardware required.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your Project</Link>
            <Link href="/xr-world" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">Back to XR World</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg text-text-secondary mb-16">
            <p className="mb-6"><strong>Pixel Streaming is our flagship service.</strong> We run Unreal Engine 5 on cloud GPUs and stream the interactive experience to any browser via WebRTC. Your audience gets photorealistic, real-time 3D — ray tracing, global illumination, Nanite geometry — on a phone, tablet, or laptop. No downloads. No installs. No compromises.</p>
            <p className="mb-6">This is the future of architectural presentation. Stakeholders explore designs in real-time from anywhere. Design reviews happen in the browser. Marketing experiences run on a billboard screen from a cloud server. The GPU is in the cloud; the experience is in the browser.</p>
          </div>

          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Why Pixel Streaming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Unreal Engine 5 Quality', description: 'Nanite, Lumen, ray-tracing — full UE5 fidelity streamed from cloud GPUs.' },
                { title: 'Zero Local Hardware', description: 'Runs on any device with a browser — phone, tablet, laptop, thin client.' },
                { title: 'Real-Time Interaction', description: 'Sub-100ms latency with WebRTC. Full keyboard, mouse, touch, and gamepad support.' },
                { title: 'Enterprise Security', description: 'Encrypted streams, access control, session recording, and audit logs.' },
              ].map((benefit, i) => (
                <div key={i} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Technical Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'Modern browser (Chrome 90+, Firefox 88+, Edge 90+, Safari 15+)',
                'Stable internet connection (15+ Mbps recommended)',
                'WebRTC support (all modern browsers)',
                'Optional: Gamepad for navigation (Xbox/PS controllers supported)',
              ].map((req, i) => (
                <div key={i} className="card p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-text-secondary">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Our Process</h2>
            <div className="space-y-8">
              {[
                { step: 1, title: 'Project Assessment', description: 'Scene complexity, target audience, concurrent users, and quality requirements analysis.' },
                { step: 2, title: 'Scene Optimization', description: 'UE5 project prep: Nanite meshes, Lumen lighting, streaming levels, pixel streaming plugin config.' },
                { step: 3, title: 'Cloud Deployment', description: 'GPU instance provisioning (AWS/GCP/Azure), signaling server, TURN/STUN, autoscaling.' },
                { step: 4, title: 'Launch & Monitor', description: 'Session management, analytics dashboard, usage billing, and 24/7 monitoring.' },
              ].map((step) => (
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
              {[
                { question: 'What internet speed is required?', answer: 'Minimum 15 Mbps for 1080p60. 25+ Mbps recommended for 4K. Adaptive bitrate adjusts automatically.' },
                { question: 'What GPU hardware do you use?', answer: 'NVIDIA A10G, A100, or RTX A6000 depending on quality tier. Multi-GPU for high concurrency.' },
                { question: 'Can multiple users view the same session?', answer: 'Yes, view-only spectators supported. Interactive multi-user requires separate instances.' },
                { question: 'Is the stream secure?', answer: 'Yes. DTLS/SRTP encryption, token-based auth, domain restrictions, and optional VPN/private link.' },
              ].map((faq, i) => (
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

          {/* Demo Request Form */}
          <div className="mb-16 card p-8 bg-accent/5 border-accent/20">
            <h2 className="font-display font-bold text-2xl text-text-primary mb-4 text-center">Request a Live Demo</h2>
            <p className="text-text-secondary text-center mb-8">Experience Pixel Streaming yourself. Fill out the form and our team will schedule a private session.</p>
            <form onSubmit={handleDemoRequest} className="max-w-md mx-auto space-y-4">
              {!demoRequested ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    className="input"
                    required
                  />
                  <button type="submit" className="btn btn-primary w-full py-3">Request Demo</button>
                </>
              ) : (
                <div className="text-center text-green-600">
                  <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p className="font-medium">Demo requested! We'll contact you within 24 hours.</p>
                </div>
              )}
            </form>
          </div>

          <div className="mb-16">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { question: 'What internet speed is required?', answer: 'Minimum 15 Mbps for 1080p60. 25+ Mbps recommended for 4K. Adaptive bitrate adjusts automatically.' },
                { question: 'What GPU hardware do you use?', answer: 'NVIDIA A10G, A100, or RTX A6000 depending on quality tier. Multi-GPU for high concurrency.' },
                { question: 'Can multiple users view the same session?', answer: 'Yes, view-only spectators supported. Interactive multi-user requires separate instances.' },
                { question: 'Is the stream secure?', answer: 'Yes. DTLS/SRTP encryption, token-based auth, domain restrictions, and optional VPN/private link.' },
              ].map((faq, i) => (
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

          <div className="text-center bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 md:p-12">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready for Pixel-Perfect Streaming?</h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us bring Unreal Engine 5 quality to your browser — no hardware required.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Get a Quote</Link>
              <Link href="/xr-world" className="btn btn-secondary px-8 py-3 text-lg">View All XR Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}