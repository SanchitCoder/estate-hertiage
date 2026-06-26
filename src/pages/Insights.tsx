import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'
import Badge from '@/components/ui/Badge'

export default function Insights() {
  usePageSEO(
    'Gurugram Market Research & New Launch Insights',
    'Gurugram corridor reports, new launch analysis, and investment thesis notes from Estates & Heritage Advisors.'
  )

  const featured = articles.filter((a) => a.featured)

  return (
    <div className="pt-20">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Insights / Research</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              Gurugram Market Intelligence
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed mb-4">
              These research notes track Gurugram through the lens that matters to serious buyers: corridor evolution, developer intent, pricing logic, launch timing, and long-term positioning.
            </motion.p>
            <motion.p variants={fadeUp} className="font-sans text-sm text-mist/60 max-w-2xl">
              Analytical, useful, and distinct from generic blog content — built as a long-term authority and SEO asset.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide">
          <h2 className="font-display text-display-lg text-off-white mb-8">Featured Research</h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <motion.div key={article.id} variants={scaleIn} whileHover={{ y: -4 }} className="property-card rounded-2xl overflow-hidden flex flex-col group">
                <div className="relative h-44 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                  <div className="absolute top-3 left-3"><Badge variant="gold">{article.category}</Badge></div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-display-sm text-off-white leading-tight mb-2 line-clamp-2">{article.title}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs text-mist/60 flex items-center gap-1"><Calendar size={11} /> {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span className="font-sans text-xs text-mist/60 flex items-center gap-1"><Clock size={11} /> {article.readTime} min</span>
                  </div>
                  <p className="font-sans text-sm text-mist/70 leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-navy-mid/15">
        <div className="container-wide">
          <h2 className="font-display text-display-lg text-off-white mb-8">All Research Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div key={article.id} className="glass-card p-6 rounded-2xl flex gap-4">
                <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <Badge variant="gold" className="mb-2">{article.category}</Badge>
                  <h3 className="font-display text-display-sm text-off-white mb-1 line-clamp-2">{article.title}</h3>
                  <p className="font-sans text-xs text-mist/60 mb-2">{article.readTime} min read</p>
                  <p className="font-sans text-sm text-mist/70 line-clamp-2">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link to="/contact" className="btn-outline group inline-flex">
          Discuss Market Context with an Advisor
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  )
}
