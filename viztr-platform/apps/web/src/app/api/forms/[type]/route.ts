import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params
  const body = await request.json()

  if (body.website) {
    return NextResponse.json({ success: true, message: 'Thank you!' })
  }

  const validators: Record<string, (data: any) => string | null> = {
    contact: (data) => {
      if (!data.name || !data.email || !data.message) return 'Name, email, and message are required'
      if (!data.consent) return 'Consent is required'
      return null
    },
    booking: (data) => {
      if (!data.name || !data.email || !data.phone || !data.service || !data.preferredDate || !data.preferredTime || !data.details) return 'All required fields must be filled'
      if (new Date(data.preferredDate) <= new Date()) return 'Date must be in the future'
      if (!data.consent) return 'Consent is required'
      return null
    },
    demo: (data) => {
      if (!data.name || !data.email) return 'Name and email are required'
      if (!data.consent) return 'Consent is required'
      return null
    },
    inquiry: (data) => {
      if (!data.name || !data.email || !data.message) return 'Name, email, and message are required'
      if (!data.consent) return 'Consent is required'
      return null
    },
    newsletter: (data) => {
      if (!data.email) return 'Email is required'
      return null
    },
    'portfolio-enquiry': (data) => {
      if (!data.name || !data.email || !data.message) return 'Name, email, and message are required'
      if (!data.consent) return 'Consent is required'
      return null
    },
  }

  const validator = validators[type]
  if (!validator) {
    return NextResponse.json({ success: false, error: 'Unknown form type' }, { status: 400 })
  }

  const error = validator(body)
  if (error) {
    return NextResponse.json({ success: false, error }, { status: 400 })
  }

  console.log(`[Form Submission] Type: ${type}`, body)

  return NextResponse.json({ success: true, message: 'Form submitted successfully' })
}
