'use client'

import { useEffect, useRef } from 'react'
import type { XRScene } from './xr.types'

interface SceneLayerProps {
  scene: XRScene
  onSceneReady?: () => void
}

export function SceneLayer({ scene, onSceneReady }: SceneLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let viewer: any = null
    let destroyed = false

    const init = async () => {
      if (scene.type === '360') {
        const Marzipano = (await import('marzipano')).default || (await import('marzipano'))
        if (destroyed || !containerRef.current) return

        viewer = new Marzipano.Viewer(containerRef.current, {
          controls: { mouseViewMode: 'drag', pinchZoom: true, friction: 0.1 },
        })
        const geometry = new Marzipano.EquirectangularGeometry([{ tileSize: 2048, size: 2048, fallbackOnly: true }])
        const source = Marzipano.ImageUrlSource.fromString(scene.url)
        const view = viewer.createView({ yaw: 0, pitch: 0, fov: 90 * Math.PI / 180 })
        const sceneObj = viewer.createScene({ geometry, source, view, pinFirstLevel: true })
        sceneObj.switchTo()
      } else {
        const BABYLON = await import('@babylonjs/core')
        if (destroyed || !containerRef.current) return

        const canvas = document.createElement('canvas')
        canvas.style.width = '100%'
        canvas.style.height = '100%'
        containerRef.current.appendChild(canvas)

        const engine = new BABYLON.Engine(canvas, true)
        const babylonScene = new BABYLON.Scene(engine)
        const camera = new BABYLON.ArcRotateCamera('cam', -Math.PI / 4, Math.PI / 3, 10, BABYLON.Vector3.Zero(), babylonScene)
        camera.attachControl(canvas, true)

        const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), babylonScene)
        light.intensity = 0.7

        engine.runRenderLoop(() => babylonScene.render())
      }

      if (!destroyed) onSceneReady?.()
    }

    init()

    return () => {
      destroyed = true
      if (viewer && typeof viewer.destroy === 'function') {
        try { viewer.destroy() } catch {}
      }
    }
  }, [scene.url, scene.type])

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ minHeight: '100%' }} />
  )
}
