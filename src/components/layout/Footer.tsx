import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { contact } from '@/lib/contact'
import Logo from '@/components/ui/Logo'

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
            <Logo link={false} imageClassName="h-14 w-auto max-w-[240px]" />
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
                <a href={contact.phoneTel} className="flex items-center gap-3 text-sm text-mist/80 font-sans hover:text-gold transition-colors duration-200">
                  <Phone size={16} className="text-gold shrink-0" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contact.emailMailto} className="flex items-center gap-3 text-sm text-mist/80 font-sans hover:text-gold transition-colors duration-200">
                  <Mail size={16} className="text-gold shrink-0" />
                  {contact.email}
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
