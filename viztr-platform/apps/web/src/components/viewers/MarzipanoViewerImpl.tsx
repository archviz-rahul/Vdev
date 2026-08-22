'use client'

import { useEffect, useRef } from 'react'
import { Hotspot, Annotation } from '@viztr/types'

const loadMarzipano = () => {
  if (typeof window === 'undefined') return null
  return require('marzipano')
}

interface MarzipanoViewerImplProps {
  imageUrl: string
  hotspots?: Hotspot[]
  annotations?: Annotation[]
  initialYaw?: number
  initialPitch?: number
  initialFov?: number
  gyroscopeEnabled?: boolean
}

function createHotspotElement(
  hotspot: Hotspot,
  onAction: (hotspot: Hotspot) => void,
): HTMLElement {
  const element = document.createElement('div')
  element.className = 'marzipano-hotspot'
  element.style.cssText = `
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent, #e94560);
    border: 2px solid white;
    box-shadow: 0 0 12px var(--accent, #e94560);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 1.5s ease-in-out infinite;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  `
  element.setAttribute('role', 'button')
  element.setAttribute('aria-label', hotspot.title)
  element.setAttribute('tabindex', '0')

  const tooltip = document.createElement('div')
  tooltip.className = 'hotspot-tooltip'
  tooltip.textContent = hotspot.title
  tooltip.style.cssText = `
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 6px 10px;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
    pointer-events: none;
    z-index: 10;
  `
  element.appendChild(tooltip)

  element.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1'
    tooltip.style.visibility = 'visible'
    element.style.transform = 'scale(1.3)'
    element.style.boxShadow = '0 0 20px var(--accent, #e94560)'
  })

  element.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0'
    tooltip.style.visibility = 'hidden'
    element.style.transform = 'scale(1)'
    element.style.boxShadow = '0 0 12px var(--accent, #e94560)'
  })

  element.addEventListener('click', (e) => {
    e.stopPropagation()
    onAction(hotspot)
  })

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onAction(hotspot)
    }
  })

  return element
}

function createAnnotationElement(
  annotation: Annotation,
  onClose: (id: string) => void,
): HTMLElement {
  const element = document.createElement('div')
  element.className = 'marzipano-annotation'
  element.style.cssText = `
    max-width: 300px;
    padding: 16px;
    background: var(--glass-bg, rgba(255, 255, 255, 0.1));
    backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.2));
    border-radius: 12px;
    color: white;
    font-size: 14px;
    line-height: 1.5;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px) scale(0.95);
    transition: all 0.2s ease;
    pointer-events: none;
  `
  element.setAttribute('role', 'dialog')

  const closeBtn = document.createElement('button')
  closeBtn.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
  closeBtn.style.cssText = `
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  `
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    onClose(annotation.id)
  })
  closeBtn.addEventListener('mouseenter', () => {
    closeBtn.style.background = 'rgba(255, 255, 255, 0.2)'
  })
  closeBtn.addEventListener('mouseleave', () => {
    closeBtn.style.background = 'rgba(255, 255, 255, 0.1)'
  })
  element.appendChild(closeBtn)

  const content = document.createElement('div')
  content.style.cssText = 'padding-top: 24px;'
  content.textContent = annotation.text
  element.appendChild(content)

  return element
}

export function MarzipanoViewerImpl({
  imageUrl,
  hotspots = [],
  annotations = [],
  initialYaw = 0,
  initialPitch = 0,
  initialFov = 90,
  gyroscopeEnabled = true,
}: MarzipanoViewerImplProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeAnnotationRef = useRef<string | null>(null)
  const hotspotsRef = useRef(hotspots)
  const annotationsRef = useRef(annotations)
  hotspotsRef.current = hotspots
  annotationsRef.current = annotations

  useEffect(() => {
    const Marzipano = loadMarzipano()
    const container = containerRef.current
    if (!container || !Marzipano) return

    const style = document.createElement('style')
    style.textContent = `
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }
      .marzipano-hotspot:focus-visible {
        outline: 2px solid var(--accent, #e94560);
        outline-offset: 2px;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `
    document.head.appendChild(style)

    const annotationElements = new Map<string, HTMLElement>()

    const showAnnotation = (annotationId: string) => {
      const element = annotationElements.get(annotationId)
      if (!element) return
      element.style.opacity = '1'
      element.style.visibility = 'visible'
      element.style.transform = 'translateY(0) scale(1)'
      element.style.pointerEvents = 'auto'
      activeAnnotationRef.current = annotationId
    }

    const hideAnnotation = (annotationId: string) => {
      const element = annotationElements.get(annotationId)
      if (!element) return
      element.style.opacity = '0'
      element.style.visibility = 'hidden'
      element.style.transform = 'translateY(10px) scale(0.95)'
      element.style.pointerEvents = 'none'
      if (activeAnnotationRef.current === annotationId) {
        activeAnnotationRef.current = null
      }
    }

    const toggleAnnotation = (annotationId: string) => {
      if (activeAnnotationRef.current === annotationId) {
        hideAnnotation(annotationId)
        return
      }
      if (activeAnnotationRef.current) {
        hideAnnotation(activeAnnotationRef.current)
      }
      showAnnotation(annotationId)
    }

    const handleHotspotAction = (hotspot: Hotspot) => {
      switch (hotspot.action) {
        case 'teleport':
          console.log('Teleport to:', hotspot.target)
          break
        case 'open_info':
          showAnnotation(hotspot.target)
          break
        case 'play_media':
          console.log('Play media:', hotspot.target)
          break
        case 'external':
          window.open(hotspot.target, '_blank', 'noopener,noreferrer')
          break
      }
    }

    let viewer: any = null
    try {
      viewer = new Marzipano.Viewer(container, {
        controls: {
          mouseViewMode: 'drag',
          pinchZoom: true,
          friction: 0.1,
        },
      })

      const geometry = new Marzipano.EquirectangularGeometry([
        { tileSize: 2048, size: 2048, fallbackOnly: true },
      ])
      const source = Marzipano.ImageUrlSource.fromString(imageUrl)
      const view = viewer.createView({
        yaw: (initialYaw * Math.PI) / 180,
        pitch: (initialPitch * Math.PI) / 180,
        fov: (Math.max(30, Math.min(120, initialFov)) * Math.PI) / 180,
      })
      const scene = viewer.createScene({
        geometry,
        source,
        view,
        pinFirstLevel: true,
      })
      scene.switchTo()

      const hotspotContainer = scene.hotspotContainer()

      hotspotsRef.current.forEach((hotspot) => {
        const el = createHotspotElement(hotspot, handleHotspotAction)
        hotspotContainer.createHotspot(el, {
          yaw: (hotspot.yaw * Math.PI) / 180,
          pitch: (hotspot.pitch * Math.PI) / 180,
        })
      })

      annotationsRef.current.forEach((annotation) => {
        const linkedHotspot = hotspotsRef.current.find(
          (h) => h.id === annotation.hotspotId,
        )
        const el = createAnnotationElement(annotation, hideAnnotation)
        annotationElements.set(annotation.id, el)
        el.addEventListener('click', (e) => {
          e.stopPropagation()
          toggleAnnotation(annotation.id)
        })
        hotspotContainer.createHotspot(el, {
          yaw: ((linkedHotspot?.yaw ?? 0) * Math.PI) / 180,
          pitch: ((linkedHotspot?.pitch ?? 0) * Math.PI) / 180,
        })
      })

      if (
        gyroscopeEnabled &&
        'DeviceOrientationEvent' in window &&
        typeof view.setGyroscopeEnabled === 'function'
      ) {
        view.setGyroscopeEnabled(true)
      }
    } catch (error) {
      console.error('Failed to initialize Marzipano viewer:', error)
    }

    return () => {
      if (viewer && typeof viewer.destroy === 'function') {
        try {
          viewer.destroy()
        } catch (error) {
          console.error('Failed to destroy Marzipano viewer:', error)
        }
      }
      annotationElements.clear()
      activeAnnotationRef.current = null
      document.head.removeChild(style)
    }
  }, [imageUrl, initialYaw, initialPitch, initialFov, gyroscopeEnabled])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ minHeight: '400px' }}
    />
  )
}
