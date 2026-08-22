'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
import { X, Maximize, Minimize, Box, MousePointer, HelpCircle } from 'lucide-react'
import { cn } from '@viztr/utils'

const BabylonModelViewer = dynamic(() => import('./BabylonModelViewerImpl').then(mod => mod.BabylonModelViewerImpl), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-bg-secondary">
      <div className="text-center text-text-secondary">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent border-t-transparent mx-auto mb-4" />
        <p>Loading 3D model...</p>
      </div>
    </div>
  ),
})

interface ModelViewerProps {
  modelUrl: string
  title?: string
  onClose: () => void
  isOpen: boolean
  enableAR?: boolean
  enableVR?: boolean
}

export function ModelViewer({ modelUrl, title, onClose, isOpen, enableAR = true, enableVR = true }: ModelViewerProps) {
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [showHelp, setShowHelp] = React.useState(false)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'f' || e.key === 'F') setIsFullscreen(!isFullscreen)
    if (e.key === 'h' || e.key === 'H') setShowHelp(!showHelp)
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
        <div className="flex items-center gap-3">
          <Box className="w-5 h-5 text-accent" />
          <h2 className="text-white font-medium">{title || '3D Model Viewer'}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            aria-label={showHelp ? 'Hide controls help' : 'Show controls help'}
          >
            <HelpCircle className="w-5 h-5 text-white" />
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
            aria-label="Close 3D viewer"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* 3D Model Viewer */}
      <div className="w-full h-full relative">
        <BabylonModelViewer
          modelUrl={modelUrl}
          enableAR={enableAR}
          enableVR={enableVR}
        />

        {/* Controls Hint */}
        <div className="absolute bottom-6 left-6 right-6 z-10 glass px-4 py-2 rounded-lg text-white/80 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-1">
              <MousePointer className="w-4 h-4" />
              <span>Drag to rotate</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Scroll to zoom</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 bg-white/10 rounded text-xs">Shift</span>
              <span>+ Drag to pan</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 bg-white/10 rounded text-xs">F</span>
              <span>Fullscreen</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-2 py-0.5 bg-white/10 rounded text-xs">H</span>
              <span>Help</span>
            </div>
          </div>
        </div>

        {/* Help Modal */}
        {showHelp && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="glass max-w-md w-full mx-4 rounded-2xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl text-white">Controls Help</h3>
                <button onClick={() => setShowHelp(false)} className="p-2 rounded-lg glass hover:bg-white/10">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="space-y-4 text-white/90">
                {[
                  { keys: ['Mouse drag'], action: 'Rotate camera around model' },
                  { keys: ['Shift + Mouse drag'], action: 'Pan camera' },
                  { keys: ['Scroll wheel'], action: 'Zoom in/out' },
                  { keys: ['Double click'], action: 'Reset view' },
                  { keys: ['F'], action: 'Toggle fullscreen' },
                  { keys: ['Escape'], action: 'Close viewer' },
                  { keys: ['H'], action: 'Toggle this help' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                    <kbd className="px-2 py-1 bg-white/10 rounded text-sm font-mono">{item.keys.join(' + ')}</kbd>
                    <span>{item.action}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setShowHelp(false)}
                className="mt-6 w-full btn btn-primary"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}