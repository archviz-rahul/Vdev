'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Play, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  useCase: string
  message: string
  consent: boolean
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  consent?: string
}

const useCases = [
  'Architecture',
  'Real Estate',
  'Interior Design',
  'Other'
]

export function DemoRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    useCase: '',
    message: '',
    consent: false,
    website: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to proceed'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formData.website) {
      return
    }

    if (!validate()) {
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/forms/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          useCase: formData.useCase,
          message: formData.message,
          consent: formData.consent
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-text-primary mb-2">Demo Requested!</h3>
        <p className="text-text-secondary">We&apos;ll be in touch to schedule your demo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="demo-name" className="block text-sm font-medium text-text-primary mb-2">
          Name *
        </label>
        <input
          id="demo-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input ${errors.name ? 'border-red-500' : ''}`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="demo-email" className="block text-sm font-medium text-text-primary mb-2">
          Email *
        </label>
        <input
          id="demo-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? 'border-red-500' : ''}`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="demo-company" className="block text-sm font-medium text-text-primary mb-2">
          Company
        </label>
        <input
          id="demo-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="input"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="demo-usecase" className="block text-sm font-medium text-text-primary mb-2">
          Use Case
        </label>
        <select
          id="demo-usecase"
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select your use case</option>
          {useCases.map(useCase => (
            <option key={useCase} value={useCase}>{useCase}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" className="block text-sm font-medium text-text-primary mb-2">
          Message
        </label>
        <textarea
          id="demo-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="input resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="demo-consent"
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="demo-consent" className="text-sm text-text-secondary">
          I agree to the processing of my personal data *
        </label>
      </div>
      {errors.consent && (
        <p className="text-sm text-red-500 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {errors.consent}
        </p>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            Request Demo
          </>
        )}
      </button>
    </form>
  )
}
