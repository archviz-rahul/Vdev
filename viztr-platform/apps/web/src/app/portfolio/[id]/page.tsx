import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { notFound } from 'next/navigation'
import { portfolioProjects } from '@/data/portfolio'

interface PortfolioDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = portfolioProjects.find(p => p.id === id)
  
  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: 'website',
      images: [project.featuredImage],
    },
  }
}

export async function generateStaticParams() {
  return portfolioProjects.map(project => ({ id: project.id }))
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = portfolioProjects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <span className="badge bg-accent text-white mb-4">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">{project.title}</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">{project.shortDescription}</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-5xl">
            {/* Featured Image */}
            <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-bg-secondary flex items-center justify-center">
                <svg className="w-24 h-24 mx-auto text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-display font-bold text-3xl text-text-primary mb-6">Project Overview</h2>
                  <div className="prose prose-lg text-text-secondary">
                    <p>{project.longDescription}</p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display font-bold text-3xl text-text-primary mb-6">Project Details</h2>
                  <dl className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-bg-secondary rounded-xl">
                      <dt className="text-text-secondary text-sm">Category</dt>
                      <dd className="font-medium text-text-primary capitalize">{project.category}</dd>
                      <dt className="text-text-secondary text-sm">Client</dt>
                      <dd className="font-medium text-text-primary">{project.clientName || 'Confidential'}</dd>
                      <dt className="text-text-secondary text-sm">Location</dt>
                      <dd className="font-medium text-text-primary">{project.location}</dd>
                      <dt className="text-text-secondary text-sm">Status</dt>
                      <dd className="font-medium text-text-primary">{project.featured ? 'Featured Project' : 'Completed'}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Sidebar - CTA & Related */}
              <div className="space-y-8">
                {/* Enquiry CTA */}
                <div className="card p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3">Interested in This Project?</h3>
                  <p className="text-text-secondary mb-6">Get in touch to discuss a similar project or request more information about this work.</p>
                  <Link href="/contact" className="btn btn-primary w-full py-3">Enquire About This Project</Link>
                </div>

                {/* Related Projects */}
                <div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-6">Related Projects</h3>
                  <div className="space-y-4">
                    {portfolioProjects
                      .filter(p => p.category === project.category && p.id !== project.id)
                      .slice(0, 3)
                      .map((related) => (
                        <Link key={related.id} href={`/portfolio/${related.slug}`} className="flex gap-4 p-4 card hover:shadow-md transition-shadow">
                          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-bg-secondary">
                            <div className="w-full h-full flex items-center justify-center text-text-secondary">
                              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-text-primary truncate">{related.title}</h4>
                            <p className="text-text-secondary text-sm capitalize">{related.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}