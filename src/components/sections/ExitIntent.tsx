import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ArrowRight } from 'lucide-react'
import { useExitIntent } from '@/hooks/useExitIntent'
import { reportDownloadSchema, type ReportDownloadForm } from '@/lib/validators'
import { Input, Select } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { overlayVariants, modalVariants } from '@/lib/animations'

export default function ExitIntent() {
  const { triggered, dismiss } = useExitIntent(6000)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReportDownloadForm>({
    resolver: zodResolver(reportDownloadSchema),
    defaultValues: { buyerType: 'investor', budget: '2-5cr' },
  })

  const onSubmit = async (data: ReportDownloadForm) => {
    await new Promise((r) => setTimeout(r, 600))
    console.log('Exit intent report download:', data)
    setSubmitted(true)
    setTimeout(dismiss, 2500)
  }

  return (
    <AnimatePresence>
      {triggered && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Download market report">
          <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="exit" className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" onClick={dismiss} />
          <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className="relative w-full max-w-md glass-card-dark border border-gold/20 rounded-2xl p-6 lg:p-8 shadow-card-hover">
            <button onClick={dismiss} className="absolute top-4 right-4 p-1.5 rounded-lg text-mist hover:text-off-white hover:bg-white/8 transition-colors" aria-label="Close">
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <Download size={40} className="text-gold mx-auto mb-4" />
                <h3 className="font-display text-display-sm text-off-white mb-2">Report on its way!</h3>
                <p className="font-sans text-sm text-mist/70">Check your inbox for the Q2 2026 Gurugram New Launch Report.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <Download size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-display-sm text-off-white">Q2 2026 Gurugram New Launch Report</h3>
                    <p className="font-sans text-xs text-mist/60">Free market intelligence</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-mist/70 mb-5">
                  A concise market report for investors, NRIs, and premium homebuyers tracking Gurugram&apos;s most relevant new-launch opportunities.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
                  <Input label="Name" placeholder="Your Name" error={errors.name?.message} {...register('name')} />
                  <Input label="Mobile" placeholder="+91 98765 43210" type="tel" error={errors.phone?.message} {...register('phone')} />
                  <Input label="Email" placeholder="you@example.com" type="email" error={errors.email?.message} {...register('email')} />
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
                  <Button type="submit" variant="primary" fullWidth loading={isSubmitting} iconRight={<ArrowRight size={14} />}>
                    Download the Report
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
