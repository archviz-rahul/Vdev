import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { PortfolioGrid } from '@/components/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio — Our Work',
  description: 'Explore VizTR portfolio of architectural visualization and XR projects. Filter by Exterior, Interior, Animation, XR, 360, and Walkthrough categories.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Our Portfolio</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Selected projects from our architectural visualization and XR work.</p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Our Work</h2>
              <p className="text-text-secondary text-lg">Explore projects by category</p>
            </header>
            <PortfolioGrid />
            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/contact" className="btn btn-primary inline-flex">Start a Project Like This</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}