'use client'

import { useEffect, useCallback } from 'react'
import type { XRScene, XRHotspot } from './xr.types'
import { useXRStore } from './xr.store'
import { SceneLayer } from './SceneLayer'
import { HotspotLayer } from './HotspotLayer'
import { AnnotationLayer } from './AnnotationLayer'
import { TeleportLayer } from './TeleportLayer'
import { ModeManager } from './ModeManager'
import { CinematicEntry } from './CinematicEntry'
import { ProgressiveReveal } from './ProgressiveReveal'

interface XRViewerProps {
  projectId: string
  scenes: XRScene[]
  initialSceneId: string
  mode?: 'tour' | 'vr' | 'ar'
}

export function XRViewer({ projectId, scenes, initialSceneId, mode }: XRViewerProps) {
  const {
    currentSceneId,
    activeAnnotation,
    showAnnotation,
    hideAnnotation,
    setScene,
    markSceneViewed,
    incrementTeleport,
    setMode,
  } = useXRStore()

  useEffect(() => {
    setScene(initialSceneId)
    markSceneViewed(initialSceneId)
    if (mode) setMode(mode)
  }, [initialSceneId, mode])

  const currentScene = scenes.find((s) => s.id === currentSceneId) || scenes[0]

  const handleHotspotClick = useCallback(
    (hotspot: XRHotspot) => {
      switch (hotspot.action) {
        case 'teleport':
          setScene(hotspot.target)
          markSceneViewed(hotspot.target)
          incrementTeleport()
          break
        case 'open_info':
          showAnnotation(hotspot.target)
          break
        case 'external':
          window.open(hotspot.target, '_blank', 'noopener,noreferrer')
          break
      }
    },
    [setScene, markSceneViewed, incrementTeleport, showAnnotation]
  )

  const handleTeleport = useCallback(
    (point: { targetSceneId: string }) => {
      setScene(point.targetSceneId)
      markSceneViewed(point.targetSceneId)
      incrementTeleport()
    },
    [setScene, markSceneViewed, incrementTeleport]
  )

  if (!currentScene) return <div className="flex h-full items-center justify-center text-text-secondary">No scenes available</div>

  return (
    <ModeManager>
      <CinematicEntry>
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
          <SceneLayer scene={currentScene} />
          <HotspotLayer hotspots={currentScene.hotspots} onHotspotClick={handleHotspotClick} />
          <AnnotationLayer
            annotations={currentScene.annotations}
            activeAnnotationId={activeAnnotation}
            onClose={hideAnnotation}
          />
          <TeleportLayer points={currentScene.teleportPoints} onTeleport={handleTeleport} />
          <ProgressiveReveal />
        </div>
      </CinematicEntry>
    </ModeManager>
  )
}
