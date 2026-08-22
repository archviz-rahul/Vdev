'use client'

import type { XRHotspot } from './xr.types'
import { Hotspot } from './Hotspot'

interface HotspotLayerProps {
  hotspots: XRHotspot[]
  onHotspotClick: (hotspot: XRHotspot) => void
}

export function HotspotLayer({ hotspots, onHotspotClick }: HotspotLayerProps) {
  return (
    <div className="pointer-events-auto absolute inset-0 z-10">
      {hotspots.map((h) => (
        <Hotspot key={h.id} hotspot={h} onClick={onHotspotClick} />
      ))}
    </div>
  )
}
