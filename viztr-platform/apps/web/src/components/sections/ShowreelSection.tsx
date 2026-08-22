'use client'

import * as React from 'react'
import Link from 'next/link'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@viztr/utils'
import { homepageData } from '@/data/homepage'

export function ShowreelSection() {
  const { heading, subheading, videoUrl, posterUrl, cta, visible } = homepageData.showreel
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {})
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  React.useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.play().catch(() => {})
    }
  }, [])

  if (!visible) return null

  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden" aria-labelledby="showreel-heading">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterUrl}
          playsInline
          muted
          loop
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 id="showreel-heading" className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {heading}
          </h2>
          <p className="text-white/80 text-lg mb-10">
            {subheading}
          </p>

          {/* Video Controls */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={togglePlay}
              className={cn(
                'glass p-3 rounded-xl transition-all duration-200',
                'hover:bg-white/20',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </button>
            <button
              onClick={toggleMute}
              className={cn(
                'glass p-3 rounded-xl transition-all duration-200',
                'hover:bg-white/20',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
              )}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
            </button>
          </div>

          <Link
            href={cta.href}
            className="btn btn-secondary border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}