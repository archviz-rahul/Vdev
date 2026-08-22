'use client'

import { useParams } from 'next/navigation'
import { Folder, Clock, CheckCircle, ExternalLink } from 'lucide-react'

const mockSharedProject = {
  name: 'Modern Villa Walkthrough',
  id: 'PRJ-001',
  status: 'in-progress',
  progress: 65,
  lastUpdate: '2 hours ago',
  description: 'Photorealistic 3D walkthrough of a 450m² modern villa with landscape design.',
  timeline: [
    { date: '2026-08-01', title: 'Initial Concepts', completed: true },
    { date: '2026-08-10', title: '3D Modeling Complete', completed: true },
    { date: '2026-08-20', title: 'Texturing & Lighting', completed: false },
    { date: '2026-08-30', title: 'Final Rendering', completed: false },
  ],
  deliverables: [
    { id: 'D1', name: 'Exterior Render - Front', status: 'ready', type: 'PNG' },
    { id: 'D2', name: 'Floor Plan', status: 'delivered', type: 'PDF' },
  ],
}

const statusColors: Record<string, string> = {
  'in-progress': 'bg-blue-100 text-blue-800',
  review: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-green-100 text-green-800',
  'on-hold': 'bg-gray-100 text-gray-800',
}

export default function ClientViewPage() {
  const params = useParams()
  const accessCode = params.accessCode as string

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-text-primary">{mockSharedProject.name}</h1>
            <span className={`text-xs px-2 py-1 rounded-full ${statusColors[mockSharedProject.status]}`}>
              {mockSharedProject.status}
            </span>
          </div>
          <p className="text-sm text-text-secondary">
            Shared view &middot; Access code: {accessCode}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="p-4 bg-secondary border border-border rounded-lg">
          <p className="text-sm text-text-secondary">
            This is a shared project view. You can review the project progress and deliverables, but editing is not available in this mode.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-text-primary mb-2">About</h2>
          <p className="text-text-secondary">{mockSharedProject.description}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary mb-4">Progress</h2>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: `${mockSharedProject.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-text-primary">{mockSharedProject.progress}%</span>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary mb-4">Timeline</h2>
          <div className="space-y-3">
            {mockSharedProject.timeline.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {item.completed ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Clock className="w-5 h-5 text-text-secondary flex-shrink-0" />
                )}
                <div className="flex-1">
                  <span className={`text-sm ${item.completed ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-text-secondary">{item.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary mb-4">Deliverables</h2>
          <div className="grid gap-3">
            {mockSharedProject.deliverables.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-between p-4 bg-card border border-border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Folder className="w-5 h-5 text-text-secondary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">{d.name}</p>
                    <p className="text-xs text-text-secondary">{d.type}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    d.status === 'ready'
                      ? 'bg-green-100 text-green-800'
                      : d.status === 'delivered'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text-primary mb-4">XR Demo</h2>
          <button className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors">
            <ExternalLink className="w-4 h-4" />
            Launch XR Experience
          </button>
        </section>
      </main>
    </div>
  )
}
