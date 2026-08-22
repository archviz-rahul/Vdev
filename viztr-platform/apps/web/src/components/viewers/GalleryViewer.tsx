'use client'

import * as React from 'react'
import { X, ChevronLeft, ChevronRight, Maximize, Minimize, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { cn } from '@viztr/utils'
import { GalleryItem } from '@viztr/types'

interface GalleryViewerProps {
  items: GalleryItem[]
  initialIndex?: number
  onClose: () => void
  isOpen: boolean
}

export function GalleryViewer({ items, initialIndex = 0, onClose, isOpen }: GalleryViewerProps) {
  if (!isOpen || items.length === 0) return null

  const [currentIndex, setCurrentIndex] = React.useState(initialIndex)
  const [zoomLevel, setZoomLevel] = React.useState(1)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [panOffset, setPanOffset] = React.useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 })

  const currentItem = items[currentIndex]

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const key = e.key
    switch (key) {
      case 'ArrowLeft':
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
        break
      case 'ArrowRight':
        setCurrentIndex(prev => (prev + 1) % items.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        break
      case 'ArrowDown':
        e.preventDefault()
        break
      case 'Escape':
        onClose()
        break
      case 'f':
      case 'F':
        setIsFullscreen(!isFullscreen)
        break
      case '+':
      case '=':
        setZoomLevel(prev => Math.min(prev + 0.25, 5))
        break
      case '-':
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
        break
      case '0':
        setZoomLevel(1)
        setPanOffset({ x: 0, y: 0 })
        break
    }
  }

  const handleKeyDownNative = (e: KeyboardEvent) => {
    const key = e.key
    switch (key) {
      case 'ArrowLeft':
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
        break
      case 'ArrowRight':
        setCurrentIndex(prev => (prev + 1) % items.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        break
      case 'ArrowDown':
        e.preventDefault()
        break
      case 'Escape':
        onClose()
        break
      case 'f':
      case 'F':
        setIsFullscreen(!isFullscreen)
        break
      case '+':
      case '=':
        setZoomLevel(prev => Math.min(prev + 0.25, 5))
        break
      case '-':
        setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
        break
      case '0':
        setZoomLevel(1)
        setPanOffset({ x: 0, y: 0 })
        break
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDownNative)
    return () => document.removeEventListener('keydown', handleKeyDownNative)
  }, [items.length])

  const handleWheel = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
      setZoomLevel(prev => Math.max(0.5, Math.min(5, prev - e.deltaY * 0.001)))
    } else if (zoomLevel > 1) {
      e.preventDefault()
      setPanOffset(prev => ({
        x: prev.x - e.deltaX,
        y: prev.y - e.deltaY,
      }))
    }
  }

  const handleWheelReact = (e: React.WheelEvent) => {
    const nativeEvent = e.nativeEvent
    if (nativeEvent.ctrlKey || nativeEvent.metaKey) {
      nativeEvent.preventDefault()
      setZoomLevel(prev => Math.max(0.5, Math.min(5, prev - nativeEvent.deltaY * 0.001)))
    } else if (zoomLevel > 1) {
      nativeEvent.preventDefault()
      setPanOffset(prev => ({
        x: prev.x - nativeEvent.deltaX,
        y: prev.y - nativeEvent.deltaY,
      }))
    }
  }

  const handleMouseDown = (e: MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y })
      const target = e.currentTarget as HTMLElement
      if (target) {
        target.style.cursor = 'grabbing'
      }
    }
  }

  const handleMouseDownReact = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.nativeEvent.clientX - panOffset.x, y: e.nativeEvent.clientY - panOffset.y })
      const target = e.currentTarget as HTMLElement
      if (target) {
        target.style.cursor = 'grabbing'
      }
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseMoveReact = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.nativeEvent.clientX - dragStart.x,
        y: e.nativeEvent.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      document.body.style.cursor = 'default'
    }
  }

  const handleMouseUpReact = () => {
    if (isDragging) {
      setIsDragging(false)
      document.body.style.cursor = 'default'
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({ x: e.touches[0].clientX - panOffset.x, y: e.touches[0].clientY - panOffset.y })
    }
  }

  const handleTouchStartReact = (e: React.TouchEvent) => {
    if (zoomLevel > 1 && e.nativeEvent.touches.length === 1) {
      setIsDragging(true)
      setDragStart({ x: e.nativeEvent.touches[0].clientX - panOffset.x, y: e.nativeEvent.touches[0].clientY - panOffset.y })
    }
  }

  const handleTouchMoveReact = (e: React.TouchEvent) => {
    if (isDragging && e.nativeEvent.touches.length === 1) {
      e.preventDefault()
      setPanOffset({
        x: e.nativeEvent.touches[0].clientX - dragStart.x,
        y: e.nativeEvent.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault()
      setPanOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const handleTouchEndReact = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const nextItem = () => setCurrentIndex(prev => (prev + 1) % items.length)
  const prevItem = () => setCurrentIndex(prev => (prev - 1 + items.length) % items.length)

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 5))
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))
  const resetZoom = () => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }) }

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center',
        'bg-black/95 backdrop-blur-sm',
        'animate-fade-in'
      )}
      onKeyDown={handleKeyDown}
      onWheel={handleWheelReact}
      onMouseDown={handleMouseDownReact}
      onMouseMove={handleMouseMoveReact}
      onMouseUp={handleMouseUpReact}
      onMouseLeave={handleMouseUpReact}
      onTouchStart={handleTouchStartReact}
      onTouchMove={handleTouchMoveReact}
      onTouchEnd={handleTouchEndReact}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery viewer"
    >
      {/* Background overlay click to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[90vw] max-h-[85vh] flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close gallery"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 z-20 glass px-4 py-2 rounded-lg text-white/90 text-sm font-medium">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Main Content */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden"
          style={{ maxWidth: '90vw', maxHeight: '75vh' }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevItem}
            className="absolute left-4 z-10 p-3 rounded-full glass hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Previous"
            disabled={items.length <= 1}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div
            className="relative flex-1 flex items-center justify-center overflow-hidden"
            style={{
              transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
              transformOrigin: 'center center',
              transition: 'transform 0.1s ease-out',
            }}
            onWheel={handleWheelReact}
            onMouseDown={handleMouseDownReact}
            onMouseMove={handleMouseMoveReact}
            onMouseUp={handleMouseUpReact}
          >
            {currentItem.type === 'video' ? (
              <video
                src={currentItem.src}
                poster={currentItem.poster}
                controls
                className="max-w-full max-h-[70vh] rounded-xl"
                autoPlay
                playsInline
              />
            ) : currentItem.type === 'model3d' ? (
              <div className="aspect-video w-full max-w-[80vw] max-h-[70vh] bg-bg-secondary rounded-xl flex items-center justify-center text-text-secondary">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <p>3D Model Viewer</p>
                  <p className="text-sm mt-2">Interactive 3D model viewer</p>
                </div>
              </div>
            ) : currentItem.type === 'panorama' ? (
              <div className="aspect-video w-full max-w-[80vw] max-h-[70vh] bg-bg-secondary rounded-xl flex items-center justify-center text-text-secondary">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <p>360° Panorama Viewer</p>
                  <p className="text-sm mt-2">Click to open panorama viewer</p>
                </div>
              </div>
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.alt || currentItem.title || `Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-xl"
                onLoad={(e) => { e.currentTarget.style.opacity = '1' }}
                style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
              />
            )}
          </div>

          <button
            onClick={nextItem}
            className="absolute right-4 z-10 p-3 rounded-full glass hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Next"
            disabled={items.length <= 1}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 glass px-4 py-3 rounded-xl">
          <button
            onClick={zoomOut}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Zoom out"
            disabled={zoomLevel <= 0.5}
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={resetZoom}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Reset zoom"
            disabled={zoomLevel === 1 && panOffset.x === 0 && panOffset.y === 0}
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={zoomIn}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Zoom in"
            disabled={zoomLevel >= 5}
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </button>
          <div className="w-px h-8 bg-white/20 mx-2" />
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
          </button>
        </div>

        {/* Thumbnail Strip */}
        {items.length > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-full max-w-[90vw] px-4">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide" role="list" aria-label="Thumbnails">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setZoomLevel(1); setPanOffset({ x: 0, y: 0 }) }}
                  className={cn(
                    'relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                    index === currentIndex
                      ? 'border-accent ring-2 ring-accent'
                      : 'border-transparent hover:border-accent/50'
                  )}
                  aria-label={`View image ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                  role="listitem"
                >
                  <img
                    src={item.thumbnail || item.src}
                    alt=""
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                  )}
                  {item.type === 'panorama' && (
                    <div className="absolute bottom-1 left-1 bg-accent text-white text-xs px-1.5 py-0.5 rounded">360°</div>
                  )}
                  {item.type === 'model3d' && (
                    <div className="absolute bottom-1 left-1 bg-primary text-white text-xs px-1.5 py-0.5 rounded">3D</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}