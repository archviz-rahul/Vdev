'use client'

import type { XRAnnotation } from './xr.types'
import { Annotation } from './Annotation'

interface AnnotationLayerProps {
  annotations: XRAnnotation[]
  activeAnnotationId: string | null
  onClose: () => void
}

export function AnnotationLayer({ annotations, activeAnnotationId, onClose }: AnnotationLayerProps) {
  const active = annotations.find((a) => a.id === activeAnnotationId)
  if (!active) return null

  return (
    <div className="pointer-events-auto absolute inset-0 z-20">
      <Annotation annotation={active} onClose={onClose} />
    </div>
  )
}
