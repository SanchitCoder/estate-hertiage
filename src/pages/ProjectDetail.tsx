import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Download, MessageCircle, Phone } from 'lucide-react'
import { getProjectBySlug, getSimilarProjects, corridorLabels, statusLabels } from '@/data/projects'
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
              <Badge variant="navy">{corridorLabels[project.corridor]}</Badge>
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

            {project.connectivity.length > 0 && (
              <section>
                <h2 className="font-display text-display-md text-off-white mb-4">Connectivity</h2>
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
                <h2 className="font-display text-display-md text-off-white mb-4">Amenities</h2>
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

            <section>
              <h2 className="font-display text-display-md text-off-white mb-4">Developer</h2>
              <p className="font-sans text-base text-mist/70">
                {project.developer}
                {project.brandPartner && <> in partnership with <span className="text-gold">{project.brandPartner}</span></>}
              </p>
            </section>

            {project.advisoryNote && (
              <section className="glass-card border border-gold/20 p-6 rounded-2xl">
                <h2 className="font-display text-display-md text-off-white mb-4">E&HA Advisory Note</h2>
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
          </div>

          <div className="space-y-6">
            <div className="glass-card border border-gold/15 p-6 rounded-2xl sticky top-28">
              <h3 className="font-display text-display-sm text-off-white mb-4">Project Snapshot</h3>
              <dl className="space-y-3">
                {[
                  ['Developer', project.developer],
                  ...(project.brandPartner ? [['Brand Partner', project.brandPartner]] : []),
                  ['Location', project.location],
                  ['Type', project.type === 'residential' ? 'Luxury Residential' : 'Commercial'],
                  ...(project.configurations ? [['Configurations', project.configurations]] : []),
                  ...(project.superAreaRange ? [['Super Area', project.superAreaRange]] : []),
                  ['Starting Price', project.startingPrice],
                  ['Possession', project.possession],
                  ['Status', statusLabels[project.status]],
                  ['RERA No.', project.rera],
                ].map(([label, value]) => (
                  <div key={label as string} className="border-b border-white/6 pb-3">
                    <dt className="font-sans text-xs text-mist/50 uppercase tracking-wide">{label}</dt>
                    <dd className="font-sans text-sm text-off-white mt-0.5">{value}</dd>
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
            <button className="btn-ghost-gold group">
              <Download size={16} />
              Download Brochure
            </button>
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
