import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '919818012345'
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to discuss Gurugram corridor and project advisory with Estates & Heritage Advisors.")

interface ChatMessage {
  id: number
  from: 'agent' | 'user'
  text: string
  time: string
}

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    from: 'agent',
    text: 'Hi there! 👋 Welcome to Estates & Heritage Advisors. How can I help you today?',
    time: 'Now',
  },
  {
    id: 2,
    from: 'agent',
    text: 'I can help you with:\n• Corridor comparison (SPR, CPR, Dwarka, Golf Course)\n• New launch project evaluation\n• NRI advisory support\n• Booking a 30-minute advisory call',
    time: 'Now',
  },
]

const quickReplies = [
  'I want to evaluate new launch projects',
  'Compare Gurugram corridors',
  'Book an advisory call',
  'NRI investment guidance',
]

function formatTime() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
}

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState('')
  const [showSticky, setShowSticky] = useState(false)
  const [notificationCount] = useState(1)

  useEffect(() => {
    const handler = () => setShowSticky(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { id: Date.now(), from: 'user', text, time: formatTime() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // Stub auto-reply
    setTimeout(() => {
      const reply: ChatMessage = {
        id: Date.now() + 1,
        from: 'agent',
        text: 'Thanks for your message! An advisor will be with you shortly. You can also call us at +91 98180 12345 or visit our Contact page to book a consultation.',
        time: formatTime(),
      }
      setMessages((prev) => [...prev, reply])
    }, 1200)
  }

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-navy-deep/95 backdrop-blur-md border-t border-white/8 p-3 flex gap-2"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-sans text-sm font-500"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+919818012345"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gold text-navy-deep font-sans text-sm font-500"
            >
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-card hover:bg-emerald-400 hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>

        {/* Chat Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold text-navy-deep shadow-gold-lg hover:bg-gold-light hover:scale-105 transition-all duration-300"
            aria-label={chatOpen ? 'Close chat' : 'Open live chat'}
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
            {!chatOpen && notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-sans font-500 rounded-full flex items-center justify-center">
                {notificationCount}
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
            className="fixed bottom-28 right-6 z-30 w-80 sm:w-96 flex flex-col"
            style={{ maxHeight: '480px' }}
          >
            <div className="bg-navy-deep border border-white/10 rounded-2xl shadow-card-hover overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="bg-navy-mid px-4 py-3 border-b border-white/8 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                  <span className="font-sans text-xs font-500 text-navy-deep">E&H</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-500 text-off-white">E&H Advisors</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="font-sans text-xs text-mist/70">Online · Typically replies in minutes</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin" style={{ maxHeight: '280px' }}>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 font-sans text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === 'agent'
                          ? 'bg-navy-mid text-off-white rounded-tl-sm'
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

              {/* Quick Replies */}
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {quickReplies.slice(0, 2).map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="text-xs font-sans px-3 py-1.5 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-200"
                  >
                    {qr}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/8 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                  placeholder="Type a message..."
                  className="flex-1 bg-navy-mid/50 border border-white/10 rounded-xl px-3 py-2.5 font-sans text-sm text-off-white placeholder:text-mist/50 outline-none focus:border-gold/40 transition-colors"
                />
                <button
                  onClick={() => sendMessage(input)}
                  className="p-2.5 rounded-xl bg-gold text-navy-deep hover:bg-gold-light transition-colors duration-200"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
