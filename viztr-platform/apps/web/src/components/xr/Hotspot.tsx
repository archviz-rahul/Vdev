'use client'

import { useState } from 'react'
import type { XRHotspot } from './xr.types'

interface HotspotProps {
  hotspot: XRHotspot
  onClick: (hotspot: XRHotspot) => void
}

export function Hotspot({ hotspot, onClick }: HotspotProps) {
  const [hovered, setHovered] = useState(false)

  if (!hotspot.visible) return null

  return (
    <button
      onClick={() => onClick(hotspot)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group absolute z-10"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) scale(${hovered ? 1.3 : 1})`,
      }}
      aria-label={hotspot.title}
    >
      <div
        className="flex h-4 w-4 items-center justify-center rounded-full bg-accent shadow-lg"
        style={{
          boxShadow: `0 0 ${hovered ? '20px' : '12px'} var(--accent, #e94560)`,
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
      {hovered && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-xs text-white">
          {hotspot.title}
        </div>
      )}
    </button>
  )
}
