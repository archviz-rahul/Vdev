'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  projectReference: string
  serviceType: string
  message: string
  consent: boolean
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  consent?: string
}

interface InquiryFormProps {
  projectReference?: string
}

const serviceTypes = [
  'Exterior',
  'Interior',
  'Walkthrough',
  'WebXR',
  'WebAR',
  'VR',
  'Virtual Tour',
  'Pixel Streaming',
  'Other'
]

export function InquiryForm({ projectReference }: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectReference: projectReference || '',
    serviceType: '',
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

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
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
      const response = await fetch('/api/forms/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectReference: formData.projectReference,
          serviceType: formData.serviceType,
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
        <h3 className="text-xl font-semibold text-text-primary mb-2">Inquiry Submitted!</h3>
        <p className="text-text-secondary">We&apos;ll get back to you soon.</p>
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
        <label htmlFor="inquiry-name" className="block text-sm font-medium text-text-primary mb-2">
          Name *
        </label>
        <input
          id="inquiry-name"
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
        <label htmlFor="inquiry-email" className="block text-sm font-medium text-text-primary mb-2">
          Email *
        </label>
        <input
          id="inquiry-email"
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
        <label htmlFor="inquiry-reference" className="block text-sm font-medium text-text-primary mb-2">
          Project Reference
        </label>
        <input
          id="inquiry-reference"
          type="text"
          name="projectReference"
          value={formData.projectReference}
          onChange={handleChange}
          className="input"
          placeholder="Project reference (if any)"
        />
      </div>

      <div>
        <label htmlFor="inquiry-service" className="block text-sm font-medium text-text-primary mb-2">
          Service Type
        </label>
        <select
          id="inquiry-service"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select a service</option>
          {serviceTypes.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-text-primary mb-2">
          Message *
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
          placeholder="Your inquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="inquiry-consent"
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="inquiry-consent" className="text-sm text-text-secondary">
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
            <MessageSquare className="w-5 h-5" />
            Submit Inquiry
          </>
        )}
      </button>
    </form>
  )
}
