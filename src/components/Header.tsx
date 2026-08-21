'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/packages/utils/src/cn';
import { ThemeToggle } from './ThemeToggle';
import { DropdownMenu } from './DropdownMenu';

const STUDIO_LINKS = [
  { label: 'Exterior Visualization', href: '/studio/exterior' },
  { label: 'Interior Visualization', href: '/studio/interior' },
  { label: 'Walkthrough Animation', href: '/studio/walkthrough' },
];

const XR_WORLD_LINKS = [
  { label: 'WebXR', href: '/xr-world/webxr' },
  { label: 'WebAR', href: '/xr-world/webar' },
  { label: 'Virtual Reality', href: '/xr-world/virtual-reality' },
  { label: 'Virtual Tour', href: '/xr-world/virtual-tour' },
  { label: 'Pixel Streaming', href: '/xr-world/pixel-streaming' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 h-[64px] border-b border-[var(--border)] glass transition-all duration-300">
      <div className="max-w-[1280px] mx-auto h-full px-[1.5rem] flex items-center justify-between">
        {/* Logo Left */}
        <Link href="/" className="font-display font-bold text-[1.5rem] text-[var(--text-primary)]">
          VizTR
        </Link>

        {/* Nav Center - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "py-1 font-medium text-[0.9rem] tracking-wide transition-colors border-b-2",
              isLinkActive('/') 
                ? "border-[var(--primary)] text-white" 
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            )}
          >
            Home
          </Link>
          <DropdownMenu label="Studio" items={STUDIO_LINKS} />
          <DropdownMenu label="XR World" items={XR_WORLD_LINKS} />
          <Link
            href="/contact"
            className={cn(
              "py-1 font-medium text-[0.9rem] tracking-wide transition-colors border-b-2",
              isLinkActive('/contact')
                ? "border-[var(--primary)] text-white"
                : "border-transparent text-[var(--text-secondary)] hover:text-white"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <Link
            href="/client-access"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold rounded-full transition-all shadow-lg"
          >
            <User size={16} />
            <span>Login</span>
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)] p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-[1.5rem]">VizTR</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-[var(--border)]">
                Home
              </Link>
              
              <div className="py-2 border-b border-[var(--border)]">
                <p className="text-sm text-[var(--text-secondary)] mb-4">Studio</p>
                <div className="flex flex-col gap-4 pl-4">
                  {STUDIO_LINKS.map(link => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-[var(--border)]">
                <p className="text-sm text-[var(--text-secondary)] mb-4">XR World</p>
                <div className="flex flex-col gap-4 pl-4">
                  {XR_WORLD_LINKS.map(link => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2">
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
