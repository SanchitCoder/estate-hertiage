import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { founder, advisors } from '@/data/team'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'

const philosophy = [
  {
    title: 'Research-first',
    desc: 'Markets move in cycles, corridors mature at different speeds, and not all launches deserve attention. Recommendations are grounded in corridor trajectory, infrastructure progress, developer execution, product differentiation, and realistic holding outcomes.',
  },
  {
    title: 'ROI-driven',
    desc: 'Whether the buyer is an investor or an end-user, capital efficiency matters. Advisory is built around where value is already priced in, where premium is justified, and where timing can materially affect long-term outcomes.',
  },
  {
    title: 'Relationship-based',
    desc: 'Real estate advisory is built on trust, not urgency. The focus remains on repeat relationships, thoughtful decisions, and honest guidance that stays useful even when the right answer is to wait or not proceed.',
  },
]

const vsCompetitors = [
  { aspect: 'Starting Point', broker: 'Starts with available inventory', eha: 'Starts with client objective and holding horizon' },
  { aspect: 'Approach', broker: 'Pushes project features', eha: 'Evaluates corridor, product, and developer fit' },
  { aspect: 'Focus', broker: 'Focuses on transaction closure', eha: 'Frames risks as clearly as opportunities' },
  { aspect: 'Location Strategy', broker: 'Often treats locations generically', eha: 'Matches capital to micro-market strategy' },
]

const milestones = [
  '14+ years in Gurugram real estate advisory and market tracking.',
  "Active coverage of Gurugram's major luxury and new-launch corridors.",
  '18 tracked projects across four strategic micro-markets.',
  'Advisory positioning aligned with HNI, NRI, CXO, and premium end-user needs.',
]

export default function About() {
  usePageSEO(
    'About Bipin Chadha & E&HA | Gurugram Real Estate Advisory',
    'Learn about Estates & Heritage Advisors — research-based strategic real estate advisory founded by Bipin Chadha in Gurugram.'
  )

  return (
    <div className="pt-20">
      <div className="relative py-24 noise-overlay overflow-hidden" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">About E&HA</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-6 max-w-3xl">
              Serious Real Estate Decisions Deserve Serious Advisory
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed mb-4">
              Estates & Heritage Advisors was built on a simple conviction: serious real estate decisions deserve serious advisory. In a market crowded with inventory-led selling, the focus is on helping clients make clearer, more disciplined property decisions through research, context, and long-term thinking.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              The advisory practice operates primarily across Gurugram&apos;s new-launch and under-construction residential corridors, with strength in luxury housing, branded residences, corridor analysis, and buyer-fit decision support.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="section-label mb-3 block">Founder</span>
              <h2 className="font-display text-display-xl text-off-white mb-2">{founder.name}</h2>
              <p className="font-sans text-sm text-gold mb-6">{founder.role}</p>
              {founder.bio.map((para, i) => (
                <p key={i} className="font-sans text-base text-mist/70 leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-mid/15">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Our Team</span>
              <span className="w-8 h-px bg-gold" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white">
              The People Behind the Advisory
            </motion.h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12">
            {advisors.map((member) => (
              <motion.div key={member.name} variants={fadeUp} className="grid sm:grid-cols-[180px_1fr] gap-8 items-start">
                <div
                  className="relative rounded-2xl overflow-hidden max-w-[180px] bg-navy-mid/40"
                  style={{ aspectRatio: member.imageAspect ?? '4 / 5' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                </div>
                <div>
                  <h3 className="font-display text-display-sm text-off-white mb-1">{member.name}</h3>
                  <p className="font-sans text-sm text-gold mb-4">{member.role}</p>
                  {member.bio.map((para, i) => (
                    <p key={i} className="font-sans text-sm text-mist/70 leading-relaxed mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white">Philosophy</motion.h2>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="glass-card p-6 rounded-2xl">
                <h3 className="font-display text-display-sm text-gold mb-3">{p.title}</h3>
                <p className="font-sans text-sm text-mist/70 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-display-xl text-off-white text-center mb-12">
            The E&HA Difference
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-sans text-xs text-mist/60 uppercase tracking-wide" />
                  <th className="text-left py-4 px-4 font-sans text-xs text-mist/60 uppercase tracking-wide">Traditional Broker</th>
                  <th className="text-left py-4 px-4 font-sans text-xs text-gold uppercase tracking-wide">E&HA Advisory</th>
                </tr>
              </thead>
              <tbody>
                {vsCompetitors.map((row) => (
                  <tr key={row.aspect} className="border-b border-white/6">
                    <td className="py-4 px-4 font-sans text-sm text-mist/50">{row.aspect}</td>
                    <td className="py-4 px-4 font-sans text-sm text-mist/70">{row.broker}</td>
                    <td className="py-4 px-4 font-sans text-sm text-off-white">{row.eha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-mid/15">
        <div className="container-narrow">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-display text-display-lg text-off-white text-center mb-8">
            Milestones
          </motion.h2>
          <ul className="space-y-4">
            {milestones.map((m) => (
              <li key={m} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-mist/80">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container-narrow">
          <p className="font-sans text-base text-mist/70 mb-6">
            If the requirement is a recommendation built around objective rather than a generic pitch, schedule an advisory call.
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
