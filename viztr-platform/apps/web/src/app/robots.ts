import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/client-portal/', '/client-access/'],
      },
    ],
    sitemap: 'https://viztr.io/sitemap.xml',
  }
}
