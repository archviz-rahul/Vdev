import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Architecture Visualization Studio',
  description: 'VizTR Studio offers premium architectural visualization services including exterior renders, interior visualizations, and cinematic walkthrough animations.',
}

const studioServices = [
  {
    title: 'Exterior Visualization',
    description: 'Photorealistic exterior renders that showcase architectural form, materials, and environment in perfect lighting.',
    href: '/studio/exterior',
    image: '/images/studio-exterior.jpg',
    features: ['Daylight & Dusk Studies', 'Material Accuracy', 'Environmental Context', 'Marketing-Ready Resolution'],
  },
  {
    title: 'Interior Visualization',
    description: 'Detailed interior scenes with accurate lighting, materials, and spatial composition that bring designs to life.',
    href: '/studio/interior',
    image: '/images/studio-interior.jpg',
    features: ['Lighting Simulation', 'Material Library', 'Furniture & Decor', 'VR-Ready Output'],
  },
  {
    title: 'Walkthrough Animation',
    description: 'Cinematic flythrough animations that bring architectural spaces to life with smooth camera movement.',
    href: '/studio/walkthrough',
    image: '/images/studio-walkthrough.jpg',
    features: ['4K/8K Output', 'Custom Camera Paths', 'Sound Design', 'Multiple Format Delivery'],
  },
]

export default function StudioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Architecture Visualization Studio
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Photorealistic renders, cinematic walkthroughs, and detailed visual narratives for architectural projects.
            </p>
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Start Your Project
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary">
              <p className="mb-6">
                At VizTR Studio, we transform architectural concepts into compelling visual stories. Our team of visualization specialists combines artistic expertise with cutting-edge technology to deliver renders that not only showcase your design but also communicate its essence.
              </p>
              <p className="mb-6">
                Whether you need a single hero image for a competition entry, a full suite of marketing materials for a development launch, or an immersive walkthrough for client presentations — we deliver precision, beauty, and impact.
              </p>
              <p className="mb-6">
                Every project begins with understanding your vision. We collaborate closely with architects, developers, and designers to ensure each render captures the right mood, materials, and moments that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-bg-secondary">
          <div className="container mx-auto">
            <header className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
                Our Services
              </h2>
              <p className="text-text-secondary text-lg">
                Three core services, infinite possibilities
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studioServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group card rounded-2xl overflow-hidden border-border hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video bg-bg-secondary relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl mb-3 text-text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
                Selected Studio Projects
              </h2>
              <p className="text-text-secondary text-lg">
                A glimpse of our recent architectural visualization work
              </p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Luxury Villa', category: 'Exterior', location: 'Beverly Hills, CA' },
                { title: 'Modern Penthouse', category: 'Interior', location: 'New York, NY' },
                { title: 'Commercial Tower', category: 'Exterior', location: 'Dubai, UAE' },
              ].map((project, i) => (
                <Link key={i} href={`/portfolio/${i + 1}`} className="card rounded-xl overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-bg-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="absolute top-4 left-4 badge bg-primary text-white text-xs">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn btn-secondary inline-flex">
                Browse All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-primary text-white">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Visualize Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let us bring your architectural vision to life with precision and beauty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg">
                Start Your Project
              </Link>
              <Link href="/book-consultation" className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                Book Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}