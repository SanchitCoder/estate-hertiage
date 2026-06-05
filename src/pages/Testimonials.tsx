import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, ArrowRight, CheckCircle2 } from 'lucide-react'
import { testimonials, transactionHighlights } from '@/data/testimonials'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'

export default function Testimonials() {
  usePageSEO(
    'Client Perspectives | Estates & Heritage Advisors',
    'Client perspectives on Estates & Heritage Advisors — corridor understanding, honest filtering, and thoughtful Gurugram real estate decisions.'
  )

  return (
    <div className="pt-20">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Client Perspectives</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              Clarity Before Commitment
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              Clients work with Estates & Heritage Advisors because they want clarity before commitment. The value lies in corridor understanding, honest filtering, and a more thoughtful decision process than the market usually offers.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.id} variants={fadeUp} className="glass-card border border-white/8 p-6 rounded-2xl">
                <Quote size={24} className="text-gold/40 mb-4" />
                <p className="font-sans text-base text-mist/80 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-sans text-sm font-500 text-off-white" style={{ backgroundColor: t.bgColor }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-500 text-off-white">{t.clientType}</p>
                    <p className="font-sans text-xs text-mist/60">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-navy-mid/15">
        <div className="container-narrow">
          <h2 className="font-display text-display-lg text-off-white text-center mb-8">Transaction Highlights</h2>
          <ul className="space-y-4">
            {transactionHighlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-mist/80">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container-narrow">
          <p className="font-sans text-base text-mist/70 mb-6">
            The most valuable real estate advice usually happens before the site visit.
          </p>
          <Link to="/contact" className="btn-primary group">
            Schedule an Advisory Call
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
