import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: {
    default: 'VizTR — Architecture Visualization Studio + XR World Platform',
    template: '%s | VizTR',
  },
  description: 'Premium architectural visualization, immersive XR experiences, WebXR, WebAR, Virtual Reality, Virtual Tours, and Pixel Streaming for real estate and design professionals.',
  keywords: ['architectural visualization', 'XR', 'WebXR', 'WebAR', 'virtual reality', 'virtual tour', 'pixel streaming', '3D rendering', 'walkthrough animation'],
  authors: [{ name: 'VizTR' }],
  creator: 'VizTR',
  publisher: 'VizTR',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viztr.com',
    siteName: 'VizTR',
    title: 'VizTR — Architecture Visualization Studio + XR World Platform',
    description: 'Premium architectural visualization and immersive XR experiences.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VizTR Architecture Visualization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VizTR — Architecture Visualization Studio + XR World Platform',
    description: 'Premium architectural visualization and immersive XR experiences.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}