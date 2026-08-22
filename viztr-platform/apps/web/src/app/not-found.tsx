import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@viztr/utils'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center px-6">
          <h1 className="font-display font-bold text-9xl md:text-[12rem] text-accent/20 mb-4">
            404
          </h1>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="btn btn-primary inline-flex"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}