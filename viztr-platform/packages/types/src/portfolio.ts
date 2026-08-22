export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  galleryImages: string[];
  video?: string;
  panorama?: string;
  model3d?: string;
  webxrLink?: string;
  category: 'exterior' | 'interior' | 'animation' | 'xr' | '360' | 'walkthrough';
  tags: string[];
  clientName?: string;
  location?: string;
  shortDescription: string;
  longDescription: string;
  featured: boolean;
  seo: SEOFields;
}

export interface Hotspot {
  id: string;
  yaw: number;
  pitch: number;
  action: 'teleport' | 'open_info' | 'play_media' | 'external';
  target: string;
  title: string;
}

export interface Annotation {
  id: string;
  text: string;
  hotspotId: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'panorama' | 'model3d';
  src: string;
  alt?: string;
  thumbnail?: string;
  poster?: string;
  title?: string;
}

export interface PanoramaScene {
  id: string;
  title: string;
  imageUrl: string;
  hotspots: Hotspot[];
  annotations: Annotation[];
  initialYaw?: number;
  initialPitch?: number;
  initialFov?: number;
  gyroscopeEnabled: boolean;
}