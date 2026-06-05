import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, SlidersHorizontal, X } from 'lucide-react'
import { projects, corridorLabels, statusLabels, type Project, type ProjectStatus } from '@/data/projects'
import type { CorridorId } from '@/data/corridors'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'
import Badge from '@/components/ui/Badge'

const budgetRanges = [
  { label: 'All Budgets', min: 0, max: Infinity },
  { label: 'Under ₹2 Cr', min: 0, max: 20000000 },
  { label: '₹2–5 Cr', min: 20000000, max: 50000000 },
  { label: '₹5–10 Cr', min: 50000000, max: 100000000 },
  { label: '₹10 Cr+', min: 100000000, max: Infinity },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="property-card rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="gold">{statusLabels[project.status]}</Badge>
          {project.featured && <Badge variant="accent">Featured</Badge>}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="navy">{corridorLabels[project.corridor]}</Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-display-sm text-off-white mb-1">{project.name}</h3>
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin size={12} className="text-gold shrink-0" />
          <span className="font-sans text-xs text-mist/70">{project.location}</span>
        </div>
        <p className="font-sans text-xs text-mist/50 mb-3">Developer: {project.developer}</p>
        <p className="font-sans text-sm text-mist/70 leading-relaxed line-clamp-2 mb-4 flex-1">{project.description}</p>
        <Link to={`/projects/${project.slug}`} className="btn-ghost-gold w-full justify-center text-xs group">
          View Project Details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  usePageSEO(
    'New Launch Projects in Gurugram | Curated by Estates & Heritage Advisors',
    'Curated advisory catalogue of new launch projects in Gurugram across SPR, CPR, Dwarka Expressway, and Golf Course Extension.'
  )

  const [searchParams] = useSearchParams()
  const initialCorridor = searchParams.get('corridor') as CorridorId | null

  const [corridor, setCorridor] = useState<CorridorId | 'all'>(initialCorridor || 'all')
  const [status, setStatus] = useState<ProjectStatus | 'all'>('all')
  const [type, setType] = useState<'all' | 'residential' | 'commercial'>('all')
  const [budgetIdx, setBudgetIdx] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    const budget = budgetRanges[budgetIdx]
    return projects.filter((p) => {
      if (corridor !== 'all' && p.corridor !== corridor) return false
      if (status !== 'all' && p.status !== status) return false
      if (type !== 'all' && p.type !== type) return false
      if (p.budgetMin && (p.budgetMin < budget.min || p.budgetMin > budget.max)) return false
      return true
    })
  }, [corridor, status, type, budgetIdx])

  return (
    <div className="pt-20">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Projects</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              New Launch Projects in Gurugram
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              Active listings are selected based on corridor relevance, developer credibility, product differentiation, and fit for investors, end-users, and NRI buyers. For current inventory movement, price revisions, and configuration availability, direct advisory contact is recommended.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-6">
            <p className="font-sans text-sm text-mist/60">{filtered.length} of {projects.length} tracked projects</p>
            <button onClick={() => setShowFilters(!showFilters)} className="btn-ghost-gold text-xs lg:hidden">
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden'} lg:block mb-8`}>
            <div className="glass-card p-5 rounded-2xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-500 text-mist mb-2 font-sans uppercase tracking-wide">Corridor</label>
                <select value={corridor} onChange={(e) => setCorridor(e.target.value as CorridorId | 'all')} className="input-field text-sm">
                  <option value="all">All Corridors</option>
                  {Object.entries(corridorLabels).map(([id, label]) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-500 text-mist mb-2 font-sans uppercase tracking-wide">Type</label>
                <select value={type} onChange={(e) => setType(e.target.value as typeof type)} className="input-field text-sm">
                  <option value="all">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-500 text-mist mb-2 font-sans uppercase tracking-wide">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value as ProjectStatus | 'all')} className="input-field text-sm">
                  <option value="all">All Status</option>
                  <option value="new-launch">New Launch</option>
                  <option value="under-construction">Under Construction</option>
                  <option value="active">Active</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-500 text-mist mb-2 font-sans uppercase tracking-wide">Budget Range</label>
                <select value={budgetIdx} onChange={(e) => setBudgetIdx(+e.target.value)} className="input-field text-sm">
                  {budgetRanges.map((b, i) => (
                    <option key={b.label} value={i}>{b.label}</option>
                  ))}
                </select>
              </div>
            </div>
            {(corridor !== 'all' || status !== 'all' || type !== 'all' || budgetIdx !== 0) && (
              <button
                onClick={() => { setCorridor('all'); setStatus('all'); setType('all'); setBudgetIdx(0) }}
                className="mt-3 flex items-center gap-1.5 text-xs font-sans text-mist hover:text-gold transition-colors"
              >
                <X size={12} /> Reset Filters
              </button>
            )}
          </div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-display-md text-mist/50 mb-4">No projects match your filters</p>
              <button onClick={() => { setCorridor('all'); setStatus('all'); setType('all'); setBudgetIdx(0) }} className="btn-ghost-gold text-sm">Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
