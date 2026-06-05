import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you:
• Fill in forms on our website (name, email, phone number, property details)
• Book a consultation or appointment
• Subscribe to our newsletter
• Contact us via email, phone, or WhatsApp

We may also collect information automatically when you visit our website, including your IP address, browser type, pages viewed, and time spent on pages.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
• Respond to your enquiries and provide our advisory services
• Send you property listings, market reports, and investment insights (with your consent)
• Process appointments and bookings
• Improve our website and services
• Comply with applicable laws and regulations

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    title: '3. Information Sharing',
    content: `We may share your information with:
• Service providers who assist us in operating our website and delivering services (e.g., email providers, CRM systems)
• Professional advisors including legal, accounting, and financial advisors as required
• Regulatory bodies when required by law (e.g., RERA, income tax authorities)

All third parties are required to maintain the confidentiality of your information.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, and regular security assessments.

However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Cookies',
    content: `We use cookies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
• Remember your preferences
• Analyse website traffic and usage
• Deliver relevant content

You can control cookie settings through your browser settings. Disabling cookies may affect some website functionality.`,
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:
• Access the personal information we hold about you
• Correct inaccurate or incomplete information
• Request deletion of your information (subject to legal obligations)
• Opt out of marketing communications at any time
• Lodge a complaint with the relevant data protection authority

To exercise any of these rights, contact us at privacy@estatesheritage.in.`,
  },
  {
    title: '7. Retention',
    content: `We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Client transaction records are retained for a minimum of 7 years as required by applicable laws.`,
  },
  {
    title: '8. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our services after changes indicates your acceptance of the updated policy.`,
  },
]

export default function Privacy() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="relative py-16 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" /><span className="section-label">Legal</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-3">Privacy Policy</motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-sm text-mist/60">Last updated: 1 January 2025</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="container-narrow py-16">
        <div className="glass-card border border-white/8 rounded-2xl p-8 lg:p-12">
          <p className="font-sans text-sm text-mist/70 leading-relaxed mb-8">
            Estates & Heritage Advisors Pvt. Ltd. ("E&H", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our advisory services.
          </p>
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-white/6 pb-8 last:border-0 last:pb-0">
                <h2 className="font-display text-display-sm text-off-white mb-4">{section.title}</h2>
                <p className="font-sans text-sm text-mist/70 leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 bg-gold/8 border border-gold/20 rounded-xl">
            <p className="font-sans text-sm text-mist/70">
              <strong className="text-gold">Contact:</strong> For any privacy-related questions, write to us at{' '}
              <a href="mailto:privacy@estatesheritage.in" className="text-gold hover:text-gold-light">privacy@estatesheritage.in</a> or call{' '}
              <a href="tel:+919818012345" className="text-gold hover:text-gold-light">+91 98180 12345</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
