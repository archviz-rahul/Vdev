'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  preferredDate: string
  preferredTime: string
  projectDetails: string
  budgetRange: string
  consent: boolean
  website: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  preferredDate?: string
  preferredTime?: string
  projectDetails?: string
  consent?: string
}

const services = [
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

const budgetRanges = [
  'Under 5K',
  '5K-15K',
  '15K-50K',
  '50K-100K',
  '100K+'
]

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
]

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    projectDetails: '',
    budgetRange: '',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a date'
    } else {
      const selectedDate = new Date(formData.preferredDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate <= today) {
        newErrors.preferredDate = 'Please select a future date'
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a time'
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required'
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
      const response = await fetch('/api/forms/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          projectDetails: formData.projectDetails,
          budgetRange: formData.budgetRange,
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
        <h3 className="text-xl font-semibold text-text-primary mb-2">Booking Requested!</h3>
        <p className="text-text-secondary">We&apos;ll confirm your appointment shortly.</p>
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
        <label htmlFor="booking-name" className="block text-sm font-medium text-text-primary mb-2">
          Name *
        </label>
        <input
          id="booking-name"
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
        <label htmlFor="booking-email" className="block text-sm font-medium text-text-primary mb-2">
          Email *
        </label>
        <input
          id="booking-email"
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
        <label htmlFor="booking-phone" className="block text-sm font-medium text-text-primary mb-2">
          Phone *
        </label>
        <input
          id="booking-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input ${errors.phone ? 'border-red-500' : ''}`}
          placeholder="Your phone number"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="booking-company" className="block text-sm font-medium text-text-primary mb-2">
          Company
        </label>
        <input
          id="booking-company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="input"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="booking-service" className="block text-sm font-medium text-text-primary mb-2">
          Service *
        </label>
        <select
          id="booking-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`input ${errors.service ? 'border-red-500' : ''}`}
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.service}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="booking-date" className="block text-sm font-medium text-text-primary mb-2">
            Preferred Date *
          </label>
          <div className="relative">
            <input
              id="booking-date"
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className={`input pr-10 ${errors.preferredDate ? 'border-red-500' : ''}`}
              min={new Date().toISOString().split('T')[0]}
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
          </div>
          {errors.preferredDate && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="booking-time" className="block text-sm font-medium text-text-primary mb-2">
            Preferred Time *
          </label>
          <select
            id="booking-time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`input ${errors.preferredTime ? 'border-red-500' : ''}`}
          >
            <option value="">Select a time</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.preferredTime && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.preferredTime}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="booking-budget" className="block text-sm font-medium text-text-primary mb-2">
          Budget Range
        </label>
        <select
          id="booking-budget"
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select budget range</option>
          {budgetRanges.map(range => (
            <option key={range} value={range}>{range}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="booking-details" className="block text-sm font-medium text-text-primary mb-2">
          Project Details *
        </label>
        <textarea
          id="booking-details"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={4}
          className={`input resize-none ${errors.projectDetails ? 'border-red-500' : ''}`}
          placeholder="Tell us about your project..."
        />
        {errors.projectDetails && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.projectDetails}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="booking-consent"
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="booking-consent" className="text-sm text-text-secondary">
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
            <Calendar className="w-5 h-5" />
            Request Booking
          </>
        )}
      </button>
    </form>
  )
}
