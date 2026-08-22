import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'About VizTR',
  description: 'Learn about VizTR — Architecture Visualization Studio + XR World Platform. Our story, vision, mission, values, and technology approach.',
}

const values = [
  { title: 'Precision', description: 'Every pixel, every polygon, every frame — crafted with exacting attention to detail.' },
  { title: 'Innovation', description: 'We push the boundaries of visualization technology to deliver what was impossible yesterday.' },
  { title: 'Collaboration', description: 'Best results come from true partnership. We listen, iterate, and succeed together.' },
  { title: 'Excellence', description: 'We hold ourselves to the highest standard. Good enough is never our standard.' },
  { title: 'Impact', description: 'We measure success by the impact our work has on our clients and their audiences.' },
]

const team = [
  { name: 'Rahul Sharma', role: 'Founder & CEO', bio: '20+ years in architectural visualization and technology leadership.' },
  { name: 'Priya Patel', role: 'Creative Director', bio: 'Award-winning visualization artist with expertise in cinematic storytelling.' },
  { name: 'Marcus Chen', role: 'CTO', bio: 'XR technology pioneer with 15+ years in real-time graphics and web platforms.' },
  { name: 'Elena Rodriguez', role: 'Head of Operations', bio: 'Operations leader ensuring seamless delivery across global projects.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">About VizTR</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Architecture Visualization Studio + XR World Platform — where vision meets reality.</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg text-text-secondary space-y-6">
              <p>Founded in 2020, VizTR began with a simple belief: architectural visualization should be as visionary as the architecture itself. What started as a boutique rendering studio has evolved into a full-spectrum visualization and XR platform.</p>
              <p>We have delivered 200+ projects across 15+ countries, working with leading architects, developers, and designers worldwide. Our work has helped sell billions in real estate, win international design competitions, and bring visionary projects to life.</p>
              <p>In 2023, we launched XR World — bringing immersive technology to the browser. No headsets required. No apps to download. Just click and experience.</p>
              <p>Today, VizTR stands at the intersection of architectural artistry and immersive technology. We are visualization specialists, XR innovators, and most importantly — partners in bringing your vision to reality.</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-6 bg-bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="card p-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Our Vision</h2>
                <p className="text-text-secondary text-lg leading-relaxed">To be the world's most trusted partner for architectural visualization and immersive XR experiences — where every design finds its perfect visual expression.</p>
              </div>
              <div className="card p-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Our Mission</h2>
                <p className="text-text-secondary text-lg leading-relaxed">To empower architects, developers, and designers with visualization and XR tools that communicate design intent, accelerate decisions, and inspire audiences worldwide.</p>
              </div>
            </div>

            {/* Values */}
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, i) => (
                <div key={i} className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <header className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Our Team</h2>
              <p className="text-text-secondary text-lg">The people behind the pixels</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-1">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Approach */}
        <section className="py-20 px-6 bg-bg-secondary">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-12 text-center">Technology Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Photorealistic Rendering', desc: 'V-Ray, Corona, Unreal Engine 5 — physically-based rendering with accurate materials and lighting.' },
                { title: 'Real-Time XR', desc: 'WebXR, WebGPU, Three.js, Babylon.js — browser-based immersive experiences.' },
                { title: 'Pixel Streaming', desc: 'Unreal Engine 5 on cloud GPUs, WebRTC streaming to any browser.' },
                { title: 'Pipeline Automation', desc: 'Custom render farm, asset optimization, CI/CD for visualization pipelines.' },
              ].map((tech, i) => (
                <div key={i} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">{tech.title}</h3>
                  <p className="text-text-secondary">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-6">Ready to Work With Us?</h2>
            <p className="text-text-secondary text-lg mb-8">Let us bring your architectural vision to life with precision and beauty.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start a Conversation</Link>
              <Link href="/book-consultation" className="btn btn-secondary px-8 py-3 text-lg">Book Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}