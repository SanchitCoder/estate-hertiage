import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/contact'
import { companyLogo } from '@/lib/images'
import { leadSchema, type LeadForm } from '@/lib/validators'
import { submitChatLead } from '@/lib/webhook'
import { Input } from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { overlayVariants, modalVariants } from '@/lib/animations'

interface ChatMessage {
  id: number
  from: 'agent' | 'user'
  text: string
  time: string
}

interface QualifyingAnswers {
  buyerObjective: string
  corridor: string
  budget: string
}

const QUALIFYING_QUESTIONS = [
  {
    key: 'buyerObjective' as const,
    question: 'What best describes your objective?',
    options: ['Investment', 'End-use home', 'NRI purchase', 'Still exploring'],
  },
  {
    key: 'corridor' as const,
    question: 'Which Gurugram corridor interests you most?',
    options: ['Dwarka Expressway', 'CPR', 'SPR & Sohna Road', 'Golf Course Extension', 'Not sure yet'],
  },
  {
    key: 'budget' as const,
    question: 'What is your approximate budget?',
    options: ['Under ₹2 Cr', '₹2–5 Cr', '₹5–10 Cr', '₹10 Cr+'],
  },
]

function formatTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
}

function buildWelcomeMessages(): ChatMessage[] {
  return [
    {
      id: 1,
      from: 'agent',
      text: 'Hi there! 👋 Welcome to Estates & Heritage Advisors.',
      time: 'Now',
    },
    {
      id: 2,
      from: 'agent',
      text: 'I\'ll ask three quick questions so we can connect you with the right advisor.',
      time: 'Now',
    },
    {
      id: 3,
      from: 'agent',
      text: QUALIFYING_QUESTIONS[0].question,
      time: 'Now',
    },
  ]
}

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false)
  const [showLeadModal, setShowLeadModal] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Partial<QualifyingAnswers>>({})
  const [messages, setMessages] = useState<ChatMessage[]>(buildWelcomeMessages())
  const [showSticky, setShowSticky] = useState(false)
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
  })

  useEffect(() => {
    const handler = () => setShowSticky(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const openChat = useCallback(() => {
    setChatOpen(true)
  }, [])

  const resetBot = useCallback(() => {
    setQuestionIndex(0)
    setAnswers({})
    setMessages(buildWelcomeMessages())
    setShowLeadModal(false)
    setLeadSubmitted(false)
    setSubmitError(null)
    reset()
  }, [reset])

  const closeChat = useCallback(() => {
    setChatOpen(false)
    setShowLeadModal(false)
  }, [])

  const handleOptionSelect = (option: string) => {
    const current = QUALIFYING_QUESTIONS[questionIndex]
    if (!current) return

    const userMsg: ChatMessage = {
      id: Date.now(),
      from: 'user',
      text: option,
      time: formatTime(),
    }

    const updatedAnswers = { ...answers, [current.key]: option }
    setAnswers(updatedAnswers)

    const nextIndex = questionIndex + 1

    if (nextIndex < QUALIFYING_QUESTIONS.length) {
      const agentReply: ChatMessage = {
        id: Date.now() + 1,
        from: 'agent',
        text: QUALIFYING_QUESTIONS[nextIndex].question,
        time: formatTime(),
      }
      setMessages((prev) => [...prev, userMsg, agentReply])
      setQuestionIndex(nextIndex)
      return
    }

    const closingReply: ChatMessage = {
      id: Date.now() + 1,
      from: 'agent',
      text: 'Perfect — please share your contact details so an advisor can reach out.',
      time: formatTime(),
    }
    setMessages((prev) => [...prev, userMsg, closingReply])
    setQuestionIndex(nextIndex)
    setTimeout(() => setShowLeadModal(true), 400)
  }

  const onLeadSubmit = async (data: LeadForm) => {
    setSubmitError(null)
    const qualifying = answers as QualifyingAnswers
    if (!qualifying.buyerObjective || !qualifying.corridor || !qualifying.budget) {
      setSubmitError('Please complete all qualifying questions first.')
      return
    }

    try {
      await submitChatLead(data, qualifying)
      setLeadSubmitted(true)
      setShowLeadModal(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          from: 'agent',
          text: `Thank you, ${data.name.split(' ')[0]}! Your details have been received. An advisor will contact you shortly. You can also call us at ${contact.phoneDisplay}.`,
          time: formatTime(),
        },
      ])
      reset()
    } catch {
      setSubmitError('We could not submit your details. Please try again.')
    }
  }

  const currentQuestion = questionIndex < QUALIFYING_QUESTIONS.length
    ? QUALIFYING_QUESTIONS[questionIndex]
    : null

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <AnimatePresence>
        {showSticky && !chatOpen && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-navy-deep/95 backdrop-blur-md border-t border-white/8 p-3 flex gap-2"
          >
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-sans text-sm font-500"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
            <a
              href={contact.phoneTel}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-navy-mid border border-white/10 text-off-white font-sans text-sm font-500"
            >
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp — direct message */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-card hover:bg-emerald-400 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon />
        </motion.a>

        {/* Advisory chatbot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            onClick={() => (chatOpen ? closeChat() : openChat())}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy-deep shadow-gold-lg hover:bg-gold-light hover:scale-105 transition-all duration-300"
            aria-label={chatOpen ? 'Close advisory chat' : 'Open advisory chat'}
          >
            <AnimatePresence mode="wait">
              {chatOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <MessageCircle size={22} />
                </motion.span>
              )}
            </AnimatePresence>
            {!chatOpen && !leadSubmitted && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-sans font-500 rounded-full flex items-center justify-center">
                1
              </span>
            )}
          </button>
        </motion.div>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-28 right-6 z-40 w-80 sm:w-96 flex flex-col"
            style={{ maxHeight: '520px' }}
          >
            <div className="bg-navy-deep border border-white/10 rounded-2xl shadow-card-hover overflow-hidden flex flex-col h-full">
              <div className="bg-navy-mid px-4 py-3 border-b border-white/8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/25 overflow-hidden flex items-center justify-center shrink-0">
                  <img src={companyLogo} alt="" className="w-full h-full object-cover object-center scale-150" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm font-500 text-off-white">E&H Advisory Chat</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="font-sans text-xs text-mist/70">Lead qualification · 3 quick questions</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetBot}
                  className="text-xs font-sans text-mist/60 hover:text-off-white transition-colors"
                >
                  Restart
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin" style={{ maxHeight: '300px' }}>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 font-sans text-sm leading-relaxed ${
                        msg.from === 'agent'
                          ? 'bg-navy-mid text-off-white rounded-tl-sm border border-white/8'
                          : 'bg-gold text-navy-deep rounded-tr-sm'
                      }`}
                    >
                      {msg.text}
                      <p className={`text-[10px] mt-1 ${msg.from === 'agent' ? 'text-mist/50' : 'text-navy-deep/60'}`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {currentQuestion && !leadSubmitted && (
                <div className="px-4 pb-3 flex gap-2 flex-wrap border-t border-white/8 pt-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionSelect(option)}
                      className="text-xs font-sans px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {leadSubmitted && (
                <div className="px-4 py-3 border-t border-white/8 text-center">
                  <CheckCircle2 size={20} className="text-gold mx-auto mb-1" />
                  <p className="font-sans text-xs text-mist/70">Lead submitted successfully</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lead capture popup after qualifying questions */}
      <AnimatePresence>
        {showLeadModal && chatOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Share your contact details">
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
              onClick={() => setShowLeadModal(false)}
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-md glass-card-dark border border-gold/25 rounded-2xl p-6 lg:p-8 shadow-card-hover"
            >
              <button
                type="button"
                onClick={() => setShowLeadModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-mist hover:text-off-white hover:bg-white/8 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <h3 className="font-display text-display-sm text-off-white mb-1">Almost done</h3>
              <p className="font-sans text-sm text-mist/70 mb-5">
                Share your name, phone, and email so an advisor can follow up on your enquiry.
              </p>

              <form onSubmit={handleSubmit(onLeadSubmit)} noValidate className="space-y-3">
                <Input label="Full Name" placeholder="Your Name" error={errors.name?.message} {...register('name')} />
                <Input label="Mobile Number" placeholder="+91 98765 43210" type="tel" error={errors.phone?.message} {...register('phone')} />
                <Input label="Email Address" placeholder="you@example.com" type="email" error={errors.email?.message} {...register('email')} />
                {submitError && (
                  <p className="font-sans text-sm text-red-400" role="alert">{submitError}</p>
                )}
                <Button type="submit" variant="primary" fullWidth loading={isSubmitting}>
                  Submit Details
                </Button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
