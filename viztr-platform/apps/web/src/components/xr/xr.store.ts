import { create } from 'zustand'
import type { XRMode, XRDeviceCapabilities } from './xr.types'

interface XRState {
  currentSceneId: string
  currentMode: XRMode
  activeAnnotation: string | null
  viewedScenes: string[]
  isTransitioning: boolean
  isEntryComplete: boolean
  teleportCount: number
  deviceCapabilities: XRDeviceCapabilities
  setScene: (id: string) => void
  setMode: (mode: XRMode) => void
  showAnnotation: (id: string) => void
  hideAnnotation: () => void
  markSceneViewed: (id: string) => void
  completeEntry: () => void
  incrementTeleport: () => void
  setDeviceCapabilities: (caps: XRDeviceCapabilities) => void
}

export const useXRStore = create<XRState>((set) => ({
  currentSceneId: '',
  currentMode: 'tour',
  activeAnnotation: null,
  viewedScenes: [],
  isTransitioning: false,
  isEntryComplete: false,
  teleportCount: 0,
  deviceCapabilities: { webxr: false, immersiveVR: false, immersiveAR: false },
  setScene: (id) => set({ currentSceneId: id }),
  setMode: (mode) => set({ currentMode: mode }),
  showAnnotation: (id) => set({ activeAnnotation: id }),
  hideAnnotation: () => set({ activeAnnotation: null }),
  markSceneViewed: (id) => set((s) => ({ viewedScenes: [...new Set([...s.viewedScenes, id])] })),
  completeEntry: () => set({ isEntryComplete: true }),
  incrementTeleport: () => set((s) => ({ teleportCount: s.teleportCount + 1 })),
  setDeviceCapabilities: (caps) => set({ deviceCapabilities: caps }),
}))
