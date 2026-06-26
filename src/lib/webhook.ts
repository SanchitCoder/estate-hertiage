import type { LeadForm } from '@/lib/validators'

export const CONTACT_WEBHOOK_URL = 'https://n8n.srv981435.hstgr.cloud/webhook/bi[widc'

export interface LeadWebhookPayload extends LeadForm {
  formType: 'contact' | 'chat'
  submittedAt: string
  sourceUrl: string
  buyerObjective?: string
  corridor?: string
  budget?: string
}

export async function submitLead(payload: LeadWebhookPayload): Promise<void> {
  const response = await fetch(CONTACT_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Webhook request failed (${response.status})`)
  }
}

export async function submitContactForm(data: LeadForm): Promise<void> {
  await submitLead({
    name: data.name,
    email: data.email,
    phone: data.phone,
    formType: 'contact',
    submittedAt: new Date().toISOString(),
    sourceUrl: window.location.href,
  })
}

export async function submitChatLead(
  data: LeadForm,
  qualifying: { buyerObjective: string; corridor: string; budget: string }
): Promise<void> {
  await submitLead({
    name: data.name,
    email: data.email,
    phone: data.phone,
    buyerObjective: qualifying.buyerObjective,
    corridor: qualifying.corridor,
    budget: qualifying.budget,
    formType: 'chat',
    submittedAt: new Date().toISOString(),
    sourceUrl: window.location.href,
  })
}
