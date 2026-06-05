import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function Testimonials() {
  const preview = testimonials.slice(0, 2)

  return (
    <section className="section-pad bg-navy-mid/15" aria-label="Client testimonials">
      <div className="container-wide">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="text-center mb-12">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Client Perspectives</span>
            <span className="w-8 h-px bg-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white">
            Clarity Before Commitment
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {preview.map((t) => (
            <div key={t.id} className="glass-card border border-white/8 p-6 rounded-2xl">
              <Quote size={24} className="text-gold/40 mb-4" />
              <p className="font-sans text-sm text-mist/80 leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <p className="font-sans text-xs text-mist/60">{t.clientType} · {t.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials" className="btn-outline group">
            View All Perspectives
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
