'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@viztr/utils'
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react'

export function ClientAccessForm() {
  const [activeTab, setActiveTab] = React.useState<'project' | 'email'>('project')
  const [projectId, setProjectId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailPassword, setEmailPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleProjectLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <Link href="/" className="font-display font-bold text-2xl text-text-primary mb-4 inline-block">VizTR</Link>
        <h1 className="font-display font-bold text-3xl text-text-primary mb-2">Client Access</h1>
        <p className="text-text-secondary">Sign in to access your projects and track progress</p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 bg-bg-secondary rounded-xl p-1 flex" role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === 'project'}
          onClick={() => setActiveTab('project')}
          className={cn(
            'flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200',
            activeTab === 'project'
              ? 'bg-white text-text-primary shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          )}
        >
          Project ID Login
        </button>
        <button
          role="tab"
          aria-selected={activeTab === 'email'}
          onClick={() => setActiveTab('email')}
          className={cn(
            'flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200',
            activeTab === 'email'
              ? 'bg-white text-text-primary shadow-sm'
              : 'text-text-secondary hover:text-text-primary'
          )}
        >
          Email Login
        </button>
      </div>

      {/* Project ID Login Form */}
      {activeTab === 'project' && (
        <form onSubmit={handleProjectLogin} className="space-y-6" noValidate>
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
            <label htmlFor="project-password" className="block text-sm font-medium text-text-primary mb-2">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="project-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full py-3 text-lg" disabled={submitted}>
            {submitted ? 'Signing in...' : 'Access Project'}
          </button>
        </form>
      )}

      {/* Email Login Form */}
      {activeTab === 'email' && (
        <form onSubmit={handleEmailLogin} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email *</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="input pl-10"
                required
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" aria-hidden="true" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="email-password" className="block text-sm font-medium text-text-primary mb-2">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="email-password"
                value={emailPassword}
                onChange={(e) => setEmailPassword(e.target.value)}
                placeholder="••••••••"
                className="input pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full py-3 text-lg" disabled={submitted}>
            {submitted ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      )}

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-text-secondary">Or continue with</span>
        </div>
      </div>

      {/* Google Login */}
      <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-border text-text-primary hover:bg-bg-secondary transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23c4.95 0 9.19-3.26 10.56-7.53H12z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.97 14.97 2 12 2 9.19 2 6.62 3.72 5.04 6.15l2.95 2.36c.98-1.04 2.27-1.64 3.71-1.64z"/></svg>
        <span className="font-medium">Continue with Google</span>
      </button>

      {/* Forgot Access */}
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-accent hover:underline">Forgot your access code?</a>
      </div>

      {/* Sign Up */}
      <p className="mt-6 text-center text-sm text-text-secondary">
        Don&apos;t have access? <a href="/contact" className="text-accent hover:underline font-medium">Contact us</a> to request client access.
      </p>
    </div>
  )
}