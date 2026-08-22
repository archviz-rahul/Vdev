export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavConfig {
  items: NavItem[];
}

export const navConfig: NavConfig = {
  items: [
    { label: 'Home', href: '/' },
    {
      label: 'Studio',
      href: '/studio',
      children: [
        { label: 'Exterior Visualization', href: '/studio/exterior' },
        { label: 'Interior Visualization', href: '/studio/interior' },
        { label: 'Walkthrough Animation', href: '/studio/walkthrough' },
      ],
    },
    {
      label: 'XR World',
      href: '/xr-world',
      children: [
        { label: 'WebXR', href: '/xr-world/webxr' },
        { label: 'WebAR', href: '/xr-world/webar' },
        { label: 'Virtual Reality', href: '/xr-world/virtual-reality' },
        { label: 'Virtual Tour', href: '/xr-world/virtual-tour' },
        { label: 'Pixel Streaming', href: '/xr-world/pixel-streaming' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],
}

export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  resolvedTheme: 'light' | 'dark'
}