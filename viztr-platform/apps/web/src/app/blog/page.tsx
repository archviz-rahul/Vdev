import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'Blog — VizTR Insights',
  description: 'Latest insights on architectural visualization, XR technology, WebXR, WebAR, virtual reality, virtual tours, and pixel streaming from the VizTR team.',
}

const posts = [
  { slug: 'architectural-visualization-trends-2026', title: 'Architectural Visualization Trends 2026', excerpt: 'Exploring the latest trends shaping architectural visualization — from AI-assisted rendering to real-time collaboration.', category: 'Industry', author: 'Priya Patel', date: '2026-01-15', image: '/images/blog-1.jpg' },
  { slug: 'webxr-vs-native-apps', title: 'WebXR vs Native Apps: Which Wins?', excerpt: 'Comparing browser-based XR experiences with native applications — performance, reach, and development considerations.', category: 'Technology', author: 'Marcus Chen', date: '2026-01-08', image: '/images/blog-2.jpg' },
  { slug: 'pixel-streaming-architecture', title: 'Pixel Streaming for Architecture: A Deep Dive', excerpt: 'How cloud-rendered Unreal Engine 5 is changing architectural presentations and design reviews.', category: 'Case Study', author: 'Rahul Sharma', date: '2026-01-02', image: '/images/blog-3.jpg' },
  { slug: 'virtual-tours-real-estate', title: 'Virtual Tours That Sell: Real Estate ROI', excerpt: 'Data-driven analysis of how virtual tours impact real estate sales cycles and buyer engagement.', category: 'Insights', author: 'Elena Rodriguez', date: '2025-12-28', image: '/images/blog-4.jpg' },
  { slug: 'webar-product-visualization', title: 'WebAR for Product Visualization', excerpt: 'How brands are using browser-based AR to let customers place products in their space before buying.', category: 'Technology', author: 'Marcus Chen', date: '2025-12-20', image: '/images/blog-5.jpg' },
  { slug: 'vr-design-reviews', title: 'VR Design Reviews: The New Standard', excerpt: 'How architecture firms are adopting VR for collaborative design reviews and stakeholder presentations.', category: 'Case Study', author: 'Priya Patel', date: '2025-12-15', image: '/images/blog-6.jpg' },
]

const categories = ['All', 'Industry', 'Technology', 'Case Study', 'Insights']

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Insights & News</h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Latest thinking on architectural visualization, XR technology, and the future of spatial computing.</p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Latest Articles</h2>
              <p className="text-text-secondary text-lg">Thought leadership from the VizTR team</p>
            </header>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Blog categories">
              {categories.map((category) => (
                <button key={category} className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  'bg-bg-card border border-border text-text-secondary hover:border-accent hover:text-accent'
                )}>{category}</button>
              ))}
            </div>

            {/* Featured Post */}
            <article className="mb-16">
              <Link href="/blog/architectural-visualization-trends-2026" className="group card rounded-2xl overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 relative aspect-[4/3] bg-bg-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                      <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2m2 4a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m-2 0a2 2 0 012-2h2m0 0l3-3m0 0l3 3m-3-3v12" /></svg>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 md:flex md:flex-col md:justify-center">
                    <span className="badge bg-accent text-white text-xs mb-3">Industry</span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4 group-hover:text-accent transition-colors">Architectural Visualization Trends 2026</h2>
                    <p className="text-text-secondary mb-6 line-clamp-2">Exploring the latest trends shaping architectural visualization — from AI-assisted rendering to real-time collaboration.</p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-6">
                      <span>By Priya Patel</span>
                      <span>January 15, 2026</span>
                      <span>8 min read</span>
                    </div>
                    <span className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-hover transition-colors">Read Article<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="group card rounded-xl overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[16/9] bg-bg-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2m2 4a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m-2 0a2 2 0 012-2h2m0 0l3-3m0 0l3 3m-3-3v12" /></svg>
                    </div>
                    <span className="absolute top-4 left-4 badge bg-primary text-white text-xs">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <span className="badge bg-accent text-white text-xs mb-3">{post.category}</span>
                    <h3 className="font-display font-bold text-lg md:text-xl text-text-primary mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                      <span>By {post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent-hover transition-colors">Read More<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
              <button className="px-4 py-2 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors" disabled><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
              <button className="w-10 h-10 rounded-lg bg-accent text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">2</button>
              <button className="w-10 h-10 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">3</button>
              <span className="px-2 text-text-secondary">...</span>
              <button className="w-10 h-10 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors">6</button>
              <button className="px-4 py-2 rounded-lg border border-border text-text-secondary hover:border-accent hover:text-accent transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}