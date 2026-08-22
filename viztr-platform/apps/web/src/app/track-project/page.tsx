import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TrackProjectForm } from './TrackProjectForm'

export const metadata: Metadata = {
  title: 'Track Your Project',
  description: 'Track your VizTR project progress in real-time. Enter your Project ID and access code to view timeline, deliverables, and updates.',
}

export default function TrackProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Track Your Project</h1>
            <p className="text-text-secondary text-lg">Real-time updates on your project status</p>
          </div>
          <TrackProjectForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}