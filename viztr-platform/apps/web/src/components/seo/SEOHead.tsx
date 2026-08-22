import type { Metadata } from 'next'

interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noIndex?: boolean
  schema?: Record<string, any>
}

export function generateSEOMetadata(config: SEOConfig, baseUrl = 'https://viztr.io'): Metadata {
  const url = config.canonical || baseUrl
  const image = config.ogImage || `${baseUrl}/og-default.png`

  return {
    title: config.title.length > 60 ? config.title.slice(0, 57) + '...' : config.title,
    description: config.description.length > 160 ? config.description.slice(0, 157) + '...' : config.description,
    alternates: { canonical: url },
    robots: config.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: 'VizTR',
      images: [{ url: image, width: 1200, height: 630, alt: config.title }],
      type: (config.ogType as any) || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [image],
    },
  }
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'VizTR - Architecture Visualization Studio',
          description: 'Architecture visualization and XR solutions for real estate, luxury vehicles, and product visualization.',
          url: 'https://viztr.io',
          priceRange: '$$',
          serviceType: ['3D Visualization', 'Virtual Reality', 'Augmented Reality', 'Architectural Visualization'],
        }),
      }}
    />
  )
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name,
          description,
          url,
          provider: { '@type': 'ProfessionalService', name: 'VizTR' },
        }),
      }}
    />
  )
}

export function ArticleSchema({ title, description, url, datePublished }: { title: string; description: string; url: string; datePublished: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          url,
          datePublished,
          author: { '@type': 'Organization', name: 'VizTR' },
        }),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  )
}
