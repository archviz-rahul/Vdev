'use client'

import { useRef } from 'react'
import { useBabylonModelViewer } from '@/hooks/useBabylonModelViewer'

interface BabylonModelViewerImplProps {
  modelUrl: string
  enableAR?: boolean
  enableVR?: boolean
}

export function BabylonModelViewerImpl({
  modelUrl,
  enableAR = true,
  enableVR = true,
}: BabylonModelViewerImplProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useBabylonModelViewer({
    modelUrl,
    enableAR,
    enableVR,
    containerRef,
    canvasRef,
  })

  return (
    <div ref={containerRef} className="w-full h-full" style={{ minHeight: '400px' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full touch-none"
        style={{ touchAction: 'none' }}
      />
    </div>
  )
}
