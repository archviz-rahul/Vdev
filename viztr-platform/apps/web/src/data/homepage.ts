export interface HeroContent {
  images: string[];
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  tertiaryCTA: { label: string; href: string };
  overlayOpacity: number;
  slideshowSpeed: number;
}

export interface MarqueeContent {
  items: string[];
  speed: number;
  backgroundColor: string;
  visible: boolean;
}

export interface ServiceCategoryCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
  services: string[];
  backgroundType: 'default' | 'accent-gradient';
}

export interface ServiceCategoriesContent {
  studio: ServiceCategoryCard;
  xrWorld: ServiceCategoryCard;
}

export interface StudioPreviewCard {
  title: string;
  description: string;
  image: string;
  cta: { label: string; href: string };
  categoryTag: string;
}

export interface StudioPreviewContent {
  heading: string;
  subheading: string;
  cards: StudioPreviewCard[];
}

export interface XRPreviewCard {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  cta: { label: string; href: string };
  isFlagship?: boolean;
}

export interface XRPreviewContent {
  heading: string;
  subheading: string;
  cards: XRPreviewCard[];
}

export interface ShowreelContent {
  heading: string;
  subheading: string;
  videoUrl: string;
  posterUrl: string;
  cta: { label: string; href: string };
  visible: boolean;
}

export interface PortfolioPreviewCard {
  id: string;
  title: string;
  category: string;
  image: string;
  location?: string;
  clientName?: string;
}

export interface PortfolioPreviewContent {
  heading: string;
  subheading: string;
  filterCategories: string[];
  cards: PortfolioPreviewCard[];
  browseMore: { label: string; href: string };
}

export interface XRExperienceCard {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  cta: { label: string; href: string };
}

export interface XRExperienceContent {
  heading: string;
  subheading: string;
  cards: XRExperienceCard[];
}

export const homepageData = {
  hero: {
    images: [
      '/images/hero-1.jpg',
      '/images/hero-2.jpg',
      '/images/hero-3.jpg',
    ],
    headline: 'Where Architecture Meets Immersive Reality',
    subheadline: 'Premium visualization, extended reality, and pixel-perfect delivery for architects, developers, and designers.',
    primaryCTA: { label: 'Start Your Project', href: '/contact' },
    secondaryCTA: { label: 'Book Consultation', href: '/book-consultation' },
    tertiaryCTA: { label: 'Explore XR World', href: '/xr-world' },
    overlayOpacity: 0.4,
    slideshowSpeed: 5000,
  } as HeroContent,

  marquee: {
    items: [
      'EXTERIOR',
      'INTERIOR',
      'WALKTHROUGH',
      'WebXR',
      'WebAR',
      'Virtual Reality',
      'Virtual Tour',
      'Pixel Streaming',
    ],
    speed: 30000,
    backgroundColor: 'var(--primary)',
    visible: true,
  } as MarqueeContent,

  serviceCategories: {
    studio: {
      title: 'Studio',
      subtitle: 'Architecture Visualization Studio',
      description: 'Photorealistic renders, cinematic walkthroughs, and detailed visual narratives for architectural projects.',
      image: '/images/studio-category.jpg',
      cta: { label: 'Explore Studio', href: '/studio' },
      services: ['Exterior Visualization', 'Interior Visualization', 'Walkthrough'],
      backgroundType: 'default',
    },
    xrWorld: {
      title: 'XR World',
      subtitle: 'Immersive Technology Experiences',
      description: 'WebXR, WebAR, VR, virtual tours, and pixel streaming — no hardware required for web experiences.',
      image: '/images/xr-category.jpg',
      cta: { label: 'Explore XR World', href: '/xr-world' },
      services: ['WebXR', 'WebAR', 'Virtual Reality', 'Virtual Tour', 'Pixel Streaming'],
      backgroundType: 'accent-gradient',
    },
  } as ServiceCategoriesContent,

  studioPreview: {
    heading: 'Studio Services',
    subheading: 'Bringing architectural visions to life through precision visualization',
    cards: [
      {
        title: 'Exterior Visualization',
        description: 'Photorealistic exterior renders that showcase architectural form, materials, and environment.',
        image: '/images/exterior-preview.jpg',
        cta: { label: 'View Service', href: '/studio/exterior' },
        categoryTag: 'Studio',
      },
      {
        title: 'Interior Visualization',
        description: 'Detailed interior scenes with accurate lighting, materials, and spatial composition.',
        image: '/images/interior-preview.jpg',
        cta: { label: 'View Service', href: '/studio/interior' },
        categoryTag: 'Studio',
      },
      {
        title: 'Walkthrough Animation',
        description: 'Cinematic flythrough animations that bring architectural spaces to life.',
        image: '/images/walkthrough-preview.jpg',
        cta: { label: 'View Service', href: '/studio/walkthrough' },
        categoryTag: 'Studio',
      },
    ],
  } as StudioPreviewContent,

  xrPreview: {
    heading: 'XR World Services',
    subheading: 'Immersive experiences built for the browser — no downloads required',
    cards: [
      {
        title: 'WebXR',
        subtitle: 'Extended Reality',
        description: 'Immersive 3D experiences accessible through any web browser.',
        image: '/images/webxr-preview.jpg',
        cta: { label: 'Learn More', href: '/xr-world/webxr' },
      },
      {
        title: 'WebAR',
        subtitle: 'Augmented Reality',
        description: 'Place virtual objects in your real world using your phone camera.',
        image: '/images/webar-preview.jpg',
        cta: { label: 'Learn More', href: '/xr-world/webar' },
      },
      {
        title: 'Virtual Reality',
        subtitle: 'Full Immersion',
        description: 'Complete VR experiences for headsets and browsers.',
        image: '/images/vr-preview.jpg',
        cta: { label: 'Learn More', href: '/xr-world/virtual-reality' },
      },
      {
        title: 'Virtual Tour',
        subtitle: '360 Exploration',
        description: 'Interactive panoramic tours with hotspots and navigation.',
        image: '/images/virtual-tour-preview.jpg',
        cta: { label: 'Learn More', href: '/xr-world/virtual-tour' },
      },
      {
        title: 'Pixel Streaming',
        subtitle: 'FLAGSHIP',
        description: 'Cloud-rendered real-time experiences streamed to any device.',
        image: '/images/pixel-streaming-preview.jpg',
        cta: { label: 'Launch Demo', href: '/xr-world/pixel-streaming' },
        isFlagship: true,
      },
    ],
  } as XRPreviewContent,

  showreel: {
    heading: 'VizTR Showreel',
    subheading: 'Watch our work in motion',
    videoUrl: '/videos/showreel.mp4',
    posterUrl: '/images/showreel-poster.jpg',
    cta: { label: 'View Portfolio', href: '/portfolio' },
    visible: true,
  } as ShowreelContent,

  portfolioPreview: {
    heading: 'Our Work',
    subheading: 'Selected projects from our portfolio',
    filterCategories: ['All', 'Exterior', 'Interior', 'Animation'],
    cards: [
      { id: '1', title: 'Luxury Villa', category: 'Exterior', image: '/images/portfolio-1.jpg', location: 'Beverly Hills, CA' },
      { id: '2', title: 'Modern Penthouse', category: 'Interior', image: '/images/portfolio-2.jpg', location: 'New York, NY' },
      { id: '3', title: 'Commercial Tower', category: 'Exterior', image: '/images/portfolio-3.jpg', location: 'Dubai, UAE' },
      { id: '4', title: 'Residential Complex', category: 'Animation', image: '/images/portfolio-4.jpg', location: 'London, UK' },
      { id: '5', title: 'Boutique Hotel', category: 'Interior', image: '/images/portfolio-5.jpg', location: 'Paris, FR' },
      { id: '6', title: 'Mixed-Use Development', category: 'Exterior', image: '/images/portfolio-6.jpg', location: 'Singapore' },
    ],
    browseMore: { label: 'Browse More', href: '/portfolio' },
  } as PortfolioPreviewContent,

  xrExperience: {
    heading: 'Experience the Future',
    subheading: 'Interactive XR demos — try them in your browser',
    cards: [
      {
        title: 'WebAR',
        subtitle: 'Place 3D models in your space',
        description: 'Experience augmented reality directly in your browser — no app required.',
        image: '/images/xr-webar.jpg',
        cta: { label: 'View Sample', href: '/xr-world/webar' },
      },
      {
        title: 'WebXR',
        subtitle: 'Immersive 3D in your browser',
        description: 'Full 3D experiences accessible from any device with a web browser.',
        image: '/images/xr-webxr.jpg',
        cta: { label: 'Launch Demo', href: '/xr-world/webxr' },
      },
      {
        title: 'VR',
        subtitle: 'Full virtual reality experience',
        description: 'Complete immersion with headset support for architectural walkthroughs.',
        image: '/images/xr-vr.jpg',
        cta: { label: 'Request Access', href: '/xr-world/virtual-reality' },
      },
      {
        title: 'Virtual Tour',
        subtitle: '360 degree property tour',
        description: 'Interactive panoramic tours with hotspots and seamless navigation.',
        image: '/images/xr-virtual-tour.jpg',
        cta: { label: 'Explore Tour', href: '/xr-world/virtual-tour' },
      },
    ],
  } as XRExperienceContent,
};