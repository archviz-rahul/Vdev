'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  email: string
  website: string
}

interface FormErrors {
  email?: string
}

export function NewsletterForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    website: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
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
      const response = await fetch('/api/forms/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-text-secondary">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span className="text-sm">Thank you for subscribing!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
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

      <div className="flex-1 relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="absolute -bottom-6 left-0 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          'Subscribe'
        )}
      </button>

      {status === 'error' && (
        <p className="absolute -bottom-6 left-0 text-xs text-red-500">{errorMessage}</p>
      )}
    </form>
  )
}
