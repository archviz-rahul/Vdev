'use client'

import { useXRStore } from './xr.store'
import { Glasses } from 'lucide-react'

export function ProgressiveReveal() {
  const { teleportCount, deviceCapabilities, currentMode, setMode } = useXRStore()
  const showVR = teleportCount >= 3 && deviceCapabilities.immersiveVR && currentMode === 'tour'

  if (!showVR) return null

  return (
    <button
      onClick={() => setMode('vr')}
      className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-medium text-white shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4"
    >
      <Glasses className="h-4 w-4" />
      Enter VR
    </button>
  )
}
