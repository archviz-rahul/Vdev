export interface XRScene {
  id: string
  name: string
  type: '360' | '3d'
  url: string
  hotspots: XRHotspot[]
  annotations: XRAnnotation[]
  teleportPoints: XRTeleportPoint[]
  preload: string[]
  thumbnail?: string
}

export interface XRHotspot {
  id: string
  position: [number, number, number] | { yaw: number; pitch: number }
  action: 'teleport' | 'open_info' | 'play_media' | 'external'
  target: string
  title: string
  icon?: string
  visible: boolean
}

export interface XRAnnotation {
  id: string
  text: string
  hotspotId: string
  position?: [number, number, number] | { yaw: number; pitch: number }
  singleOpen: boolean
  style: 'glass' | 'solid' | 'minimal'
}

export interface XRTeleportPoint {
  id: string
  position: [number, number, number] | { yaw: number; pitch: number }
  targetSceneId: string
  label: string
  thumbnail?: string
}

export type XRMode = 'tour' | 'vr' | 'ar'

export interface XRDeviceCapabilities {
  webxr: boolean
  immersiveVR: boolean
  immersiveAR: boolean
}
