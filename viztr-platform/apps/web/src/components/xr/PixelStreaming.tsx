'use client'

import { useState, useCallback } from 'react'
import { MonitorPlay, Play, Square, Loader2, Wifi, WifiOff } from 'lucide-react'

interface Session {
  id: string
  status: 'connecting' | 'active' | 'ended'
  startedAt: Date
}

export function PixelStreaming() {
  const [session, setSession] = useState<Session | null>(null)
  const [isConfigured] = useState(false)

  const startSession = useCallback(async () => {
    setSession({ id: 'session-' + Date.now(), status: 'connecting', startedAt: new Date() })
    await new Promise((r) => setTimeout(r, 2000))
    setSession((prev) => (prev ? { ...prev, status: 'active' } : null))
  }, [])

  const stopSession = useCallback(() => {
    setSession((prev) => (prev ? { ...prev, status: 'ended' } : null))
    setTimeout(() => setSession(null), 2000)
  }, [])

  if (!isConfigured) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <WifiOff className="mx-auto mb-4 h-12 w-12 text-text-secondary/50" />
        <h3 className="mb-2 text-lg font-semibold">Pixel Streaming Coming Soon</h3>
        <p className="text-sm text-text-secondary">Cloud-rendered XR experiences will be available soon. No heavy hardware required.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-3">
          <MonitorPlay className="h-5 w-5 text-accent" />
          <div>
            <p className="font-medium">Pixel Streaming Session</p>
            <p className="text-xs text-text-secondary">
              {session ? `Status: ${session.status}` : 'No active session'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {!session || session.status === 'ended' ? (
            <button onClick={startSession} className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white hover:bg-accent/90">
              <Play className="h-3.5 w-3.5" /> Start
            </button>
          ) : (
            <button onClick={stopSession} className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-500/20">
              <Square className="h-3.5 w-3.5" /> Stop
            </button>
          )}
        </div>
      </div>

      {session && session.status === 'connecting' && (
        <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent">
          <Loader2 className="h-4 w-4 animate-spin" /> Connecting to GPU instance...
        </div>
      )}

      {session && session.status === 'active' && (
        <div className="aspect-video rounded-xl border border-accent/30 bg-black">
          <div className="flex h-full items-center justify-center text-sm text-text-secondary">
            Stream would render here via WebSocket connection
          </div>
        </div>
      )}
    </div>
  )
}
