import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { drawerVariants, overlayVariants } from '@/lib/animations'
import { contact } from '@/lib/contact'
import Logo from '@/components/ui/Logo'

interface NavLink {
  href: string
  label: string
  exact?: boolean
}

const navLinks: NavLink[] = [
  { href: '/', label: 'home', exact: true },
  { href: '/about', label: 'about' },
  { href: '/corridors', label: 'corridors' },
  { href: '/projects', label: 'projects' },
  { href: '/services', label: 'services' },
  { href: '/insights', label: 'insights' },
  { href: '/testimonials', label: 'testimonials' },
  { href: '/contact', label: 'contact' },
]

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (href: string, exact = false) => {
    if (exact) return location.pathname === href
    return location.pathname.startsWith(href) && href !== '/'
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-deep/95 backdrop-blur-md border-b border-white/8 py-3 shadow-card'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <Logo />

            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {navLinks.map(({ href, label, exact }) => (
                <Link
                  key={href}
                  to={href}
                  className={`px-3 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                    isActive(href, exact)
                      ? 'text-gold font-500'
                      : 'text-mist hover:text-off-white hover:bg-white/6'
                  }`}
                >
                  {t.nav[label as keyof typeof t.nav]}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-sans text-xs text-mist hover:text-off-white hover:bg-white/6 transition-all duration-200"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                {lang.toUpperCase()}
              </button>
              <a
                href={contact.phoneTel}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-sans text-sm text-mist hover:text-gold transition-all duration-200"
              >
                <Phone size={14} />
                <span>{contact.phoneDisplay}</span>
              </a>
              <Link to="/contact" className="btn-primary text-xs py-2.5 px-5">
                {t.nav.bookCall}
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg text-mist hover:text-off-white hover:bg-white/8 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-navy-deep/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-navy-deep border-l border-white/8 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/8">
                <Logo />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-mist hover:text-off-white hover:bg-white/8 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
                {navLinks.map(({ href, label, exact }) => (
                  <Link
                    key={href}
                    to={href}
                    className={`px-4 py-3 rounded-xl font-sans text-sm transition-all duration-200 ${
                      isActive(href, exact)
                        ? 'bg-gold/10 text-gold font-500 border border-gold/20'
                        : 'text-mist hover:text-off-white hover:bg-white/6'
                    }`}
                  >
                    {t.nav[label as keyof typeof t.nav]}
                  </Link>
                ))}
              </nav>
              <div className="p-5 border-t border-white/8 flex flex-col gap-3">
                <a
                  href={contact.phoneTel}
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy-mid/50 border border-white/8 font-sans text-sm text-off-white"
                >
                  <Phone size={16} className="text-gold" />
                  {contact.phoneDisplay}
                </a>
                <Link to="/contact" className="btn-primary text-center">
                  {t.nav.bookCall}
                </Link>
                <button
                  onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-white/10 font-sans text-xs text-mist hover:text-off-white transition-colors"
                >
                  <Globe size={14} />
                  Switch to {lang === 'en' ? 'हिंदी' : 'English'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
