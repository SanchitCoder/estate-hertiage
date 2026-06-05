import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Disclaimer() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="relative py-16 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" /><span className="section-label">Legal</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-3">Disclaimer</motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-sm text-mist/60">Last updated: 1 January 2025</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="container-narrow py-16">
        <div className="glass-card border border-white/8 rounded-2xl p-8 lg:p-12">
          <div className="flex items-start gap-4 p-5 bg-gold/8 border border-gold/25 rounded-xl mb-8">
            <AlertTriangle size={22} className="text-gold shrink-0 mt-0.5" />
            <p className="font-sans text-sm text-mist/80 leading-relaxed">
              <strong className="text-gold">Important Notice:</strong> All information on this website is provided for general informational purposes only and does not constitute financial, legal, or investment advice. Please read this disclaimer carefully before using our website or engaging our services.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { title: 'No Investment Advice', content: 'The information, tools, calculators, market reports, and content on this website are provided for informational purposes only and do not constitute investment advice, financial advice, or any other type of advice. You should not treat any information on this website as a basis for making investment decisions without consulting a qualified financial advisor.' },
              { title: 'Accuracy of Information', content: 'While we endeavour to keep the information on this website up to date and correct, E&H Advisors makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.' },
              { title: 'Property Listings', content: 'All property listings, prices, specifications, and availability on this website are subject to change without notice. Prices mentioned are indicative and subject to confirmation at the time of transaction. Actual prices may vary due to market conditions, negotiation, and other factors.' },
              { title: 'ROI & Financial Projections', content: 'Any return on investment (ROI) figures, cap rates, rental yields, appreciation forecasts, and other financial projections displayed on this website are estimates based on historical data and current market trends. These projections are not guarantees of future performance. Real estate investments involve risk, and actual returns may be significantly lower than projected or may result in a loss.' },
              { title: 'RERA & Legal Compliance', content: 'Property buyers and investors are advised to conduct their own due diligence including RERA registration verification, title check, and legal scrutiny before entering into any transaction. E&H Advisors facilitates but does not guarantee the legal status of any property.' },
              { title: 'Third-Party Information', content: 'This website may contain market data, research reports, and information sourced from third parties. E&H Advisors is not responsible for the accuracy or completeness of third-party information.' },
              { title: 'No Solicitation', content: 'Nothing on this website constitutes a solicitation or offer to buy or sell any property or financial instrument. All enquiries submitted through this website are treated as expressions of interest only and do not constitute a binding agreement.' },
              { title: 'Contact', content: 'If you have questions about this disclaimer, please contact us at legal@estatesheritage.in or +91 98180 12345.' },
            ].map((s) => (
              <div key={s.title} className="border-b border-white/6 pb-8 last:border-0 last:pb-0">
                <h2 className="font-display text-display-sm text-off-white mb-4">{s.title}</h2>
                <p className="font-sans text-sm text-mist/70 leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
