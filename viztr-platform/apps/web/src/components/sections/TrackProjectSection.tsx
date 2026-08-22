'use client'

import * as React from 'react'
import { cn } from '@viztr/utils'
import { extendedHomepageData } from '@/data/extendedHomepage'

export function TrackProjectSection() {
  const { heading, subheading, placeholderProjectId, placeholderAccessCode, buttonLabel } = extendedHomepageData.trackProject
  const [projectId, setProjectId] = React.useState('')
  const [accessCode, setAccessCode] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [timeline, setTimeline] = React.useState<Array<{ stage: string; status: 'completed' | 'current' | 'pending'; date?: string; note?: string }>>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Mock timeline data
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
    <section className="py-20 md:py-28 px-6" aria-labelledby="track-project-heading">
      <div className="container mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="track-project-heading" className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4">
            {heading}
          </h2>
          <p className="text-text-secondary text-lg">
            {subheading}
          </p>
        </header>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6" noValidate>
            <div className="space-y-4">
              <div>
                <label htmlFor="project-id" className="block text-sm font-medium text-text-primary mb-2">
                  Project ID
                </label>
                <input
                  type="text"
                  id="project-id"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  placeholder={placeholderProjectId}
                  className="input"
                  required
                  disabled={submitted}
                />
              </div>
              <div>
                <label htmlFor="access-code" className="block text-sm font-medium text-text-primary mb-2">
                  Access Code
                </label>
                <input
                  type="password"
                  id="access-code"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder={placeholderAccessCode}
                  className="input"
                  required
                  disabled={submitted}
                />
              </div>
            </div>

            <button
              type="submit"
              className={cn(
                'btn btn-primary w-full py-3 text-lg',
                submitted && 'opacity-50 cursor-not-allowed'
              )}
              disabled={submitted}
            >
              {buttonLabel}
            </button>
          </form>

          {submitted && timeline.length > 0 && (
            <div className="mt-8 card p-6" role="region" aria-label="Project timeline">
              <h3 className="font-display font-bold text-xl mb-6 text-text-primary">
                Project Timeline
              </h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
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
                      <h4 className="font-medium text-text-primary">{item.stage}</h4>
                      {item.date && <p className="text-sm text-text-secondary">{item.date}</p>}
                      {item.note && <p className="text-sm text-text-secondary mt-1">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}