'use client'

import * as React from 'react'
import { Upload, File, Eye, Trash2, Globe, Box, Settings, AlertCircle, CheckCircle, X, Monitor } from 'lucide-react'
import { cn } from '@viztr/utils'
import { UploadModal } from './UploadModal'

interface Model3D {
  id: string
  name: string
  url: string
  format: 'glb' | 'gltf'
  size: number
  projectId?: string
  previewImage?: string
  webxrEnabled: boolean
  arEnabled: boolean
  vrEnabled: boolean
  createdAt: string
}

interface ModelManagerProps {
  models?: Model3D[]
  onUpload?: (files: FileList) => Promise<void>
  onDelete?: (id: string) => void
  onUpdate?: (id: string, updates: Partial<Model3D>) => void
}

const mockModels: Model3D[] = [
  {
    id: '1',
    name: 'Cultural Center',
    url: '/models/cultural-center.glb',
    format: 'glb',
    size: 15728640,
    projectId: '7',
    previewImage: '/images/models/cultural-center-preview.jpg',
    webxrEnabled: true,
    arEnabled: true,
    vrEnabled: true,
    createdAt: '2026-01-10',
  },
  {
    id: '2',
    name: 'Modern Chair',
    url: '/models/modern-chair.glb',
    format: 'glb',
    size: 2097152,
    projectId: '5',
    previewImage: '/images/models/chair-preview.jpg',
    webxrEnabled: true,
    arEnabled: true,
    vrEnabled: false,
    createdAt: '2026-01-08',
  },
  {
    id: '3',
    name: 'Office Building',
    url: '/models/office-building.gltf',
    format: 'gltf',
    size: 41943040,
    projectId: '9',
    previewImage: '/images/models/office-preview.jpg',
    webxrEnabled: true,
    arEnabled: false,
    vrEnabled: true,
    createdAt: '2026-01-05',
  },
]

export function ModelManager({ 
  models = mockModels, 
  onUpload, 
  onDelete, 
  onUpdate 
}: ModelManagerProps) {
  const [isUploadOpen, setIsUploadOpen] = React.useState(false)
  const [dragActive, setDragActive] = React.useState(false)
  const [uploadProgress, setUploadProgress] = React.useState<Record<string, number>>({})
  const [editingId, setEditingId] = React.useState<string | null>(null)
  const [editForm, setEditForm] = React.useState<Record<string, any>>({})

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = async (files: FileList) => {
    if (onUpload) {
      await onUpload(files)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const startEdit = (model: typeof mockModels[0]) => {
    setEditingId(model.id)
    setEditForm({
      name: model.name,
      webxrEnabled: model.webxrEnabled,
      arEnabled: model.arEnabled,
      vrEnabled: model.vrEnabled,
    })
  }

  const saveEdit = async (id: string) => {
    if (onUpdate) {
      await onUpdate(id, editForm)
    }
    setEditingId(null)
    setEditForm({})
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({})
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this model? This action cannot be undone.')) {
      if (onDelete) {
        onDelete(id)
      }
    }
  }

  const validateFile = (file: File): string | null => {
    const allowedTypes = ['model/gltf-binary', 'model/gltf+json', 'application/octet-stream']
    const extension = file.name.split('.').pop()?.toLowerCase()
    const validExtensions = ['glb', 'gltf']

    if (!validExtensions.includes(extension || '')) {
      return 'Invalid file format. Only .glb and .gltf files are allowed.'
    }

    if (file.size > 50 * 1024 * 1024) {
      return 'File size exceeds 50MB limit.'
    }

    return null
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="font-display font-bold text-2xl text-text-primary">3D Model Manager</h2>
          <p className="text-text-secondary text-sm">Manage 3D models for WebXR experiences</p>
        </div>
        <button
          onClick={() => setIsUploadOpen(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Upload className="w-4 h-4" />
          Upload Model
        </button>
      </div>

      {/* Upload Zone */}
      <div
        className={cn(
          'border-2 border-dashed rounded-2xl p-8 text-center transition-all',
          'bg-bg-secondary',
          dragActive && 'border-accent bg-accent/5'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="model-upload"
          accept=".glb,.gltf"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          ref={(el) => {
            if (isUploadOpen && el) el.click()
          }}
        />
        <div className="flex flex-col items-center gap-4">
          <Upload className="w-12 h-12 text-text-secondary" />
          <div>
            <p className="text-text-primary font-medium text-lg">
              {dragActive ? 'Drop 3D models here' : 'Drag & drop .glb or .gltf files here'}
            </p>
            <p className="text-text-secondary text-sm">
              or click to browse. Max 50MB per file. GLB/GLTF formats supported.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('model-upload')?.click()}
            className="btn btn-secondary"
          >
            Browse Files
          </button>
        </div>
      </div>

      {/* Models Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Model</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Format</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Size</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Project</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Features</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-secondary uppercase tracking-wider">Added</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-secondary uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {models.map((model) => (
                <tr key={model.id} className="hover:bg-bg-secondary transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-bg-secondary flex items-center justify-center">
                        {model.previewImage ? (
                          <img src={model.previewImage} alt={model.name} className="w-full h-full object-cover" />
                        ) : (
                          <Box className="w-6 h-6 text-text-secondary mx-auto" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{model.name}</p>
                        <p className="text-text-secondary text-sm">{model.format.toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'badge text-xs',
                      model.format === 'glb' ? 'bg-primary' : 'bg-accent'
                    )}>
                      {model.format.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {model.size < 1024 * 1024 
                      ? `${(model.size / 1024).toFixed(1)} KB`
                      : model.size < 1024 * 1024 * 1024
                        ? `${(model.size / (1024 * 1024)).toFixed(1)} MB`
                        : `${(model.size / (1024 * 1024 * 1024)).toFixed(2)} GB`}
                  </td>
                  <td className="px-6 py-4">
                    {model.projectId ? (
                      <span className="text-text-primary font-medium">Project #{model.projectId}</span>
                    ) : (
                      <span className="text-text-secondary">Unassigned</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {model.webxrEnabled && (
                        <span className="badge bg-accent/20 text-accent text-xs flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          WebXR
                        </span>
                      )}
                      {model.arEnabled && (
                        <span className="badge bg-primary/20 text-primary text-xs flex items-center gap-1">
                          <Box className="w-3 h-3" />
                          AR
                        </span>
                      )}
                      {model.vrEnabled && (
                        <span className="badge bg-purple/20 text-purple text-xs flex items-center gap-1">
                          <Monitor className="w-3 h-3" />
                          VR
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-secondary whitespace-nowrap">
                    {formatDate(model.createdAt)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                        aria-label="Preview model"
                        onClick={() => window.open(`/models/${model.id}`, '_blank')}
                      >
                        <Eye className="w-4 h-4 text-text-secondary" />
                      </button>
                      {editingId === model.id ? (
                        <div className="flex gap-1">
                          <button
                            onClick={() => saveEdit(model.id)}
                            className="p-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
                            aria-label="Save changes"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                            aria-label="Cancel editing"
                          >
                            <X className="w-4 h-4 text-text-secondary" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => startEdit(model)}
                          className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                          aria-label="Edit model settings"
                        >
                          <Settings className="w-4 h-4 text-text-secondary" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(model.id)}
                        className="p-2 rounded-lg glass hover:bg-red/20 text-red hover:text-red transition-colors"
                        aria-label="Delete model"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {models.length === 0 && (
          <div className="card p-12 text-center">
            <Box className="w-16 h-16 text-text-secondary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-text-primary mb-2">No models yet</h3>
            <p className="text-text-secondary mb-6">Upload your first 3D model to get started</p>
            <button
              onClick={() => setIsUploadOpen(true)}
              className="btn btn-primary"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Model
            </button>
          </div>
        )}

        {/* Upload Modal */}
        <UploadModal
          isOpen={isUploadOpen}
          onClose={() => setIsUploadOpen(false)}
          onFileSelect={handleFiles}
          onDrag={handleDrag}
          onDrop={handleDrop}
        />
      </div>
    </div>
  )
}