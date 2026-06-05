import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import { corridorLabels, statusLabels } from '@/data/projects'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import Badge from '@/components/ui/Badge'

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="property-card rounded-2xl flex flex-col overflow-hidden group"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="gold">{statusLabels[project.status]}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="navy">{corridorLabels[project.corridor]}</Badge>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-display-sm text-off-white leading-tight mb-1">{project.name}</h3>
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin size={12} className="text-gold shrink-0" />
          <span className="font-sans text-xs text-mist/70">{project.location}</span>
        </div>
        <p className="text-sm text-mist/70 font-sans leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>
        <p className="font-sans text-xs text-mist/50 mb-4">Developer: {project.developer}</p>
        <Link to={`/projects/${project.slug}`} className="btn-ghost-gold w-full justify-center text-xs group">
          View Project Details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function FeaturedProperties() {
  return (
    <section className="section-pad bg-navy-mid/20" aria-label="Featured projects">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Featured Projects</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-display-xl text-off-white">
              Curated Advisory Catalogue
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Link to="/projects" className="btn-outline group shrink-0">
              View All Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
