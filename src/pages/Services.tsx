import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TrendingUp, Home, Globe, Users, Briefcase, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'

const services = [
  {
    icon: TrendingUp,
    title: 'Investor Advisory',
    description:
      'For investors, the right decision is rarely just about the best-looking launch. Entry timing, corridor maturity, pricing logic, rental relevance, and exit visibility usually matter more than brochure features.',
    process: 'The investor advisory process includes corridor comparison, project shortlisting, developer assessment, entry-point evaluation, and holding-horizon strategy.',
    color: 'gold',
  },
  {
    icon: Home,
    title: 'End-User Guidance',
    description:
      'A home purchase should not be reduced to size and payment plans. Lifestyle fit, commute logic, school access, family needs, design quality, and long-term livability all influence the right decision.',
    process: 'The end-user process includes needs mapping, location selection, project filtering, configuration advice, and structured decision support.',
    color: 'accent',
  },
  {
    icon: Globe,
    title: 'NRI Services',
    description:
      'NRI investors are a primary audience, making remote trust and credible local interpretation central to the advisory model.',
    process: 'NRI services include remote shortlisting, live walkthrough support, local market context, practical legal overview, documentation guidance, and repatriation basics at a directional level.',
    color: 'gold',
  },
  {
    icon: Users,
    title: 'Channel Partner Collaboration',
    description:
      'Channel partners and wealth managers are part of the target audience, making this a strategic relationship offering as well as a buyer-facing one.',
    process: 'Collaboration is framed around structured product understanding, timely market updates, selective inventory visibility, and alignment around the right buyer fit.',
    color: 'accent',
  },
  {
    icon: Briefcase,
    title: 'Corporate / CXO Real Estate',
    description:
      'Senior professionals often evaluate real estate through the lens of lifestyle quality, discretion, identity, convenience, and capital preservation rather than broad-market deal narratives.',
    process: 'E&HA positions as a strategic advisor for premium residences, branded assets, and long-term property decisions aligned with executive lifestyles.',
    color: 'gold',
  },
]

export default function Services() {
  usePageSEO(
    'Investor, NRI & End-User Property Advisory | Gurugram',
    'Advisory services for investors, end-users, NRIs, channel partners, and CXOs evaluating Gurugram real estate.'
  )

  return (
    <div className="pt-20">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Advisory Services</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              Judgment, Not Just Access
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              Advisory services are built for buyers who need judgment, not just access. The service offering aligns with investors, end-users, NRIs, channel partners, and senior professionals.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                className={`glass-card border ${service.color === 'gold' ? 'border-gold/15' : 'border-accent/15'} rounded-2xl p-8 lg:p-10`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${service.color === 'gold' ? 'bg-gold/15 border border-gold/25' : 'bg-accent/15 border border-accent/25'}`}>
                    <service.icon size={22} className={service.color === 'gold' ? 'text-gold' : 'text-accent'} />
                  </div>
                  <div>
                    <h2 className="font-display text-display-md text-off-white mb-3">{service.title}</h2>
                    <p className="font-sans text-base text-mist/70 leading-relaxed mb-4">{service.description}</p>
                    <p className="font-sans text-sm text-mist/60 leading-relaxed">{service.process}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 text-center bg-navy-mid/15">
        <div className="container-narrow">
          <p className="font-display text-display-md text-off-white mb-6">Begin with an advisory call, not a property list.</p>
          <Link to="/contact" className="btn-primary group">
            Schedule an Advisory Call
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
