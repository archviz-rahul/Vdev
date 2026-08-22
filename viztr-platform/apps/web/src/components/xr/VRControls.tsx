'use client'

import { useEffect, useRef, useState } from 'react'
import { useXRStore } from './xr.store'

export function VRControls() {
  const { currentMode } = useXRStore()
  const [vrSupported, setVrSupported] = useState(false)
  const [inVR, setInVR] = useState(false)
  const xrRef = useRef<XRSession | null>(null)

  useEffect(() => {
    if ('xr' in navigator) {
      navigator.xr?.isSessionSupported('immersive-vr').then(setVrSupported).catch(() => {})
    }
  }, [])

  const startVR = async () => {
    if (!('xr' in navigator) || !navigator.xr) return
    try {
      const session = await navigator.xr.requestSession('immersive-vr', {
        optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'],
      })
      xrRef.current = session
      setInVR(true)
      session.addEventListener('end', () => {
        setInVR(false)
        xrRef.current = null
      })
    } catch (e) {
      console.warn('Failed to start VR session:', e)
    }
  }

  const stopVR = () => {
    xrRef.current?.end()
    setInVR(false)
  }

  if (currentMode !== 'vr') return null

  return (
    <div className="absolute bottom-4 left-4 z-30 space-y-2">
      {!inVR ? (
        <button
          onClick={startVR}
          disabled={!vrSupported}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
        >
          Enter VR
        </button>
      ) : (
        <button
          onClick={stopVR}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white"
        >
          Exit VR
        </button>
      )}
      {inVR && (
        <div className="rounded-lg bg-card/90 px-3 py-2 text-xs text-text-secondary backdrop-blur-sm">
          Use controller trigger to select hotspots • Grip to teleport
        </div>
      )}
    </div>
  )
}
