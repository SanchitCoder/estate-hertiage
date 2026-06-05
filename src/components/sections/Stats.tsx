import { motion } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { staggerContainer, fadeUp } from '@/lib/animations'

interface StatItem {
  prefix?: string
  value: number
  suffix: string
  label: string
  sublabel?: string
}

const stats: StatItem[] = [
  { value: 10, suffix: '+', label: 'Years of Excellence', sublabel: 'Established 2014' },
  { prefix: '₹', value: 500, suffix: 'Cr+', label: 'Transactions Advised', sublabel: 'Across NCR markets' },
  { value: 1200, suffix: '+', label: 'Satisfied Clients', sublabel: 'HNI, NRI & Institutional' },
  { value: 50, suffix: '+', label: 'Premium Projects', sublabel: 'Residential & Commercial' },
  { value: 16, suffix: '.4%', label: 'Avg. Client IRR', sublabel: 'Trailing 3 years' },
]

function StatCounter({ stat }: { stat: StatItem }) {
  const { ref, count } = useCounter(stat.value, 2200)

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-display-lg text-gold group-hover:scale-105 transition-transform duration-300 inline-block">
        {stat.prefix && <span>{stat.prefix}</span>}
        {count}
        <span>{stat.suffix}</span>
      </div>
      <div className="mt-2">
        <p className="font-sans text-sm font-500 text-off-white">{stat.label}</p>
        {stat.sublabel && (
          <p className="font-sans text-xs text-mist/60 mt-0.5">{stat.sublabel}</p>
        )}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden" aria-label="Company statistics">
      {/* Horizontal gold line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, #eaa939 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              className={i < stats.length - 1 ? 'lg:border-r border-white/8' : ''}
            >
              <StatCounter stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
