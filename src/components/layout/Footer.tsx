import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

function Logo({ tagline }: { tagline: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="6" fill="#0f3d52" />
        <path d="M18 6L30 15V30H6V15L18 6Z" stroke="#eaa939" strokeWidth="1.5" fill="none" />
        <path d="M14 30V22H22V30" stroke="#eaa939" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="18" cy="15" r="2" fill="#eaa939" />
      </svg>
      <div>
        <div className="font-display text-base font-600 text-off-white leading-none" style={{ fontWeight: 600 }}>
          Estates &amp; Heritage Advisors
        </div>
        <div className="font-sans text-[9px] font-500 tracking-[0.2em] uppercase text-mist/70 mt-0.5">
          {tagline}
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/corridors', label: t.nav.corridors },
    { href: '/projects', label: t.nav.projects },
    { href: '/services', label: t.nav.services },
    { href: '/insights', label: t.nav.insights },
    { href: '/testimonials', label: t.nav.testimonials },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <footer className="bg-navy-deep border-t border-white/6">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo tagline={t.footer.tagline} />
            <p className="mt-4 font-sans text-sm text-mist/70 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-navy-mid/50 border border-white/8 text-mist hover:text-accent hover:border-accent/30 transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-navy-mid/50 border border-white/8 text-mist hover:text-gold hover:border-gold/30 transition-all duration-200" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-navy-mid/50 border border-white/8 text-mist hover:text-accent hover:border-accent/30 transition-all duration-200" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-500 tracking-widest uppercase text-gold mb-5">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link to={href} className="text-sm text-mist/80 font-sans hover:text-off-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-500 tracking-widest uppercase text-gold mb-5">
              Advisory Services
            </h3>
            <ul className="space-y-3">
              {['Investor Advisory', 'End-User Guidance', 'NRI Services', 'Channel Partner Collaboration', 'Corporate / CXO Real Estate'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-mist/80 font-sans hover:text-off-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-500 tracking-widest uppercase text-gold mb-5">
              {t.nav.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex gap-3 text-sm text-mist/80 font-sans">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>Gurugram, Haryana</span>
                </div>
              </li>
              <li>
                <a href="tel:+919818012345" className="flex items-center gap-3 text-sm text-mist/80 font-sans hover:text-gold transition-colors duration-200">
                  <Phone size={16} className="text-gold shrink-0" />
                  +91 98180 12345
                </a>
              </li>
              <li>
                <a href="mailto:hello@estatesheritage.in" className="flex items-center gap-3 text-sm text-mist/80 font-sans hover:text-gold transition-colors duration-200">
                  <Mail size={16} className="text-gold shrink-0" />
                  hello@estatesheritage.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/6">
          <p className="font-sans text-xs text-mist/50 leading-relaxed max-w-4xl">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mist/50 font-sans">
            © {new Date().getFullYear()} Estates &amp; Heritage Advisors. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Use' },
              { href: '/disclaimer', label: 'Disclaimer' },
            ].map(({ href, label }) => (
              <Link key={href} to={href} className="text-xs text-mist/50 font-sans hover:text-mist transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
