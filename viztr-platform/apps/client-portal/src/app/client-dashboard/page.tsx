'use client'

import { useState } from 'react'
import {
  Folder,
  Clock,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Download,
  Send,
} from 'lucide-react'

interface Project {
  id: string
  name: string
  status: 'in-progress' | 'review' | 'completed' | 'on-hold'
  progress: number
  lastUpdate: string
  description: string
  timeline: TimelineItem[]
  deliverables: Deliverable[]
}

interface TimelineItem {
  date: string
  title: string
  completed: boolean
}

interface Deliverable {
  id: string
  name: string
  status: 'ready' | 'pending' | 'delivered'
  type: string
}

const mockProjects: Project[] = [
  {
    id: 'PRJ-001',
    name: 'Modern Villa Walkthrough',
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
      { id: 'D3', name: 'VR Walkthrough', status: 'pending', type: 'XR' },
    ],
  },
  {
    id: 'PRJ-002',
    name: 'Office Tower Interior',
    status: 'review',
    progress: 85,
    lastUpdate: '1 day ago',
    description: 'Interior visualization for a 20-story commercial office tower lobby and reception.',
    timeline: [
      { date: '2026-07-15', title: 'Concept Approval', completed: true },
      { date: '2026-07-25', title: '3D Modeling', completed: true },
      { date: '2026-08-05', title: 'Texturing', completed: true },
      { date: '2026-08-15', title: 'Client Review', completed: false },
    ],
    deliverables: [
      { id: 'D4', name: 'Lobby Render', status: 'ready', type: 'PNG' },
      { id: 'D5', name: 'Reception Area', status: 'ready', type: 'PNG' },
      { id: 'D6', name: 'Material Board', status: 'delivered', type: 'PDF' },
    ],
  },
  {
    id: 'PRJ-003',
    name: 'Luxury Penthouse',
    status: 'completed',
    progress: 100,
    lastUpdate: '5 days ago',
    description: 'Complete visualization suite for a penthouse apartment including AR furniture preview.',
    timeline: [
      { date: '2026-06-01', title: 'Project Started', completed: true },
      { date: '2026-06-20', title: 'Design Phase', completed: true },
      { date: '2026-07-10', title: 'Production', completed: true },
      { date: '2026-07-30', title: 'Final Delivery', completed: true },
    ],
    deliverables: [
      { id: 'D7', name: 'Full Render Package', status: 'delivered', type: 'ZIP' },
      { id: 'D8', name: 'AR Experience', status: 'delivered', type: 'XR' },
      { id: 'D9', name: 'Presentation Deck', status: 'delivered', type: 'PDF' },
    ],
  },
]

const statusColors: Record<string, string> = {
  'in-progress': 'bg-blue-100 text-blue-800',
  'review': 'bg-yellow-100 text-yellow-800',
  'completed': 'bg-green-100 text-green-800',
  'on-hold': 'bg-gray-100 text-gray-800',
}

export default function ClientDashboardPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [feedback, setFeedback] = useState('')

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-text-primary">{selectedProject.name}</h1>
              <p className="text-sm text-text-secondary">{selectedProject.id}</p>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          <p className="text-text-secondary">{selectedProject.description}</p>

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-4">Timeline</h2>
            <div className="space-y-3">
              {selectedProject.timeline.map((item, i) => (
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
              {selectedProject.deliverables.map((d) => (
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
                  <div className="flex items-center gap-2">
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
                    {d.status === 'ready' && (
                      <button className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
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

          <section>
            <h2 className="text-lg font-semibold text-text-primary mb-4">Feedback</h2>
            <div className="space-y-3">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts on the project..."
                rows={4}
                className="w-full p-3 bg-card border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
              <button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors">
                <Send className="w-4 h-4" />
                Send Feedback
              </button>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-text-primary">Welcome back, Client</h1>
          <p className="text-text-secondary mt-1">Here are your assigned projects</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="text-left p-5 bg-card border border-border rounded-lg hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono text-text-secondary">{project.id}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>

              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {project.lastUpdate}
                </span>
                <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}
