'use client'

import { useState } from 'react'
import { Search, CheckCircle, Circle, Clock, ArrowRight } from 'lucide-react'

const STAGES = [
  'Brief Received',
  'In Production',
  'Draft Ready',
  'Client Review',
  'Revisions',
  'Final Delivery',
  'Completed',
]

const MOCK_RESULT = {
  projectName: 'Luxury Villa - Beverly Hills',
  clientName: 'Meridian Properties',
  currentStage: 3,
  stages: [
    { stage: 0, reached: true, date: '2026-01-15', note: 'Project brief received and confirmed' },
    { stage: 1, reached: true, date: '2026-02-01', note: '3D modeling in progress' },
    { stage: 2, reached: true, date: '2026-03-10', note: 'Initial draft ready for review' },
    { stage: 3, reached: true, date: '2026-03-15', note: 'Awaiting client feedback' },
    { stage: 4, reached: false, date: null, note: null },
    { stage: 5, reached: false, date: null, note: null },
    { stage: 6, reached: false, date: null, note: null },
  ],
}

export function ProjectTracker() {
  const [projectId, setProjectId] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [result, setResult] = useState<typeof MOCK_RESULT | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTrack = async () => {
    if (!projectId || !accessCode) {
      setError('Please enter both Project ID and Access Code')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)

    await new Promise((r) => setTimeout(r, 800))

    if (projectId === '1' && accessCode === 'demo') {
      setResult(MOCK_RESULT)
    } else {
      setError('Project not found. Try ID: 1, Code: demo')
    }
    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Track Your Project</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-text-secondary">Project ID</label>
            <input
              type="text"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="Enter your project ID"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-text-primary outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-text-secondary">Access Code</label>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter your access code"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-text-primary outline-none focus:border-accent"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            onClick={handleTrack}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-white transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Search className="h-4 w-4" />
                Track Project
              </>
            )}
          </button>
        </div>
      </div>

      {result && (
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">{result.projectName}</h3>
            <p className="text-sm text-text-secondary">Client: {result.clientName}</p>
          </div>
          <div className="space-y-0">
            {STAGES.map((stage, i) => {
              const stageData = result.stages[i]
              const isCompleted = stageData.reached
              const isCurrent = i === result.currentStage
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    {isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : isCurrent ? (
                      <Clock className="h-6 w-6 text-accent" />
                    ) : (
                      <Circle className="h-6 w-6 text-text-secondary/30" />
                    )}
                    {i < STAGES.length - 1 && (
                      <div className={`w-0.5 flex-1 ${isCompleted ? 'bg-green-500' : 'bg-border'}`} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className={`font-medium ${isCurrent ? 'text-accent' : isCompleted ? 'text-text-primary' : 'text-text-secondary/50'}`}>
                      {stage}
                    </p>
                    {stageData.date && (
                      <p className="text-xs text-text-secondary">
                        {new Date(stageData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    )}
                    {stageData.note && <p className="mt-1 text-sm text-text-secondary">{stageData.note}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
