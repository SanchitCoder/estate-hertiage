import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { corridors } from '@/data/corridors'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'

export default function Corridors() {
  usePageSEO(
    'Gurugram Real Estate Corridors | SPR, CPR, Dwarka Expressway, Golf Course Extension',
    'Corridor-led Gurugram real estate intelligence. Compare Dwarka Expressway, CPR, SPR, Golf Course Extension, and New Gurgaon before choosing a project.'
  )

  return (
    <div className="pt-20">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Corridor Intelligence</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              Gurugram&apos;s Corridor-Led Real Estate Story
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed mb-4">
              Gurugram&apos;s real estate story is corridor-led. Infrastructure, social catchment, developer profile, rental depth, and buyer demand vary sharply from one belt to another, which is why location strategy matters as much as project selection.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              The corridor framework helps clients compare not just property options, but the logic of where capital should be deployed based on objective, timeline, and risk appetite.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container-wide py-16 space-y-20">
        {corridors.map((corridor, i) => (
          <motion.section
            key={corridor.id}
            id={corridor.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <span className="section-label mb-3 block">{corridor.name}</span>
              <h2 className="font-display text-display-lg text-off-white mb-3">{corridor.headline}</h2>
              {corridor.subheadline && (
                <p className="font-sans text-sm text-gold/80 mb-4 italic">{corridor.subheadline}</p>
              )}
              <p className="font-sans text-base text-mist/70 leading-relaxed mb-6">{corridor.overview}</p>
              <Link to={corridor.ctaLink} className="btn-outline group text-sm">
                {corridor.cta}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className={`space-y-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              {corridor.marketSnapshot.length > 0 && (
                <div className="glass-card p-6 rounded-2xl">
                  <h3 className="font-sans text-xs font-500 tracking-widest uppercase text-gold mb-4">Market Snapshot</h3>
                  <ul className="space-y-2">
                    {corridor.marketSnapshot.map((item) => (
                      <li key={item} className="font-sans text-sm text-mist/70 flex items-start gap-2">
                        <span className="text-gold mt-1">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="font-sans text-xs font-500 tracking-widest uppercase text-gold mb-4">
                  {corridor.id === 'new-gurgaon' ? 'Who Should Consider It' : 'Who Should Invest Here'}
                </h3>
                <ul className="space-y-3">
                  {corridor.whoShouldInvest.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-sm text-mist/70">
                      <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <section className="py-16 bg-navy-mid/15 text-center">
        <div className="container-narrow">
          <p className="font-sans text-base text-mist/70 mb-4">
            The right corridor depends on what you are solving for: appreciation, prestige, lifestyle, rental strength, or entry value.
          </p>
          <p className="font-sans text-base text-off-white mb-8">
            Our role is to help you choose the right geography before you choose the right project.
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
