import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Map } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function CorridorHighlight() {
  return (
    <section className="section-pad relative overflow-hidden" aria-label="Corridor highlight">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/10 to-transparent" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="glass-card border border-gold/15 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-6">
            <Map size={24} className="text-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-display-lg text-off-white mb-4">
            Gurugram Is No Longer One Market
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 leading-relaxed mb-4">
            It is a set of sharply differentiated corridors, each with a different maturity curve, buyer profile, infrastructure story, and pricing logic.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-base text-mist/80 leading-relaxed mb-8">
            Estates & Heritage Advisors helps clients understand that difference before they commit capital.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/corridors" className="btn-primary group">
              Explore Gurugram Corridors
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
