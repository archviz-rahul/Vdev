import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const adminPassword = await hash('password123', 12)
  const managerPassword = await hash('password123', 12)
  const userPassword = await hash('password123', 12)

  await prisma.user.upsert({
    where: { email: 'admin@viztr.com' },
    update: {},
    create: {
      email: 'admin@viztr.com',
      name: 'Admin User',
      role: 'admin',
      passwordHash: adminPassword,
      emailVerified: new Date(),
    },
  })

  await prisma.user.upsert({
    where: { email: 'manager@viztr.com' },
    update: {},
    create: {
      email: 'manager@viztr.com',
      name: 'Manager User',
      role: 'manager',
      passwordHash: managerPassword,
      emailVerified: new Date(),
    },
  })

  await prisma.user.upsert({
    where: { email: 'user@viztr.com' },
    update: {},
    create: {
      email: 'user@viztr.com',
      name: 'Standard User',
      role: 'user',
      passwordHash: userPassword,
      emailVerified: new Date(),
    },
  })

  const projects = [
    {
      title: 'Luxury Villa - Beverly Hills',
      slug: 'luxury-villa-beverly-hills',
      description: 'Exterior visualization of a luxury villa in Beverly Hills featuring modern architecture with floor-to-ceiling windows and infinity pool.',
      type: 'exterior' as const,
      status: 'published' as const,
      featured: true,
      thumbnailUrl: '/images/portfolio/luxury-villa-thumb.jpg',
      tags: ['residential', 'luxury', 'modern'],
    },
    {
      title: 'Penthouse Interior - Manhattan',
      slug: 'penthouse-interior-manhattan',
      description: 'Interior visualization of a Manhattan penthouse with panoramic city views, minimalist design, and custom furnishings.',
      type: 'interior' as const,
      status: 'published' as const,
      featured: true,
      thumbnailUrl: '/images/portfolio/penthouse-thumb.jpg',
      tags: ['residential', 'interior', 'luxury'],
    },
    {
      title: 'Virtual Tour - Art Gallery',
      slug: 'virtual-tour-art-gallery',
      description: 'Immersive 360° virtual tour of a contemporary art gallery with interactive hotspots and guided navigation.',
      type: 'xr' as const,
      status: 'published' as const,
      featured: true,
      thumbnailUrl: '/images/portfolio/gallery-tour-thumb.jpg',
      tags: ['xr', 'virtual-tour', 'commercial'],
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    })
  }

  const services = [
    {
      title: 'Exterior Visualization',
      slug: 'exterior-visualization',
      description: 'Photorealistic exterior renders that bring architectural designs to life before construction begins.',
      type: 'studio' as const,
      featured: true,
      icon: 'building',
      benefits: ['Photorealistic quality', 'Fast turnaround', 'Unlimited revisions'],
    },
    {
      title: 'Interior Visualization',
      slug: 'interior-visualization',
      description: 'Stunning interior renders showcasing materials, lighting, and spatial design with precision.',
      type: 'studio' as const,
      featured: true,
      icon: 'armchair',
      benefits: ['Material accuracy', 'Lighting simulation', 'Space planning'],
    },
    {
      title: 'Walkthrough Animation',
      slug: 'walkthrough-animation',
      description: 'Cinematic walkthrough animations that guide viewers through architectural spaces.',
      type: 'studio' as const,
      featured: true,
      icon: 'video',
      benefits: ['Cinematic quality', 'Interactive paths', 'Narration support'],
    },
    {
      title: 'Virtual Reality Tours',
      slug: 'virtual-reality-tours',
      description: 'Immersive VR experiences that transport clients into architectural spaces.',
      type: 'xr' as const,
      featured: true,
      icon: 'glasses',
      benefits: ['Full immersion', 'Multi-platform', 'Real-time interaction'],
    },
    {
      title: 'WebXR Experiences',
      slug: 'webxr-experiences',
      description: 'Browser-based XR experiences requiring no app installation.',
      type: 'xr' as const,
      featured: true,
      icon: 'globe',
      benefits: ['No installation', 'Cross-platform', 'Shareable links'],
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    })
  }

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Johnson Properties',
      content: 'VizTR transformed our pre-sales process. The VR tours helped us sell 40% more units before construction was complete.',
      rating: 5,
      featured: true,
    },
    {
      name: 'Michael Chen',
      role: 'Principal Architect, Chen Design',
      content: 'The quality of their visualization work is unmatched. Our clients can now see exactly what they are getting before breaking ground.',
      rating: 5,
      featured: true,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director, Luxury Homes Inc',
      content: 'The interactive web experiences VizTR created have become our most effective marketing tool. Engagement increased by 300%.',
      rating: 5,
      featured: true,
    },
  ]

  for (const testimonial of testimonials) {
    const existing = await prisma.testimonial.findFirst({ where: { name: testimonial.name } })
    if (!existing) {
      await prisma.testimonial.create({ data: testimonial })
    }
  }

  const faqs = [
    {
      question: 'What is architectural visualization?',
      answer: 'Architectural visualization is the process of creating realistic images, animations, and interactive experiences from architectural designs, helping stakeholders visualize projects before construction.',
      category: 'general',
      order: 1,
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects are completed within 5-10 business days, depending on complexity. Simple exterior renders take 3-5 days, while complex VR experiences may take 2-3 weeks.',
      category: 'general',
      order: 2,
    },
    {
      question: 'What file formats do you deliver?',
      answer: 'We deliver high-resolution images (PNG, JPG), animations (MP4, MOV), 3D models (GLB, FBX), and interactive web experiences accessible via browser.',
      category: 'technical',
      order: 3,
    },
    {
      question: 'Do you support VR headsets?',
      answer: 'Yes, our XR experiences support Meta Quest, Apple Vision Pro, HTC Vive, and other WebXR-compatible headsets.',
      category: 'technical',
      order: 4,
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Pricing depends on project complexity. Exterior renders start at $500, interior at $750, and custom XR experiences are quoted based on scope.',
      category: 'pricing',
      order: 5,
    },
    {
      question: 'Can I request revisions?',
      answer: 'Yes, all projects include 2 rounds of revisions. Additional revisions can be purchased if needed.',
      category: 'general',
      order: 6,
    },
    {
      question: 'What file formats should I provide?',
      answer: 'We accept CAD files (DWG, DXF), 3D models (SKP, 3DS, OBJ), and PDF plans. Contact us if you have other formats.',
      category: 'technical',
      order: 7,
    },
    {
      question: 'Do you offer rush delivery?',
      answer: 'Yes, rush delivery is available for most projects at a 50% premium. Contact us for availability.',
      category: 'pricing',
      order: 8,
    },
  ]

  for (const faq of faqs) {
    const existing = await prisma.fAQ.findFirst({ where: { question: faq.question } })
    if (!existing) {
      await prisma.fAQ.create({ data: faq })
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
