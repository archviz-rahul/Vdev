import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ClientAccessForm } from './ClientAccessForm'

export const metadata: Metadata = {
  title: 'Client Access',
  description: 'VizTR Client Portal — Access your projects, track progress, view deliverables, and launch XR experiences.',
}

export default function ClientAccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 flex items-center justify-center py-20 px-6">
        <ClientAccessForm />
      </main>
      <Footer />
    </div>
  )
}