export function getThemeFromStorage(): 'light' | 'dark' | 'system' {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem('viztr-theme')
  if (stored && ['light', 'dark', 'system'].includes(stored)) {
    return stored as 'light' | 'dark' | 'system'
  }
  return 'system'
}

export function setThemeToStorage(theme: 'light' | 'dark' | 'system') {
  if (typeof window !== 'undefined') {
    localStorage.setItem('viztr-theme', theme)
  }
}

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: 'light' | 'dark' | 'system') {
  const resolved = theme === 'system' ? getSystemTheme() : theme
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)
}