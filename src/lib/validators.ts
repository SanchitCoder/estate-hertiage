import { z } from 'zod'

const phoneRegex = /^[+]?[0-9]{10,13}$/

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  corridor: z.string().optional(),
  project: z.string().optional(),
  budget: z.string().optional(),
  buyerType: z.enum(['investor', 'end-user', 'nri', 'channel-partner', 'corporate']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
})

export const reportDownloadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(phoneRegex, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  buyerType: z.enum(['investor', 'end-user', 'nri', 'channel-partner', 'corporate']),
  budget: z.string().min(1, 'Please select a budget range'),
})

export const leadCaptureSchema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().regex(phoneRegex, 'Valid phone required'),
})

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email'),
})

export type ContactForm = z.infer<typeof contactSchema>
export type ReportDownloadForm = z.infer<typeof reportDownloadSchema>
export type LeadCaptureForm = z.infer<typeof leadCaptureSchema>
export type NewsletterForm = z.infer<typeof newsletterSchema>
