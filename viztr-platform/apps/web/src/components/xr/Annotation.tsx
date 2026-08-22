'use client'

import { X } from 'lucide-react'
import type { XRAnnotation } from './xr.types'

interface AnnotationProps {
  annotation: XRAnnotation
  onClose: () => void
}

export function Annotation({ annotation, onClose }: AnnotationProps) {
  const styleClasses = {
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
    solid: 'bg-card border border-border',
    minimal: 'bg-transparent',
  }

  return (
    <div
      className={`absolute left-4 top-4 z-20 max-w-[300px] rounded-xl p-4 shadow-xl animate-in fade-in slide-in-from-top-2 ${styleClasses[annotation.style]}`}
      role="dialog"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm leading-relaxed text-white">{annotation.text}</p>
        <button onClick={onClose} className="shrink-0 rounded p-1 hover:bg-white/10" aria-label="Close">
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  )
}
