export interface TrackProjectContent {
  heading: string;
  subheading: string;
  placeholderProjectId: string;
  placeholderAccessCode: string;
  buttonLabel: string;
}

export interface BenefitsContent {
  heading: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export interface HowItWorksContent {
  heading: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
}

export interface UseCaseContent {
  audience: string;
  problem: string;
  solution: string;
  benefit: string;
  cta: { label: string; href: string };
}

export interface UseCasesContent {
  heading: string;
  subheading: string;
  useCases: UseCaseContent[];
}

export interface TestimonialContent {
  quote: string;
  clientName: string;
  clientRole: string;
  company?: string;
  rating: number;
}

export interface TestimonialsContent {
  heading: string;
  testimonials: TestimonialContent[];
  stats: Array<{ label: string; value: string }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  heading: string;
  faqs: FAQItem[];
}

export interface FinalCTAContent {
  heading: string;
  subheading: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  tertiaryCTA?: { label: string; href: string };
}

export const extendedHomepageData = {
  trackProject: {
    heading: 'Track Your Project',
    subheading: 'Real-time updates on your project status',
    placeholderProjectId: 'PRJ-2026-XXXX',
    placeholderAccessCode: '••••••',
    buttonLabel: 'Track',
  } as TrackProjectContent,

  benefits: {
    heading: 'Why VizTR',
    benefits: [
      { icon: 'Sparkles', title: 'Premium Visual Presentation', description: 'Photorealistic quality that sells your vision before construction begins.' },
      { icon: 'Clock', title: 'Faster Client Approvals', description: 'Interactive experiences reduce decision cycles by up to 60%.' },
      { icon: 'Monitor', title: 'No Hardware Dependency', description: 'WebXR and virtual tours work on any device with a browser.' },
      { icon: 'MousePointer2', title: 'Real-time Immersive Interaction', description: 'Collaborate in real-time with clients anywhere in the world.' },
      { icon: 'TrendingUp', title: 'Improved Property Marketing', description: 'Stand out in listings with immersive 3D and virtual experiences.' },
      { icon: 'Shield', title: 'Stronger Buyer Confidence', description: 'Buyers explore every detail before committing.' },
      { icon: 'Globe', title: 'Scalable Digital Delivery', description: 'Reach global audiences without physical showrooms.' },
    ],
  } as BenefitsContent,

  howItWorks: {
    heading: 'How It Works',
    steps: [
      { number: 1, title: 'Share Your Requirements', description: 'Tell us about your project, goals, and vision through our brief form.' },
      { number: 2, title: 'We Create', description: 'VizTR produces photorealistic visuals or immersive XR experiences.' },
      { number: 3, title: 'Review & Collaborate', description: 'Real-time feedback and iteration in our client portal.' },
      { number: 4, title: 'Deliver & Track', description: 'Final delivery with ongoing project tracking and updates.' },
    ],
  } as HowItWorksContent,

  useCases: {
    heading: 'Built For Your Industry',
    subheading: 'Tailored solutions for every professional',
    useCases: [
      {
        audience: 'Real Estate Developers',
        problem: 'Hard to sell unbuilt properties',
        solution: 'Photorealistic renders and VR tours',
        benefit: 'Sell before breaking ground',
        cta: { label: 'View Developer Solutions', href: '/studio' },
      },
      {
        audience: 'Architects',
        problem: 'Clients struggle to visualize designs',
        solution: 'Interactive 3D and walkthroughs',
        benefit: 'Faster approvals',
        cta: { label: 'View Architect Solutions', href: '/studio' },
      },
      {
        audience: 'Interior Designers',
        problem: 'Materials and layouts hard to communicate',
        solution: 'Detailed interior renders',
        benefit: 'Clear client alignment',
        cta: { label: 'View Designer Solutions', href: '/studio/interior' },
      },
      {
        audience: 'Property Marketers',
        problem: 'Listings need standout visuals',
        solution: 'Cinematic renders and virtual tours',
        benefit: 'Higher engagement',
        cta: { label: 'View Marketing Solutions', href: '/xr-world' },
      },
      {
        audience: 'Enterprise Clients',
        problem: 'Complex projects need immersive presentation',
        solution: 'WebXR and Pixel Streaming',
        benefit: 'Boardroom-ready demos',
        cta: { label: 'View Enterprise Solutions', href: '/xr-world/pixel-streaming' },
      },
    ],
  } as UseCasesContent,

  testimonials: {
    heading: 'What Clients Say',
    testimonials: [
      {
        quote: 'VizTR transformed how we present our developments. The VR tours let buyers walk through properties before they exist.',
        clientName: 'Sarah Chen',
        clientRole: 'VP of Development',
        company: 'Meridian Properties',
        rating: 5,
      },
      {
        quote: 'The Pixel Streaming demo blew our board away. We approved the project in one meeting.',
        clientName: 'Marcus Johnson',
        clientRole: 'Principal Architect',
        company: 'Johnson & Associates',
        rating: 5,
      },
      {
        quote: 'Best visualization partner we\'ve worked with. Responsive, creative, and technically exceptional.',
        clientName: 'Elena Rodriguez',
        clientRole: 'Marketing Director',
        company: 'Luxe Estates International',
        rating: 5,
      },
    ],
    stats: [
      { label: 'Projects Delivered', value: '200+' },
      { label: 'Happy Clients', value: '50+' },
      { label: 'Countries Served', value: '15+' },
      { label: 'Satisfaction Rate', value: '99%' },
    ],
  } as TestimonialsContent,

  faq: {
    heading: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'What is architectural visualization?',
        answer: 'Photorealistic computer-generated imagery of buildings and spaces before construction, used for design validation, marketing, and client presentations.',
      },
      {
        question: 'What is WebXR?',
        answer: 'Web-based extended reality experiences that run in your browser without downloads or installations. Works on desktop, mobile, and VR headsets.',
      },
      {
        question: 'What is Pixel Streaming?',
        answer: 'Cloud-rendered real-time experiences streamed to any device with a browser. No heavy local hardware required — the GPU does the work in the cloud.',
      },
      {
        question: 'Do I need VR hardware for WebXR experiences?',
        answer: 'No. Our WebXR and virtual tour experiences work on any device with a browser. VR headsets enhance the experience but are not required.',
      },
      {
        question: 'How long does a project take?',
        answer: 'Typically 2-4 weeks depending on scope and complexity. Simple renders: 1-2 weeks. Complex XR experiences: 3-6 weeks.',
      },
      {
        question: 'What file formats do you deliver?',
        answer: 'MP4, MOV for video. PNG, TIFF, EXR for stills. GLB, GLTF, USDZ for 3D. Custom formats available on request.',
      },
      {
        question: 'Can I track my project progress?',
        answer: 'Yes. Use your Project ID and access code on our Track Project page to view real-time status, timeline, and deliverables.',
      },
      {
        question: 'How do I get started?',
        answer: 'Click "Start Your Project" or "Book a Consultation". We\'ll schedule a discovery call to understand your needs and provide a custom proposal.',
      },
    ],
  } as FAQContent,

  finalCTA: {
    heading: 'Ready to Transform Your Vision?',
    subheading: 'Let us bring your architectural projects to life with premium visualization and immersive XR.',
    primaryCTA: { label: 'Start Your Project', href: '/contact' },
    secondaryCTA: { label: 'Book Consultation', href: '/book-consultation' },
    tertiaryCTA: { label: 'Request Demo', href: '/contact?subject=demo' },
  } as FinalCTAContent,
};