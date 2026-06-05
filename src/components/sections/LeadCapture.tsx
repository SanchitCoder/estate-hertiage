import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

export default function LeadCapture() {
  return (
    <section
      className="section-pad relative overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 40%, #0f3d52 100%)' }}
      aria-label="Advisory call CTA"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, #eaa939 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="font-sans text-lg text-mist/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether the buyer is evaluating a branded residence, a family home, or a corridor-led investment position, the right first step is a strategic conversation.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="btn-primary group text-base px-8 py-4">
              Book Your 30-Minute Advisory Call
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
