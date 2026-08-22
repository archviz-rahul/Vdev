'use client'

import * as React from 'react'
import { X, Upload } from 'lucide-react'
import { cn } from '@viztr/utils'

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
  onFileSelect: (files: FileList) => void
  onDrag: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
}

export function UploadModal({ isOpen, onClose, onFileSelect, onDrag, onDrop }: UploadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-bold text-xl">Upload 3D Model</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close upload modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div
          className="border-2 border-dashed rounded-xl p-8 text-center mb-6"
          onDragEnter={onDrag}
          onDragLeave={onDrag}
          onDragOver={onDrag}
          onDrop={onDrop}
        >
          <input
            type="file"
            accept=".glb,.gltf"
            multiple
            onChange={(e) => e.target.files && onFileSelect(e.target.files)}
            className="hidden"
            id="modal-upload"
          />
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 mb-2">Drag & drop .glb or .gltf files</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Max 50MB per file</p>
          <button
            onClick={() => document.getElementById('modal-file-input')?.click()}
            className="btn btn-secondary mt-4"
          >
            Browse Files
          </button>
          <input
            type="file"
            id="modal-file-input"
            accept=".glb,.gltf"
            multiple
            onChange={(e) => e.target.files && onFileSelect(e.target.files)}
            className="hidden"
          />
        </div>
        <button
          onClick={onClose}
          className="btn btn-secondary w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}