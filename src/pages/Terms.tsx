import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using the Estates & Heritage Advisors website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.' },
  { title: '2. Services Description', content: 'E&H Advisors provides real estate advisory, investment consulting, property marketing, and property management services. All services are subject to a separate engagement agreement between the client and E&H Advisors.' },
  { title: '3. No Guarantee of Returns', content: 'All financial projections, ROI calculations, yield estimates, and appreciation forecasts on this website are indicative only and are based on historical data and market trends. Past performance is not indicative of future results. Real estate investment involves significant risk, and the value of properties can go up as well as down. You should seek independent financial advice before making any investment decision.' },
  { title: '4. Intellectual Property', content: 'All content on this website including text, graphics, logos, images, market reports, and research publications are the property of E&H Advisors and are protected by Indian and international copyright laws. Unauthorised use, reproduction, or distribution is prohibited.' },
  { title: '5. User Responsibilities', content: 'You agree to:\n• Provide accurate and truthful information when using our services\n• Not use our website for any unlawful purpose\n• Not attempt to gain unauthorised access to any part of our systems\n• Not distribute spam or unsolicited communications through our platform' },
  { title: '6. Third-Party Links', content: 'Our website may contain links to third-party websites. These links are provided for your convenience only. E&H Advisors has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.' },
  { title: '7. Limitation of Liability', content: 'To the maximum extent permitted by applicable law, E&H Advisors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability in connection with any claim shall not exceed the fees paid by you to E&H Advisors in the 3 months preceding the claim.' },
  { title: '8. RERA Compliance', content: 'E&H Advisors is registered with the Haryana Real Estate Regulatory Authority (HRERA) under Registration No. HRERA-PKL-REA-1234-2024. All transactions facilitated by E&H Advisors comply with the Real Estate (Regulation and Development) Act, 2016 and applicable state RERA regulations.' },
  { title: '9. Governing Law', content: 'These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Gurugram, Haryana.' },
  { title: '10. Modifications', content: 'E&H Advisors reserves the right to modify these terms at any time. Changes will be effective upon posting on this website. Your continued use of our services constitutes acceptance of the modified terms.' },
]

export default function Terms() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="relative py-16 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" /><span className="section-label">Legal</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-3">Terms of Use</motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-sm text-mist/60">Effective Date: 1 January 2025</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="container-narrow py-16">
        <div className="glass-card border border-white/8 rounded-2xl p-8 lg:p-12 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-white/6 pb-8 last:border-0 last:pb-0">
              <h2 className="font-display text-display-sm text-off-white mb-4">{section.title}</h2>
              <p className="font-sans text-sm text-mist/70 leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
