import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'
import { contactSchema, type ContactForm } from '@/lib/validators'
import { Input, Textarea, Select } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { projects, corridorLabels } from '@/data/projects'
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/lib/animations'
import { usePageSEO } from '@/lib/seo'

const WHATSAPP_NUMBER = '919818012345'
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to discuss Gurugram real estate advisory with Estates & Heritage Advisors.")

export default function Contact() {
  usePageSEO(
    'Contact Estates & Heritage Advisors | Gurugram Advisory Call',
    'Contact Estates & Heritage Advisors for corridor comparison, project evaluation, or strategic entry into Gurugram real estate.'
  )

  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { buyerType: 'investor' },
  })

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Contact:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="relative py-20 noise-overlay" style={{ background: 'linear-gradient(135deg, #071e28 0%, #0c3040 100%)' }}>
        <div className="container-wide">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold" />
              <span className="section-label">Contact</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-xl text-off-white mb-4">
              Start With Clarity Around Your Objective
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-base text-mist/70 max-w-2xl leading-relaxed">
              Whether the requirement is corridor comparison, project evaluation, or a strategic entry into Gurugram real estate, the conversation should begin with clarity around objective and timing.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <div>
              <h2 className="font-display text-display-md text-off-white mb-6">Alternate Contact Options</h2>
              <div className="space-y-5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 rounded-xl glass-card border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                >
                  <MessageCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-500 text-off-white mb-1">WhatsApp</p>
                    <p className="font-sans text-xs text-mist/70">Prefer a direct conversation? Message on WhatsApp for faster project and corridor discussions.</p>
                  </div>
                </a>

                <div className="flex gap-4 p-4 rounded-xl glass-card border border-white/8">
                  <Calendar size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-500 text-off-white mb-1">Schedule a Call</p>
                    <p className="font-sans text-xs text-mist/70 mb-2">Book a structured 30-minute advisory slot with our team.</p>
                    <a href="tel:+919818012345" className="font-sans text-xs text-gold hover:text-gold-light transition-colors">
                      Call +91 98180 12345
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl glass-card border border-white/8">
                  <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-500 text-off-white mb-1">Office</p>
                    <p className="font-sans text-sm text-mist/70">Gurugram, Haryana</p>
                  </div>
                </div>

                <a href="tel:+919818012345" className="flex gap-4 p-4 rounded-xl glass-card border border-white/8 hover:border-gold/20 transition-colors">
                  <Phone size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-500 text-off-white">+91 98180 12345</p>
                  </div>
                </a>

                <a href="mailto:hello@estatesheritage.in" className="flex gap-4 p-4 rounded-xl glass-card border border-white/8 hover:border-gold/20 transition-colors">
                  <Mail size={20} className="text-gold shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-off-white">hello@estatesheritage.in</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
            <div className="glass-card border border-white/10 rounded-2xl p-6 lg:p-8">
              <h2 className="font-display text-display-md text-off-white mb-2">Let&apos;s Understand What You Are Solving For</h2>
              <p className="font-sans text-sm text-mist/60 mb-6">Serious real estate decisions deserve clarity, context, and timing discipline.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-display text-display-md text-off-white mb-2">Request Received</h3>
                  <p className="font-sans text-sm text-mist/70">An advisor will reach out within one business day.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm">Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" placeholder="Your Name" error={errors.name?.message} {...register('name')} />
                    <Input label="Mobile Number" placeholder="+91 98765 43210" type="tel" error={errors.phone?.message} {...register('phone')} />
                  </div>
                  <Input label="Email Address" placeholder="you@example.com" type="email" error={errors.email?.message} {...register('email')} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select
                      label="Corridor of Interest"
                      options={[
                        { value: '', label: 'Select corridor (optional)' },
                        ...Object.entries(corridorLabels).map(([value, label]) => ({ value, label })),
                      ]}
                      error={errors.corridor?.message}
                      {...register('corridor')}
                    />
                    <Select
                      label="Project of Interest"
                      options={[
                        { value: '', label: 'Select project (optional)' },
                        ...projects.map((p) => ({ value: p.slug, label: p.name })),
                      ]}
                      error={errors.project?.message}
                      {...register('project')}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select
                      label="Budget Range"
                      options={[
                        { value: '', label: 'Select budget (optional)' },
                        { value: 'under-2cr', label: 'Under ₹2 Cr' },
                        { value: '2-5cr', label: '₹2–5 Cr' },
                        { value: '5-10cr', label: '₹5–10 Cr' },
                        { value: '10cr-plus', label: '₹10 Cr+' },
                      ]}
                      error={errors.budget?.message}
                      {...register('budget')}
                    />
                    <Select
                      label="Buyer Type"
                      options={[
                        { value: 'investor', label: 'Investor' },
                        { value: 'end-user', label: 'End-User' },
                        { value: 'nri', label: 'NRI' },
                        { value: 'channel-partner', label: 'Channel Partner' },
                        { value: 'corporate', label: 'Corporate' },
                      ]}
                      error={errors.buyerType?.message}
                      {...register('buyerType')}
                    />
                  </div>
                  <Textarea label="Message" placeholder="Tell us about your objective, timeline, and what you're evaluating..." rows={4} error={errors.message?.message} {...register('message')} />
                  <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting} iconRight={<ArrowRight size={16} />}>
                    Request Advisory Call
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
