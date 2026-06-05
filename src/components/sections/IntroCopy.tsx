import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function IntroCopy() {
  return (
    <section className="section-pad" aria-label="Advisory approach">
      <div className="container-narrow">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">The E&HA Approach</span>
            <span className="w-8 h-px bg-gold" />
          </motion.div>
          <motion.p variants={fadeUp} className="font-sans text-lg text-mist/80 leading-relaxed mb-6">
            At Estates & Heritage Advisors, the process does not begin with brochures. It begins with the buyer&apos;s objective, the corridor&apos;s trajectory, the developer&apos;s credibility, and the likely outcome over the next three to five years.
          </motion.p>
          <motion.p variants={fadeUp} className="font-display text-display-md text-gold italic mb-6">
            That is the difference between brokerage and advisory.
          </motion.p>
          <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 leading-relaxed">
            For an investor, that may mean evaluating early-mover value versus maturity premium. For an end-user, it may mean identifying the right location, lifestyle fit, and timing window. For an NRI, it often means creating clarity remotely, with trusted on-ground perspective and disciplined decision support.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
