import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Clock, Building2, Map, ChevronDown } from 'lucide-react'
import { staggerContainer, fadeUp, fadeRight } from '@/lib/animations'
import { useI18n } from '@/lib/i18n'
import { featuredProjects } from '@/data/projects'

const trustAnchors = [
  {
    icon: Clock,
    title: '14+ Years of Market Experience',
    desc: "Advising clients across Gurugram's evolving residential landscape with a research-first approach built on market cycles, developer analysis, and corridor intelligence.",
  },
  {
    icon: Building2,
    title: '7 Active Projects Tracked',
    desc: "A curated residential project universe across Gurugram's most relevant luxury and new-launch micro-markets on Dwarka Expressway and SPR, including branded residences, institutional developer launches, and high-conviction corridor plays.",
  },
  {
    icon: Map,
    title: '4 Core Corridors Covered',
    desc: 'Deep coverage across Dwarka Expressway, CPR, SPR & Sohna Road, and Golf Course Road Extension, with corridor-specific investment context instead of generic inventory pushing.',
  },
]

export default function Hero() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const featured = featuredProjects[0]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden noise-overlay" aria-label="Hero section">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featured.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/20" />
      </motion.div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/40 to-transparent z-10" />

      <motion.div style={{ y: textY, opacity }} className="container-wide relative z-10 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Strategic Real Estate Advisory · Gurugram</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-display text-display-2xl text-off-white leading-[1.04] mb-6">
              <span className="block">Strategic Real Estate Advisory.</span>
              <span className="block text-gradient-gold">Gurugram&apos;s New Launch Corridors.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-sans text-base lg:text-lg text-mist/80 leading-relaxed mb-8 max-w-lg">
              {t.hero.subheading}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-primary group">
                {t.hero.ctaPrimary}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-outline">
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {trustAnchors.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-3 rounded-xl bg-navy-mid/30 border border-white/8">
                  <Icon size={16} className="text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-sans text-xs font-500 text-off-white mb-1">{title}</p>
                    <p className="font-sans text-xs text-mist/60 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="hidden lg:block">
            <div className="relative">
              <div className="glass-card gold-border overflow-hidden rounded-2xl shadow-card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="badge-gold text-xs">Featured</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="font-display text-xl text-off-white">{featured.name}</p>
                    <p className="font-sans text-xs text-mist/80 mt-0.5">{featured.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-sans text-sm text-mist/70 leading-relaxed mb-4 line-clamp-2">{featured.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs text-mist/60">Developer</p>
                      <p className="font-display text-lg text-off-white">{featured.developer}</p>
                    </div>
                    <Link to="/contact" className="btn-primary text-xs px-5 py-2.5">
                      Request Advisory
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="font-sans text-xs text-mist/50 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
