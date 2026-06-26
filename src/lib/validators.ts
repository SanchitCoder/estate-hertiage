import { z } from 'zod'

const phoneRegex = /^[+]?[0-9]{10,13}$/

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
})

export const contactSchema = leadSchema

export const leadCaptureSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().regex(phoneRegex, 'Valid phone required'),
})

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export type LeadForm = z.infer<typeof leadSchema>
export type ContactForm = LeadForm
export type LeadCaptureForm = z.infer<typeof leadCaptureSchema>
export type NewsletterForm = z.infer<typeof newsletterSchema>
