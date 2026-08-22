import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  consent: z.literal(true),
})

export const bookingFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  service: z.string().min(1),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  details: z.string().min(1),
  consent: z.literal(true),
})

export const newsletterSchema = z.object({
  email: z.string().email(),
})

export const projectAccessSchema = z.object({
  projectId: z.string().min(1),
  accessCode: z.string().min(1),
})

export function validateForm<T>(schema: z.ZodType<T>, data: unknown): { success: true; data: T } | { success: false; errors: string[] } {
  const result = schema.safeParse(data)
  if (result.success) return { success: true, data: result.data }
  return { success: false, errors: result.error.issues.map((e) => e.message) }
}
