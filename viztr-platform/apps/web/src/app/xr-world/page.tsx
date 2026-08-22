import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { cn } from '@viztr/utils'

export const metadata: Metadata = {
  title: 'XR World — Immersive Technology Experiences',
  description: 'VizTR XR World delivers WebXR, WebAR, Virtual Reality, Virtual Tours, and Pixel Streaming. Browser-based immersive experiences with no hardware required.',
}

const xrServices = [
  {
    title: 'WebXR',
    subtitle: 'Extended Reality',
    description: 'Immersive 3D experiences accessible through any web browser — no downloads, no installations.',
    href: '/xr-world/webxr',
    image: '/images/xr-webxr.jpg',
    features: ['Cross-Platform', 'WebGL/WebGPU', 'Hand Tracking', 'Spatial Audio'],
  },
  {
    title: 'WebAR',
    subtitle: 'Augmented Reality',
    description: 'Place virtual objects in your real world using your phone camera — instant AR in the browser.',
    href: '/xr-world/webar',
    image: '/images/xr-webar.jpg',
    features: ['Image Tracking', 'Surface Detection', 'Face Filters', 'Social Sharing'],
  },
  {
    title: 'Virtual Reality',
    subtitle: 'Full Immersion',
    description: 'Complete VR experiences for Meta Quest, HTC Vive, and browser-based WebXR VR.',
    href: '/xr-world/virtual-reality',
    image: '/images/xr-vr.jpg',
    features: ['6DOF Tracking', 'Controller Support', 'Room Scale', 'Multi-User'],
  },
  {
    title: 'Virtual Tour',
    subtitle: '360 Exploration',
    description: 'Interactive panoramic tours with hotspots, floor plans, and seamless navigation.',
    href: '/xr-world/virtual-tour',
    image: '/images/xr-virtual-tour.jpg',
    features: ['360° Panoramas', 'Hotspot Navigation', 'Floor Plans', 'VR Mode'],
  },
  {
    title: 'Pixel Streaming',
    subtitle: 'FLAGSHIP',
    description: 'Cloud-rendered real-time experiences streamed to any device — Unreal Engine quality in the browser.',
    href: '/xr-world/pixel-streaming',
    image: '/images/xr-pixel-streaming.jpg',
    features: ['Unreal Engine 5', 'Zero Latency', 'GPU Cloud', 'Enterprise Ready'],
    isFlagship: true,
  },
]

export default function XRWorldPage() {
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
              Immersive Technology Experiences
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              WebXR, WebAR, VR, virtual tours, and pixel streaming — no hardware required for web experiences.
            </p>
            <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">
              Explore XR World
            </Link>
          </div>
        </section>

        {/* Description */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg text-text-secondary mb-16">
              <p className="mb-6">
                VizTR XR World brings immersive technology to the browser. No headsets required for web experiences. No apps to download. No friction between your audience and your content.
              </p>
              <p className="mb-6">
                From WebAR product visualizations that let customers place furniture in their living room, to Pixel Streaming Unreal Engine 5 experiences that run on a phone — we build the future of spatial computing, today.
              </p>
              <p className="mb-6">
                Every XR experience we create is optimized for performance, accessibility, and reach. Your audience engages instantly, on any device, anywhere in the world.
              </p>
            </div>

            {/* Services Grid */}
            <section className="mb-16" aria-labelledby="xr-services-heading">
              <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 id="xr-services-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
                  Our XR Services
                </h2>
                <p className="text-text-secondary text-lg">Five technologies, infinite possibilities</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {xrServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className={cn(
                      'group relative card rounded-2xl overflow-hidden border-border',
                      'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                      service.isFlagship && 'ring-2 ring-accent/50 bg-gradient-to-br from-accent/10 to-transparent'
                    )}
                  >
                    {service.isFlagship && (
                      <div className="absolute top-4 right-4 z-10 badge bg-accent text-white text-xs">FLAGSHIP</div>
                    )}
                    <div className="aspect-video w-full bg-bg-secondary relative overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className={cn('p-6', service.isFlagship ? 'relative z-10' : '')}>
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">{service.subtitle}</span>
                      <h3 className="font-display font-bold text-xl mb-3 text-text-primary">{service.title}</h3>
                      <p className="text-text-secondary text-sm mb-6 line-clamp-2">{service.description}</p>
                      <span className={cn('inline-flex items-center gap-2 font-medium transition-colors', service.isFlagship ? 'text-white bg-accent px-4 py-2 rounded-full hover:bg-accent-hover' : 'text-accent hover:text-accent-hover')}>
                        {service.isFlagship ? 'Launch Demo' : 'Learn More'}
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Experience Preview */}
            <section className="mb-16" aria-labelledby="xr-preview-heading">
              <header className="text-center max-w-3xl mx-auto mb-12">
                <h2 id="xr-preview-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Try XR Now</h2>
                <p className="text-text-secondary text-lg">Interactive demos — experience them in your browser</p>
              </header>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'WebAR', subtitle: 'Place 3D models in your space', desc: 'Experience augmented reality directly in your browser — no app required.', href: '/xr-world/webar', cta: 'View Sample' },
                  { title: 'WebXR', subtitle: 'Immersive 3D in your browser', desc: 'Full 3D experiences accessible from any device with a web browser.', href: '/xr-world/webxr', cta: 'Launch Demo' },
                  { title: 'VR', subtitle: 'Full virtual reality experience', desc: 'Complete immersion with headset support for architectural walkthroughs.', href: '/xr-world/virtual-reality', cta: 'Request Access' },
                  { title: 'Virtual Tour', subtitle: '360 degree property tour', desc: 'Interactive panoramic tours with hotspots and seamless navigation.', href: '/xr-world/virtual-tour', cta: 'Explore Tour' },
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="group relative card rounded-2xl overflow-hidden border-border bg-gradient-to-br from-bg-card to-bg-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">{item.subtitle}</span>
                      <h3 className="font-display font-bold text-xl mb-3 text-text-primary">{item.title}</h3>
                      <p className="text-text-secondary text-sm mb-6 flex-1 line-clamp-2">{item.desc}</p>
                      <span className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-hover transition-colors mt-auto">{item.cta}<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-4">Ready to Enter the XR World?</h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">Let us build immersive experiences that engage your audience like never before.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary px-8 py-3 text-lg">Start Your XR Project</Link>
                <Link href="/xr-world/pixel-streaming" className="btn btn-secondary px-8 py-3 text-lg">View Flagship: Pixel Streaming</Link>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}