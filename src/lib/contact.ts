const DEFAULT_WHATSAPP_MESSAGE = "Hello! I'd like to discuss Gurugram corridor and project advisory with Estates & Heritage Advisors."

export const contact = {
  phoneDisplay: '+91 928 927 9900',
  phoneTel: 'tel:+919289279900',
  whatsapp: '919289279900',
  whatsappUrl: `https://wa.me/919289279900?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`,
  email: 'sales@enhadvisors.com',
  emailMailto: 'mailto:sales@enhadvisors.com',
} as const
