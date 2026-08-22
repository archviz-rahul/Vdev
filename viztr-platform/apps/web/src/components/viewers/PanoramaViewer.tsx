'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { X, Maximize, Minimize, Compass, MousePointer, Smartphone } from 'lucide-react'
import { cn } from '@viztr/utils'
import { Hotspot, Annotation } from '@viztr/types'

const MarzipanoViewer = dynamic(() => import('./MarzipanoViewerImpl').then(mod => mod.MarzipanoViewerImpl), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent border-t-transparent mx-auto mb-4" />
        <p>Loading panorama...</p>
      </div>
    </div>
  ),
})

interface PanoramaViewerProps {
  imageUrl: string
  hotspots?: Hotspot[]
  annotations?: Annotation[]
  initialYaw?: number
  initialPitch?: number
  initialFov?: number
  gyroscopeEnabled?: boolean
  onClose: () => void
  isOpen: boolean
}

export function PanoramaViewer({ 
  imageUrl, 
  hotspots = [], 
  annotations = [], 
  initialYaw = 0, 
  initialPitch = 0, 
  initialFov = 90,
  gyroscopeEnabled = true,
  onClose, 
  isOpen 
}: PanoramaViewerProps) {
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [gyroEnabled, setGyroEnabled] = React.useState(gyroscopeEnabled)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'f' || e.key === 'F') setIsFullscreen(!isFullscreen)
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  if (!isOpen) return null

  return (
    <div className={cn(
      'fixed inset-0 z-[100] flex items-center justify-center',
      'bg-black',
      isFullscreen ? 'fixed inset-0' : 'max-w-[90vw] max-h-[85vh] rounded-xl overflow-hidden'
    )}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
        <h2 className="text-white font-medium">360° Panorama</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setGyroEnabled(!gyroEnabled)}
            className={cn(
              'p-2 rounded-lg glass hover:bg-white/10 transition-colors',
              gyroEnabled && 'bg-accent/20 text-accent'
            )}
            aria-label={gyroEnabled ? 'Disable gyroscope' : 'Enable gyroscope'}
          >
            <Smartphone className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            aria-label="Close panorama"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Panorama Viewer */}
      <div className="w-full h-full relative">
        <MarzipanoViewer
          imageUrl={imageUrl}
          hotspots={hotspots}
          annotations={annotations}
          initialYaw={initialYaw}
          initialPitch={initialPitch}
          initialFov={initialFov}
          gyroscopeEnabled={gyroEnabled}
        />

        {/* Compass */}
        <div className="absolute bottom-6 right-6 z-10">
          <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
            <Compass className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Controls Hint */}
        <div className="absolute bottom-6 left-6 z-10 glass px-4 py-2 rounded-lg text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <MousePointer className="w-4 h-4" />
            <span>Drag to explore</span>
          </div>
        </div>
      </div>
    </div>
  )
}