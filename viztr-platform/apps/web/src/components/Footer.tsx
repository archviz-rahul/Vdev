import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { cn } from '@viztr/utils'

const studioLinks = [
  { label: 'Exterior Visualization', href: '/studio/exterior' },
  { label: 'Interior Visualization', href: '/studio/interior' },
  { label: 'Walkthrough Animation', href: '/studio/walkthrough' },
]

const xrWorldLinks = [
  { label: 'WebXR', href: '/xr-world/webxr' },
  { label: 'WebAR', href: '/xr-world/webar' },
  { label: 'Virtual Reality', href: '/xr-world/virtual-reality' },
  { label: 'Virtual Tour', href: '/xr-world/virtual-tour' },
  { label: 'Pixel Streaming', href: '/xr-world/pixel-streaming' },
]

const pageLinks = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Consultation', href: '/book-consultation' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/viztr', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/viztr', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/viztr', label: 'Twitter/X' },
  { icon: Youtube, href: 'https://youtube.com/@viztr', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl text-text-primary mb-4 block">
              VizTR
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Premium architectural visualization and immersive XR experiences for real estate, architecture, and design professionals.
            </p>
          </div>

          {/* Column 2: Studio */}
          <div>
            <h3 className="font-medium text-text-primary mb-4 uppercase tracking-wider text-sm">Studio</h3>
            <nav className="space-y-3">
              {studioLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-accent transition-colors text-sm block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: XR World */}
          <div>
            <h3 className="font-medium text-text-primary mb-4 uppercase tracking-wider text-sm">XR World</h3>
            <nav className="space-y-3">
              {xrWorldLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-accent transition-colors text-sm block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-medium text-text-primary mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <address className="not-italic space-y-3 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-text-secondary" aria-hidden="true" />
                <a href="mailto:hello@viztr.com" className="hover:text-accent transition-colors">hello@viztr.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-text-secondary" aria-hidden="true" />
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-text-secondary" aria-hidden="true" />
                <span>123 Visualization Ave, Tech City</span>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'p-2 rounded-lg transition-all duration-200',
                      'bg-bg-card border border-border',
                      'hover:bg-accent hover:border-accent hover:text-white',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary text-sm">
              © 2026 VizTR. All rights reserved.
            </p>
            <nav className="flex items-center gap-6" aria-label="Legal">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}