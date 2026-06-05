import { motion } from 'framer-motion'
import { Search, TrendingUp, Handshake } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const points = [
  {
    icon: Search,
    title: 'Research-first',
    desc: 'Every recommendation begins with micro-market context, developer quality, pricing logic, and corridor-level demand drivers.',
  },
  {
    icon: TrendingUp,
    title: 'ROI-driven',
    desc: 'The advisory process evaluates not just launch excitement, but entry point, appreciation potential, rental relevance, and exit visibility across the right holding period.',
  },
  {
    icon: Handshake,
    title: 'Relationship-based',
    desc: 'The role is not to push inventory, but to advise with honesty, clarity, and continuity across the full decision cycle.',
  },
]

export default function WhyEHA() {
  return (
    <section className="section-pad bg-navy-mid/15" aria-label="Why E&HA">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="section-label">Why E&HA</span>
            <span className="w-8 h-px bg-gold" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white max-w-2xl mx-auto">
            Advisory Built on Judgment, Not Inventory
          </motion.h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {points.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} custom={i} className="glass-card gold-border-hover p-6 rounded-2xl group text-center">
              <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <p.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-display-sm text-off-white mb-3">{p.title}</h3>
              <p className="font-sans text-sm text-mist/70 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
