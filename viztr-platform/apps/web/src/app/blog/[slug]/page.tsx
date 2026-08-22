import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

const posts: Record<string, { title: string; excerpt: string; category: string; author: string; date: string; image: string; content: string }> = {
  'architectural-visualization-trends-2026': {
    title: 'Architectural Visualization Trends 2026',
    excerpt: 'Exploring the latest trends shaping architectural visualization — from AI-assisted rendering to real-time collaboration.',
    category: 'Industry',
    author: 'Priya Patel',
    date: '2026-01-15',
    image: '/images/blog-1.jpg',
    content: `
      <h2>The Evolution Continues</h2>
      <p>As we enter 2026, architectural visualization stands at a fascinating intersection of traditional craft and cutting-edge technology. The tools have never been more powerful, the workflows never more integrated, and the possibilities never more exciting.</p>
      
      <h2>1. AI-Assisted Rendering</h2>
      <p>AI is no longer a buzzword — it's a production tool. From automated material assignment to intelligent denoising, from concept generation to post-processing, AI is accelerating every stage of the visualization pipeline. Tools like Midjourney for concept exploration, Stable Diffusion for texture generation, and custom LoRAs for style consistency are becoming standard in forward-thinking studios.</p>
      
      <h2>2. Real-Time Collaboration</h2>
      <p>The days of sending static images back and forth are over. Cloud-based platforms now enable multiple stakeholders — architects, clients, visualization artists — to review, annotate, and iterate on renders in real-time. WebXR enables immersive review sessions where participants can walk through a design together from different continents.</p>
      
      <h2>3. Pixel Streaming Goes Mainstream</h2>
      <p>Unreal Engine 5's pixel streaming has matured. What was once experimental is now production-ready for high-stakes presentations. Stakeholders can explore photorealistic environments on tablets during design reviews, no installation required.</p>
      
      <h2>4. Sustainability Visualization</h2>
      <p>Clients increasingly demand visualization of sustainability metrics — daylight analysis, energy performance, carbon footprint. Visualization is becoming a tool for environmental validation, not just aesthetic presentation.</p>
      
      <h2>5. Immersive Web Experiences</h2>
      <p>WebXR and WebGPU are democratizing immersive experiences. No headset needed — anyone with a browser can explore a design in 3D. This is transforming how projects are marketed, reviewed, and approved.</p>
      
      <h2>Looking Ahead</h2>
      <p>The studio that embraces these trends isn't just keeping up — it's defining what architectural visualization can be. At VizTR, we're not just adopting these technologies; we're helping shape them.</p>
    `,
  },
  'webxr-vs-native-apps': {
    title: 'WebXR vs Native Apps: Which Wins?',
    excerpt: 'Comparing browser-based XR experiences with native applications — performance, reach, and development considerations.',
    category: 'Technology',
    author: 'Marcus Chen',
    date: '2026-01-08',
    image: '/images/blog-2.jpg',
    content: `
      <p>The debate between WebXR and native applications has been ongoing since WebXR's inception. With WebGPU now shipping in major browsers and WebXR support expanding, the landscape has shifted significantly.</p>
      <h2>Reach vs Richness</h2>
      <p>Native apps offer maximum hardware access and performance. WebXR offers instant, universal access. The choice depends on your audience and use case.</p>
      <h2>Performance Gap Narrowing</h2>
      <p>WebGPU brings native-like GPU access to the browser. For most architectural visualization use cases, the performance gap is now negligible.</p>
      <h2>Development Velocity</h2>
      <p>Single codebase, instant deployment, no app store approval. WebXR wins on iteration speed and maintenance.</p>
    `,
  },
  'pixel-streaming-architecture': {
    title: 'Pixel Streaming for Architecture: A Deep Dive',
    excerpt: 'How cloud-rendered Unreal Engine 5 is changing architectural presentations and design reviews.',
    category: 'Case Study',
    author: 'Rahul Sharma',
    date: '2026-01-02',
    image: '/images/blog-3.jpg',
    content: `
      <p>Pixel streaming represents a fundamental shift in how architectural experiences are delivered. By running Unreal Engine 5 on cloud GPUs and streaming the interactive experience via WebRTC, we eliminate hardware barriers entirely.</p>
      <h2>The Architecture</h2>
      <p>Cloud GPU instances (NVIDIA A10G/A100) run UE5 with the Pixel Streaming plugin. WebRTC handles the signaling and media transport. Clients connect via browser — no plugins, no installs.</p>
      <h2>Use Cases</h2>
      <ul>
        <li>Design reviews with remote stakeholders</li>
        <li>Real-time marketing experiences on any device</li>
        <li>Interactive sales centers without hardware</li>
      </ul>
    `,
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  
  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <article className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <header className="mb-12">
              <Link href="/blog" className="text-accent hover:underline text-sm font-medium mb-6 inline-block">
                ← Back to Blog
              </Link>
              <span className="badge bg-accent text-white text-xs mb-4">{post.category}</span>
              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-text-secondary text-sm mb-8">
                <span>By {post.author}</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>10 min read</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none text-text-secondary">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <hr className="my-16 border-border" />

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl text-text-primary mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(posts)
                  .filter(([s]) => s !== slug)
                  .slice(0, 3)
                  .map(([s, p]) => (
                    <Link key={s} href={`/blog/${s}`} className="group card rounded-xl overflow-hidden border-border hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[16/9] bg-bg-secondary overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2m2 4a2 2 0 01-2 2H7a2 2 0 01-2-2v-2m-2 0a2 2 0 012-2h2m0 0l3-3m0 0l3 3m-3-3v12" /></svg>
                        </div>
                        <span className="absolute top-4 left-4 badge bg-primary text-white text-xs">{p.category}</span>
                      </div>
                      <div className="p-6">
                        <span className="badge bg-accent text-white text-xs mb-3">{p.category}</span>
                        <h3 className="font-display font-bold text-lg text-text-primary mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                        <p className="text-text-secondary text-sm line-clamp-2">{p.excerpt}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </section>

            {/* Share */}
            <div className="flex items-center gap-4 pt-8 border-t border-border">
              <span className="font-medium text-text-secondary">Share:</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://viztr.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-secondary hover:bg-accent hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25c3.204 0 6.13 2.585 6.13 5.768 0 5.093-3.163 9.336-7.5 11.22-4.337-1.884-7.5-6.127-7.5-11.22 0-3.183 2.927-5.768 6.13-5.768z" /></svg></a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://viztr.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-bg-secondary hover:bg-accent hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227.792 24 1.771 24h.003z"/></svg></a>
              <button className="p-2 rounded-lg bg-bg-secondary hover:bg-accent hover:text-white transition-colors" aria-label="Copy link"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg></button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}