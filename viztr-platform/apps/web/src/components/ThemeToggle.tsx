'use client'

import * as React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@viztr/utils'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-bg-secondary" aria-label="Theme toggle">
        <Monitor className="w-5 h-5 text-text-secondary" />
      </button>
    )
  }

  const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system']
  const currentIndex = themes.indexOf(theme as 'light' | 'dark' | 'system')
  const nextTheme = themes[(currentIndex + 1) % themes.length]

  const icons = {
    light: <Sun className="w-5 h-5" />,
    dark: <Moon className="w-5 h-5" />,
    system: <Monitor className="w-5 h-5" />,
  }

  const labels = {
    light: 'Light mode',
    dark: 'Dark mode',
    system: 'System preference',
  }

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className={cn(
        'p-2 rounded-lg transition-all duration-200',
        'hover:bg-bg-secondary',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
      )}
      aria-label={`Current: ${labels[theme as keyof typeof labels]}. Click for ${labels[nextTheme]}`}
      title={`Current: ${labels[theme as keyof typeof labels]}. Click for ${labels[nextTheme]}`}
    >
      {icons[resolvedTheme as keyof typeof icons]}
    </button>
  )
}