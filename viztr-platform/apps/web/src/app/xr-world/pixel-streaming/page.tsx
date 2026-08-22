import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PixelStreamingContent } from './PixelStreamingContent'

export const metadata: Metadata = {
  title: 'Pixel Streaming — Cloud-Rendered Real-Time Experiences',
  description: 'VizTR flagship service: Unreal Engine 5 quality streamed to any browser. Zero local hardware required. Real-time photorealistic experiences for architecture, design, and presentation.',
}

export default function PixelStreamingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <PixelStreamingContent />
      </main>
      <Footer />
    </div>
  )
}