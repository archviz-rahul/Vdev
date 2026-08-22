'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'

export function TrackProjectForm() {
  const [projectId, setProjectId] = React.useState('')
  const [accessCode, setAccessCode] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [timeline, setTimeline] = React.useState<Array<{ stage: string; status: 'completed' | 'current' | 'pending'; date?: string; note?: string }>>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeline([
      { stage: 'Brief Received', status: 'completed', date: 'Jan 15, 2026', note: 'Project brief received and confirmed' },
      { stage: 'In Production', status: 'completed', date: 'Jan 18, 2026', note: 'Modeling and texturing phase' },
      { stage: 'Draft Ready', status: 'current', date: undefined, note: 'First draft renders ready for review' },
      { stage: 'Client Review', status: 'pending', date: undefined },
      { stage: 'Revisions', status: 'pending', date: undefined },
      { stage: 'Final Delivery', status: 'pending', date: undefined },
      { stage: 'Completed', status: 'pending', date: undefined },
    ])
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">Track Your Project</h1>
        <p className="text-text-secondary text-lg">Real-time updates on your project status</p>
      </div>

      {/* Form */}
      <div className="card p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="project-id" className="block text-sm font-medium text-text-primary mb-2">Project ID *</label>
            <input
              type="text"
              id="project-id"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              placeholder="PRJ-2026-XXXX"
              className="input"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="access-code" className="block text-sm font-medium text-text-primary mb-2">Access Code *</label>
            <input
              type="password"
              id="access-code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="••••••"
              className="input"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full py-3 text-lg" disabled={submitted && !projectId}>
            Track Project
          </button>
        </form>
      </div>

      {/* Timeline Result */}
      {submitted && (
        <div className="card p-8 animate-fade-in-up" role="region" aria-label="Project timeline">
          <h2 className="font-display font-bold text-xl text-text-primary mb-6">Project Timeline</h2>
          <div className="space-y-6">
            {[
              { stage: 'Brief Received', status: 'completed', date: 'Jan 15, 2026', note: 'Project brief received and confirmed' },
              { stage: 'In Production', status: 'completed', date: 'Jan 18, 2026', note: 'Modeling and texturing phase' },
              { stage: 'Draft Ready', status: 'current', date: undefined, note: 'First draft renders ready for review' },
              { stage: 'Client Review', status: 'pending', date: undefined },
              { stage: 'Revisions', status: 'pending', date: undefined },
              { stage: 'Final Delivery', status: 'pending', date: undefined },
              { stage: 'Completed', status: 'pending', date: undefined },
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-6 last:pb-0">
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors"
                  style={{
                    backgroundColor: item.status === 'completed' ? 'var(--accent)' :
                      item.status === 'current' ? 'var(--accent)' : 'transparent',
                    borderColor: item.status === 'completed' ? 'var(--accent)' :
                      item.status === 'current' ? 'var(--accent)' : 'var(--border)',
                    color: item.status !== 'pending' ? 'white' : 'var(--text-secondary)',
                  }}
                >
                  {item.status === 'completed' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {item.status === 'current' && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                  {item.status === 'pending' && (
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--border)' }} />
                  )}
                </div>
                <div className="absolute left-0 top-10 bottom-0 w-0.5" style={{ backgroundColor: 'var(--border)' }} />
                <div className="ms-2">
                  <h3 className="font-medium text-text-primary">{item.stage}</h3>
                  {item.date && <p className="text-sm text-text-secondary">{item.date}</p>}
                  {item.note && <p className="text-sm text-text-secondary mt-1">{item.note}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Authorized Actions */}
          <div className="mt-8 pt-8 border-t border-border space-y-4">
            <h3 className="font-display font-bold text-lg text-text-primary mb-4">Authorized Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className="btn btn-secondary">View Deliverables</button>
              <button className="btn btn-secondary">Launch XR Demo</button>
              <button className="btn btn-secondary">Submit Feedback</button>
            </div>
            <p className="text-sm text-text-secondary text-center">Full dashboard access available after <a href="/client-access" className="text-accent hover:underline">Client Login</a>.</p>
          </div>
        </div>
      )}
    </div>
  )
}