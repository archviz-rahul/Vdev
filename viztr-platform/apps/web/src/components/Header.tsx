'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User } from 'lucide-react'
import { cn } from '@viztr/utils'
import { DropdownMenu } from './DropdownMenu'
import { ThemeToggle } from './ThemeToggle'
import { navConfig } from '@/types'

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const handleDropdownClick = (label: string) => {
    if (window.innerWidth < 768) {
      setOpenDropdown(openDropdown === label ? null : label)
    }
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 h-16',
      'glass backdrop-blur-xl border-b border-border',
      'transition-all duration-300'
    )}>
      <div className="container mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full" aria-label="Main navigation">
          {/* Logo - Left */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-text-primary hover:opacity-80 transition-opacity"
            aria-label="VizTR Home"
          >
            VizTR
          </Link>

          {/* Center Navigation */}
          <div className={cn(
            'hidden md:flex items-center gap-8',
            isMobileMenuOpen && 'md:hidden'
          )}>
            {navConfig.items.map((item) => {
              if (item.children && item.children.length > 0) {
                return (
                  <DropdownMenu
                    key={item.label}
                    trigger={
                      <button
                        onClick={() => handleDropdownClick(item.label)}
                        className={cn(
                          'font-medium text-sm tracking-wide text-text-primary',
                          'hover:text-accent transition-colors',
                          'relative py-2',
                          isActive(item.href) && 'text-accent'
                        )}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        {isActive(item.href) && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                        )}
                      </button>
                    }
                    items={item.children.map(child => ({
                      label: child.label,
                      href: child.href,
                    }))}
                  />
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'font-medium text-sm tracking-wide text-text-primary',
                    'hover:text-accent transition-colors',
                    'relative py-2',
                    isActive(item.href) && 'text-accent'
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <Link
              href="/client-access"
              className={cn(
                'p-2 rounded-lg transition-all duration-200',
                'hover:bg-bg-secondary',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label="Client login"
            >
              <User className="w-5 h-5 text-text-primary" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                'md:hidden p-2 rounded-lg transition-all duration-200',
                'hover:bg-bg-secondary',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" 
               onClick={() => setIsMobileMenuOpen(false)} />
        )}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-50 animate-slide-down">
            <div className="card bg-bg-card border-border shadow-xl mx-4 mt-4 rounded-xl overflow-hidden">
              <nav className="py-4 space-y-2" aria-label="Mobile navigation">
                {navConfig.items.map((item) => {
                  if (item.children && item.children.length > 0) {
                    const [isSubOpen, setIsSubOpen] = React.useState(false)
                    return (
                      <div key={item.label} className="px-4">
                        <button
                          onClick={() => setIsSubOpen(!isSubOpen)}
                          className={cn(
                            'w-full flex items-center justify-between py-3 text-left',
                            'font-medium text-text-primary hover:text-accent transition-colors'
                          )}
                          aria-expanded={isSubOpen}
                        >
                          {item.label}
                          {isSubOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        {isSubOpen && (
                          <div className="pl-4 space-y-1 pb-2 animate-fade-in">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-2 text-sm text-text-secondary hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'block px-4 py-3',
                        'font-medium text-text-primary hover:text-accent transition-colors',
                        isActive(item.href) && 'text-accent bg-bg-secondary'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}