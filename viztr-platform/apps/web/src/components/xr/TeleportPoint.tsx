'use client'

import { useState } from 'react'
import type { XRTeleportPoint } from './xr.types'

interface TeleportPointProps {
  point: XRTeleportPoint
  onClick: (point: XRTeleportPoint) => void
}

export function TeleportPoint({ point, onClick }: TeleportPointProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={() => onClick(point)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group absolute z-10"
      style={{
        left: '50%',
        bottom: '20%',
        transform: `translateX(-50%) scale(${hovered ? 1.3 : 1})`,
      }}
      aria-label={`Teleport to ${point.label}`}
    >
      <div className="relative">
        <div className="h-8 w-8 rounded-full border-2 border-accent bg-accent/20" style={{ boxShadow: '0 0 12px var(--accent, #e94560)' }} />
        {hovered && (
          <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/90 px-2 py-1 text-xs text-white">
            {point.label}
          </div>
        )}
      </div>
    </button>
  )
}
