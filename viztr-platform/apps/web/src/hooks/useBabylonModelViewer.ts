'use client'

import { useEffect, type RefObject } from 'react'

interface UseBabylonModelViewerProps {
  modelUrl: string
  enableAR?: boolean
  enableVR?: boolean
  containerRef: RefObject<HTMLDivElement | null>
  canvasRef: RefObject<HTMLCanvasElement | null>
}

export function useBabylonModelViewer({
  modelUrl,
  containerRef,
  canvasRef,
}: UseBabylonModelViewerProps) {
  useEffect(() => {
    if (!modelUrl || !canvasRef.current || !containerRef.current) return

    let engine: any = null
    let scene: any = null
    let camera: any = null
    let model: any = null
    let cancelled = false
    const disposers: Array<() => void> = []

    const initBabylon = async () => {
      try {
        const BABYLON = await import('@babylonjs/core')
        const { GLTFFileLoader } = await import('@babylonjs/loaders')

        if (cancelled || !canvasRef.current) return

        BABYLON.SceneLoader.RegisterPlugin(new GLTFFileLoader())

        engine = new BABYLON.Engine(canvasRef.current, true, {
          preserveDrawingBuffer: true,
          stencil: true,
          antialias: true,
        })
        disposers.push(() => {
          if (engine) {
            engine.stopRenderLoop()
            engine.dispose()
            engine = null
          }
        })

        scene = new BABYLON.Scene(engine)
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0)

        camera = new BABYLON.ArcRotateCamera(
          'camera',
          -Math.PI / 4,
          Math.PI / 3,
          10,
          BABYLON.Vector3.Zero(),
          scene
        )
        camera.attachControl(canvasRef.current, true)
        camera.wheelPrecision = 50
        camera.pinchPrecision = 50
        camera.lowerRadiusLimit = 1
        camera.upperRadiusLimit = 100
        camera.lowerBetaLimit = 0.1
        camera.upperBetaLimit = Math.PI - 0.1

        const hemisphericLight = new BABYLON.HemisphericLight(
          'hemiLight',
          new BABYLON.Vector3(0, 1, 0),
          scene
        )
        hemisphericLight.intensity = 0.7
        hemisphericLight.diffuse = new BABYLON.Color3(1, 1, 1)
        hemisphericLight.specular = new BABYLON.Color3(0.5, 0.5, 0.5)

        const dirLight = new BABYLON.DirectionalLight(
          'dirLight',
          new BABYLON.Vector3(-1, -2, -1),
          scene
        )
        dirLight.intensity = 0.5

        const envTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
          'https://assets.babylonjs.com/environments/environmentSpecular.env',
          scene
        )
        envTexture.gammaSpace = false

        const skybox = scene.createDefaultSkybox(envTexture, true)
        if (skybox) {
          skybox.material.backFaceCulling = false
        }

        const defaultPipeline = new BABYLON.DefaultRenderingPipeline(
          'default',
          true,
          scene,
          [camera]
        )
        defaultPipeline.imageProcessing.exposure = 1.0
        defaultPipeline.imageProcessing.contrast = 1.1
        defaultPipeline.imageProcessing.toneMappingEnabled = true
        defaultPipeline.imageProcessing.toneMappingType =
          BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES

        try {
          const result = await BABYLON.SceneLoader.ImportMeshAsync(
            '',
            modelUrl.substring(0, modelUrl.lastIndexOf('/') + 1),
            modelUrl.substring(modelUrl.lastIndexOf('/') + 1),
            scene
          )

          if (cancelled) return

          model = result.meshes[0]

          const boundingBox = model.getHierarchyBoundingVectors()
          const size = boundingBox.max.subtract(boundingBox.min)
          const maxDim = Math.max(size.x, size.y, size.z) || 1
          const scale = 5 / maxDim
          model.scaling.scaleInPlace(scale)

          const center = boundingBox.min.add(size.scale(0.5))
          model.position = center.scale(-scale)

          result.meshes.forEach((mesh: any) => {
            if (mesh.material) {
              const pbrMat = mesh.material as any
              if (pbrMat.metallic !== undefined) {
                pbrMat.metallic = 0.5
                pbrMat.roughness = 0.5
              }
              if (pbrMat.environmentIntensity !== undefined) {
                pbrMat.environmentIntensity = 1.0
              }
            }
          })

          camera.target = BABYLON.Vector3.Zero()
          camera.radius = 10 * scale
        } catch (error) {
          console.error('Failed to load model:', error)
        }

        const handleDblClick = () => {
          if (!camera || !model) return
          camera.setTarget(BABYLON.Vector3.Zero())
          camera.radius = 10 * ((model.scaling && model.scaling.x) || 1)
        }

        canvasRef.current?.addEventListener('dblclick', handleDblClick)
        disposers.push(() => {
          canvasRef.current?.removeEventListener('dblclick', handleDblClick)
        })

        engine.runRenderLoop(() => {
          if (scene && !cancelled) scene.render()
        })
      } catch (error) {
        console.error('Babylon error:', error)
      }
    }

    initBabylon()

    const handleResize = () => {
      if (engine) engine.resize()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelled = true
      window.removeEventListener('resize', handleResize)
      disposers.forEach((dispose) => dispose())
      disposers.length = 0
      if (scene) {
        scene.dispose()
        scene = null
      }
    }
  }, [modelUrl])
}
