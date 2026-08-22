'use client'

import { useEffect, useState } from 'react'
import { useXRStore } from './xr.store'

export function CinematicEntry({ children }: { children: React.ReactNode }) {
  const { isEntryComplete, completeEntry } = useXRStore()
  const [phase, setPhase] = useState<'black' | 'zoom' | 'done'>(isEntryComplete ? 'done' : 'black')

  useEffect(() => {
    if (isEntryComplete) return

    const t1 = setTimeout(() => setPhase('zoom'), 1000)
    const t2 = setTimeout(() => {
      setPhase('done')
      completeEntry()
    }, 3000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [isEntryComplete, completeEntry])

  if (isEntryComplete) return <>{children}</>

  return (
    <div className="relative h-full w-full">
      <div className={`absolute inset-0 z-50 bg-black transition-opacity duration-1000 ${phase === 'zoom' ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`transition-transform duration-2000 ${phase === 'zoom' ? 'scale-110' : 'scale-100'}`}>
        {children}
      </div>
    </div>
  )
}
