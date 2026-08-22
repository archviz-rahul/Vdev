'use client'

import { useEffect } from 'react'
import { Glasses, Smartphone, Compass } from 'lucide-react'
import { useXRStore } from './xr.store'

export function ModeManager({ children }: { children: React.ReactNode }) {
  const { currentMode, setMode, deviceCapabilities, setDeviceCapabilities } = useXRStore()

  useEffect(() => {
    const detect = async () => {
      const webxr = 'xr' in navigator
      let immersiveVR = false
      let immersiveAR = false

      if (webxr && navigator.xr) {
        try {
          immersiveVR = await navigator.xr.isSessionSupported('immersive-vr')
          immersiveAR = await navigator.xr.isSessionSupported('immersive-ar')
        } catch {}
      }

      setDeviceCapabilities({ webxr, immersiveVR, immersiveAR })
    }
    detect()
  }, [setDeviceCapabilities])

  return (
    <div className="relative h-full w-full">
      {children}
      <div className="absolute right-4 top-4 z-30 flex gap-2">
        <button
          onClick={() => setMode('tour')}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            currentMode === 'tour' ? 'bg-accent text-white' : 'bg-card text-text-secondary hover:bg-card/80'
          }`}
        >
          <Compass className="h-3.5 w-3.5" />
          Tour
        </button>
        {deviceCapabilities.immersiveVR && (
          <button
            onClick={() => setMode('vr')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              currentMode === 'vr' ? 'bg-accent text-white' : 'bg-card text-text-secondary hover:bg-card/80'
            }`}
          >
            <Glasses className="h-3.5 w-3.5" />
            VR
          </button>
        )}
        {deviceCapabilities.immersiveAR && (
          <button
            onClick={() => setMode('ar')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              currentMode === 'ar' ? 'bg-accent text-white' : 'bg-card text-text-secondary hover:bg-card/80'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5" />
            AR
          </button>
        )}
      </div>
    </div>
  )
}
