'use client'

import type { XRTeleportPoint } from './xr.types'
import { TeleportPoint } from './TeleportPoint'

interface TeleportLayerProps {
  points: XRTeleportPoint[]
  onTeleport: (point: XRTeleportPoint) => void
}

export function TeleportLayer({ points, onTeleport }: TeleportLayerProps) {
  return (
    <div className="pointer-events-auto absolute inset-0 z-10">
      {points.map((p) => (
        <TeleportPoint key={p.id} point={p} onClick={onTeleport} />
      ))}
    </div>
  )
}
