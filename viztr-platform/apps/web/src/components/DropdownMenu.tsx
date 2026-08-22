'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'

interface DropdownMenuProps {
  trigger: React.ReactNode
  items: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
  className?: string
}

export function DropdownMenu({ trigger, items, className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={cn('relative inline-block', className)} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 origin-top-left animate-fade-in-down z-100">
          <div className="card bg-bg-card border-border shadow-xl rounded-xl py-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <span className="text-text-secondary">{item.icon}</span>}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}