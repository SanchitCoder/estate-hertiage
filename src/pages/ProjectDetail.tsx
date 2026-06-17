import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Download, MessageCircle, Phone, ExternalLink, AlertTriangle } from 'lucide-react'
import { getProjectBySlug, getSimilarProjects, statusLabels, getCorridorLabel } from '@/data/projects'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'
import Badge from '@/components/ui/Badge'

const WHATSAPP_NUMBER = '919818012345'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  usePageSEO(
    project ? `${project.name} | Gurugram New Launch | E&HA` : 'Project | Estates & Heritage Advisors',
    project?.advisoryHook
  )

  if (!project) return <Navigate to="/projects" replace />

  const similar = getSimilarProjects(project)
  const whatsappText = encodeURIComponent(`Hello, I'm interested in ${project.name}. I'd like to discuss unit selection and current availability.`)
  const corridorLabel = getCorridorLabel(project)

  const snapshotRows: [string, string][] = [
    ['Developer', project.developer],
    ...(project.brandPartner ? [['Brand Partner', project.brandPartner] as [string, string]] : []),
    ['Location', project.location],
    ['Corridor', corridorLabel],
    ['Project Type', project.projectType],
    ...(project.landArea ? [['Land Area', project.landArea] as [string, string]] : []),
    ...(project.totalUnits ? [['Total Units', project.totalUnits] as [string, string]] : []),
    ['Type', project.type === 'residential' ? 'Luxury Residential' : 'Commercial'],
    ['Configurations', project.configurations],
    ...(project.superAreaRange ? [['Super Area', project.superAreaRange] as [string, string]] : []),
    ['Starting Price', project.startingPrice],
    ['Possession', project.possession],
    ['Status', statusLabels[project.status]],
    ['RERA No.', project.rera],
    ...(project.paymentPlan ? [['Payment Plan', project.paymentPlan] as [string, string]] : []),
    ...(project.eoiAmount ? [['EOI Amount', project.eoiAmount] as [string, string]] : []),
  ]

  return (
    <div className="pt-20">
      <div className="relative py-16 noise-overlay overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-deep/85" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
              <Badge variant="gold">{statusLabels[project.status]}</Badge>
              <Badge variant="navy">{corridorLabel}</Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-3">{project.name}</motion.h1>
            <motion.p variants={fadeUp} className="font-display text-display-sm text-gold italic mb-4 max-w-2xl">{project.advisoryHook}</motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-mist/70">
              <MapPin size={14} className="text-gold" />
              <span className="font-sans text-sm">{project.location}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-display-md text-off-white mb-4">Overview</h2>
              <p className="font-sans text-base text-mist/70 leading-relaxed">{project.overview}</p>
            </section>

            <section>
              <h2 className="font-display text-display-md text-off-white mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.keyHighlights.map((item) => (
                  <li key={item} className="font-sans text-sm text-mist/70 flex items-start gap-3">
                    <span className="text-gold mt-1 shrink-0">✦</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.priceTable && project.priceTable.length > 0 && (
              <section>
                <h2 className="font-display text-display-md text-off-white mb-4">Price List (at launch)</h2>
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="font-sans text-xs font-500 text-gold uppercase tracking-wide px-5 py-3">Configuration</th>
                          <th className="font-sans text-xs font-500 text-gold uppercase tracking-wide px-5 py-3">Size</th>
                          <th className="font-sans text-xs font-500 text-gold uppercase tracking-wide px-5 py-3">Price (Onwards)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.priceTable.map((row) => (
                          <tr key={row.configuration} className="border-b border-white/6 last:border-0">
                            <td className="font-sans text-sm text-off-white px-5 py-3">{row.configuration}</td>
                            <td className="font-sans text-sm text-mist/70 px-5 py-3">{row.size}</td>
                            <td className="font-sans text-sm text-gold px-5 py-3">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {project.connectivity.length > 0 && (
              <section>
                <h2 className="font-display text-display-md text-off-white mb-4">Location &amp; Connectivity</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.connectivity.map((c) => (
                    <div key={c.label} className="glass-card p-4 rounded-xl">
                      <p className="font-sans text-xs text-gold uppercase tracking-wide mb-1">{c.label}</p>
                      <p className="font-sans text-sm text-mist/80">{c.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.amenities.length > 0 && (
              <section>
                <h2 className="font-display text-display-md text-off-white mb-4">Amenities &amp; Features</h2>
                <div className="space-y-4">
                  {project.amenities.map((group) => (
                    <div key={group.category} className="glass-card p-5 rounded-xl">
                      <h3 className="font-sans text-xs font-500 text-gold uppercase tracking-wide mb-3">{group.category}</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {group.items.map((item) => (
                          <li key={item} className="font-sans text-sm text-mist/70 flex items-start gap-2">
                            <span className="text-gold">·</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="glass-card border border-accent/20 p-6 rounded-2xl">
              <h2 className="font-display text-display-md text-off-white mb-4">Investment Snapshot</h2>
              <p className="font-sans text-base text-mist/70 leading-relaxed">{project.investmentSnapshot}</p>
            </section>

            {project.disclosures && project.disclosures.length > 0 && (
              <section className="glass-card border border-amber-500/20 p-6 rounded-2xl">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <h2 className="font-display text-display-sm text-off-white">Important Disclosure</h2>
                </div>
                <div className="space-y-3">
                  {project.disclosures.map((d) => (
                    <p key={d} className="font-sans text-sm text-mist/70 leading-relaxed">{d}</p>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="font-display text-display-md text-off-white mb-4">Developer</h2>
              <p className="font-sans text-base text-mist/70">
                {project.developer}
                {project.brandPartner && (
                  <>
                    {' '}
                    in partnership with <span className="text-gold">{project.brandPartner}</span>
                  </>
                )}
              </p>
            </section>

            {project.advisoryNote && (
              <section className="glass-card border border-gold/20 p-6 rounded-2xl">
                <h2 className="font-display text-display-md text-off-white mb-4">E&amp;HA Advisory Note</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-xs text-gold uppercase tracking-wide mb-1">Investment Thesis</p>
                    <p className="font-sans text-sm text-mist/70">{project.advisoryNote.investmentThesis}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-gold uppercase tracking-wide mb-1">End-User Case</p>
                    <p className="font-sans text-sm text-mist/70">{project.advisoryNote.endUserCase}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-gold uppercase tracking-wide mb-1">Risk Flags</p>
                    <p className="font-sans text-sm text-mist/70">{project.advisoryNote.riskFlags}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs text-gold uppercase tracking-wide mb-1">Verdict</p>
                    <p className="font-sans text-sm text-off-white">{project.advisoryNote.verdict}</p>
                  </div>
                </div>
              </section>
            )}

            {project.brochureUrl && (
              <section>
                <h2 className="font-display text-display-md text-off-white mb-4">Official Project Page</h2>
                <a
                  href={project.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View full details &amp; brochure on developer website
                  <ExternalLink size={14} />
                </a>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card border border-gold/15 p-6 rounded-2xl sticky top-28">
              <h3 className="font-display text-display-sm text-off-white mb-4">Project Snapshot</h3>
              <dl className="space-y-3">
                {snapshotRows.map(([label, value]) => (
                  <div key={label} className="border-b border-white/6 pb-3">
                    <dt className="font-sans text-xs text-mist/50 uppercase tracking-wide">{label}</dt>
                    <dd className="font-sans text-sm text-off-white mt-0.5 leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <section className="mt-16 glass-card border border-gold/20 p-8 rounded-2xl text-center">
          <h2 className="font-display text-display-md text-off-white mb-4">
            Interested in {project.name}?
          </h2>
          <p className="font-sans text-sm text-mist/70 mb-6 max-w-xl mx-auto">
            Let&apos;s discuss unit selection, floor preference, and payment-plan structuring before the next price revision.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary group">
              <Phone size={16} />
              Schedule Advisory Call
            </Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer" className="btn-outline group">
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
            {project.brochureUrl ? (
              <a href={project.brochureUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold group">
                <Download size={16} />
                View Brochure
              </a>
            ) : (
              <button className="btn-ghost-gold group">
                <Download size={16} />
                Download Brochure
              </button>
            )}
          </div>
        </section>

        {similar.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-display-md text-off-white mb-6">Similar Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similar.map((p) => (
                <Link key={p.id} to={`/projects/${p.slug}`} className="property-card rounded-2xl overflow-hidden group">
                  <div className="h-40 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-display-sm text-off-white">{p.name}</h3>
                    <p className="font-sans text-xs text-mist/60 mt-1">{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
