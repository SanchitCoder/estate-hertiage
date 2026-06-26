import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/lib/animations'

const buyerBenefits = [
  'ROI-first property matching — not inventory dumping',
  'Independent RERA & legal due diligence on every deal',
  'Exclusive off-market access via private developer networks',
  'Full post-acquisition management: tenant, maintenance, resale',
]

const sellerBenefits = [
  'Professional staging & premium photography included',
  'Access to our 1,200+ pre-qualified private buyer network',
  'Data-driven pricing to maximise your sale price',
  'Average 6–8 weeks to close vs. 6 months market average',
]

export default function DualPath() {
  return (
    <section className="section-pad relative overflow-hidden" aria-label="Buyer and seller paths">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/10 to-transparent" aria-hidden="true" />

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">How Can We Help?</span>
            <span className="w-8 h-px bg-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white">
            Your Journey Starts Here
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Buyer Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="group relative overflow-hidden rounded-2xl bg-navy-mid/40 border border-gold/15 hover:border-gold/40 transition-all duration-500 p-8"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(234,169,57,0.06) 0%, transparent 60%)' }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={24} className="text-gold" />
              </div>
              <div className="mb-2">
                <span className="section-label">For Investors & Buyers</span>
              </div>
              <h3 className="font-display text-display-lg text-off-white mb-4">
                Invest with Precision
              </h3>
              <p className="font-sans text-sm text-mist/70 leading-relaxed mb-6">
                Whether you're building a rental portfolio, searching for your dream home, or deploying capital into commercial real estate — we match you with assets that deliver measurable returns.
              </p>
              <ul className="space-y-3 mb-8">
                {buyerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-sans text-mist/80">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary group/btn">
                Explore Investment Properties
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Seller Card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="group relative overflow-hidden rounded-2xl bg-navy-mid/40 border border-accent/15 hover:border-accent/40 transition-all duration-500 p-8"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(121,165,236,0.06) 0%, transparent 60%)' }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 size={24} className="text-accent" />
              </div>
              <div className="mb-2">
                <span className="font-sans text-xs font-500 tracking-widest uppercase text-accent">For Property Owners & Sellers</span>
              </div>
              <h3 className="font-display text-display-lg text-off-white mb-4">
                Sell for Maximum Value
              </h3>
              <p className="font-sans text-sm text-mist/70 leading-relaxed mb-6">
                Don't leave money on the table. Our conflict-free advisory model and institutional-grade marketing get you the best price, fast — without the commission games of traditional brokers.
              </p>
              <ul className="space-y-3 mb-8">
                {sellerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm font-sans text-mist/80">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-ghost-gold group/btn">
                Get Your Property Valued
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
